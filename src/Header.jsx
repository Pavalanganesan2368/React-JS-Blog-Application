import React from 'react'

const Header = ({ title }) => {
  return (
    <header className="bg-blue-500 p-3 text-3xl font-bold">
      <h1>{title}</h1>
    </header>
  )
}

export default Header