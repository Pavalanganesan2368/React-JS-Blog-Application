import React, { useContext } from 'react'
import { ContextData } from './Context/DataContext';
import { useNavigate } from "react-router-dom";

const About = () => {
  const { title, setTitle, description, setDescription, handleAdd, handleUpdate, editId } = useContext(ContextData);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  }
  return (
    <form className="p-2" onSubmit={(e) => handleSubmit(e)}>
      <div className="flex flex-col gap-2 mb-3">
        <label className='text-md font-bold' htmlFor="post-title">Post Title</label>
        <input 
          type="text" 
          className="border p-2 rounded-lg"
          placeholder='Enter Your Post Title...'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className='text-md font-bold' htmlFor="post-title">Post Description</label>
        <textarea 
          className="border p-2 rounded-lg h-60"
          placeholder='Enter Your Post Title...'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button className='bg-red-500 rounded-lg mt-3 cursor-pointer hover:bg-red-400 w-full p-3 text-white' onClick={() => {editId ? handleUpdate() : handleAdd()}}>SUBMIT</button>
    </form>
  )
}

export default About