import React, { createContext, useEffect, useState } from "react";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";

export const ContextData = createContext({});

export const DataContext = ({ children }) => {
  const [items, setItems] = useState([]);
  const [editId, setEditId] = useState(null);
  const [searchPost, setSearchPost] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const filteredPost = items.filter((item) => item.postTitle.toLowerCase().includes(search.toLowerCase()));
    setSearchPost(filteredPost.reverse());
  }, [items, search]);

  const handleAdd = () => {
    if (!title || !description) return;
    
    const date = new Date();
    const post = {
      id: crypto.randomUUID(),
      postTitle: title,
      postTimer: `Posted At : ${format(new Date(), "dd MMM yyyy, hh:mm a")}`,
      postDescription: description,
    };

    setItems([...items, post]);
    setTitle("");
    setDescription("");
  }

  const handleDelete = (id) => {
    const deleteItem = items.filter((item) => item.id !== id);
    setItems(deleteItem);
  }

  const handleEdit  = (id) => {
    const postItem = items.find(item => item.id === id);
    setTitle(postItem.postTitle);
    setDescription(postItem.postDescription);
    setEditId(id);
  }

  const handleUpdate = () => {
    const updatePosts = items.map((item) => {
      return item.id === editId ? 
      { ...item, postTitle : title, postDescription : description } : item
    });

    console.log(items);

    setItems(updatePosts);
    setTitle("");
    setDescription("");
    setEditId(null);
  }

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
        searchPost
      }}
    >
      {children}
    </ContextData.Provider>
  );
};
