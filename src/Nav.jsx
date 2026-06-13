import React from "react";
import { Link } from "react-router-dom";
import SearchComponent from "./SearchComponent";

const Nav = () => {
  return (
    <nav className="flex justify-between flex-wrap items-center gap-3 px-2 py-2 bg-gray-800 text-white">
      <ul className="list-none flex gap-3">
        <li className="flex justify-center items-center hover:bg-gray-100 hover:text-black">
          <Link to="/">POSTS</Link>
        </li>
        <li className="flex justify-center items-center hover:bg-gray-100 hover:text-black">
          <Link to="/about">FORM</Link>
        </li>
        <li className="flex justify-center items-center h-10 hover:bg-gray-100 hover:text-black">
          <Link to="/content">ABOUT</Link>
        </li>
      </ul>
      <SearchComponent />
    </nav>
  );
};

export default Nav;
