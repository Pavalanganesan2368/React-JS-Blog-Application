import React, { useContext } from 'react'
import { ContextData } from './Context/DataContext';
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { items, handleDelete, handleEdit, searchPost } = useContext(ContextData);
  const navigate = useNavigate();
  
  return (
    <ul className="overflow-auto max-h-105">
      {searchPost.length ? 
        (searchPost.map((item) => (
          <li key={item?.id} className='bg-gray-100 p-3 mb-2 rounded-2xl'>
              <section className="pb-3 text-md">
                <Link to={`/posts/${item?.id}`}><h1 className="font-bold text-xl">{item?.postTitle}</h1></Link>
                <h1 className="text-gray-500 text-sm mt-2">{item?.postTimer}</h1>
              </section>
              <h1 className="text-lg">{item?.postDescription?.length >= 25? `${item?.postDescription.slice(0, 25)}...` : item?.postDescription}</h1>
            </li>
        )))
        : 
        (
          <section className="w-full h-100 flex justify-center items-center font-bold text-xl">
            <p>Posts Not Found...</p>
          </section>
        )
      }
    </ul>
  )
}

export default Home