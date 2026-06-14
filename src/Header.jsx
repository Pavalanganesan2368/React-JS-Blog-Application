import React, { useContext } from 'react'
import { ContextData } from './Context/DataContext'

const Header = ({ title }) => {
  const { width } = useContext(ContextData);
  return (
    <header className="bg-blue-400 p-3 text-3xl font-bold flex justify-between">
      <h1>{title}</h1>
      <h1>{width >= 968 ? "LAPTOP" : width >= 768 ? "TABLET" : "MOBILE"}</h1>
    </header>
  )
}

export default Header;