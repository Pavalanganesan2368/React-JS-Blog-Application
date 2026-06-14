import React, { useContext } from 'react'
import { ContextData } from './Context/DataContext'

const SearchComponent = () => {
  const { setSearch, search } = useContext(ContextData);
  return (
    <>
      <input 
        type="text"
        className="border w-115 p-2 rounded-md"
        placeholder="Search The Posts..."
        value={search}
        onChange={(e) => setSearch((e.target.value))}
      />
    </>
  )
}

export default SearchComponent