import React, { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import useWindowSize from "../hooks/useWindowSize";
import useApi from "../hooks/useApi";

export const ContextData = createContext({});

export const DataContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchPost, setSearchPost] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(null);

  const { width } = useWindowSize();
  const { api} = useApi();

  useEffect(() => {
    const filteredPost = items.filter((item) =>
      item.postTitle.toLowerCase().includes(search.toLowerCase()),
    );
    setSearchPost(filteredPost.reverse());
  }, [items, search]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/");
        setItems(response.data);
        setIsError(null);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    const interval = setInterval(() => {
      fetchPosts();
    }, 1000);

    return clearInterval(() => interval);
  }, []);

  const handleAdd = async () => {
    try {
      if (!title.trim() || !description.trim()) return;
      const date = new Date();

      const newPost = {
        id: crypto.randomUUID(),
        postTitle: title,
        postTimer: `Posted At : ${format(new Date(), "dd MMM yyyy, hh:mm a")}`,
        postDescription: description,
      };

      await api.post("", newPost);

      setItems([...items, newPost]);
      setTitle("");
      setDescription("");
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      const deleteItem = items.filter((item) => item.id !== id);
      await api.delete(`/${id}`);
      setItems(deleteItem);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEdit = (id) => {
    const postItem = items.find((item) => item.id === id);
    setTitle(postItem.postTitle);
    setDescription(postItem.postDescription);
    setEditId(id);
  };

  const handleUpdate = async () => {
    try {
      const postUpdated = {
        postTitle: title,
        postTimer: `Posted At : ${format(new Date(), "dd MMM yyyy, hh:mm a")}`,
        postDescription: description,
      };
      await api.put(`/${editId}`, postUpdated);

      const updatePosts = items.map((item) =>
        item.id === editId
          ? { ...item, postTitle: title, postDescription: description }
          : item,
      );

      setItems(updatePosts);
      setTitle("");
      setDescription("");
      setEditId(null);
    } catch (error) {
      setIsError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ContextData.Provider
      value={{
        items,
        handleDelete,
        handleAdd,
        handleUpdate,
        title,
        setTitle,
        description,
        setDescription,
        handleEdit,
        editId,
        searchPost,
        search,
        setSearch,
        searchPost,
        width,
        isError,
        isLoading,
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
