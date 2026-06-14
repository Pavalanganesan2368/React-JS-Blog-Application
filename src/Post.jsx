import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ContextData } from "./Context/DataContext";

const Post = () => {
  const { id } = useParams();
  const { items, handleDelete, handleEdit } = useContext(ContextData);
  const navigate = useNavigate();

  const handleDeleteClick = (idPost) => {
    navigate("/");
    handleDelete(idPost);
  };

    const handleUpdateClick = (idPost) => {
    handleEdit(idPost);
    navigate("/about");
  }

  const post = items.find((item) => item.id === id);

  return (
    <section className="bg-gray-200 p-3 h-full">
      <h1 className="text-center text-2xl font-medium">Posts Details</h1>
          <section className="flex justify-between my-5 text-xl font-bold">
            <h1>Title : {post?.postTitle}</h1>
            <h1>{post?.postTimer}</h1>
          </section>
          <h1 className="text-lg mt-2 text-justify">{post.postDescription}</h1>
          <section className="flex gap-3 mt-5">
            <button
              className="bg-red-500 p-3 mt-4 text-white font-bold rounded-md hover:bg-red-400 cursor-pointer"
              onClick={() => handleDeleteClick(post?.id)}
            >
              Delete Post
            </button>
            <button
              onClick={() => handleUpdateClick(post?.id)}
              className=" bg-blue-500 p-3 mt-4 text-white font-bold rounded-md hover:bg-blue-400 cursor-pointer"
            >
              Update Post
            </button>
          </section>
    </section>
  );
};

export default Post;
