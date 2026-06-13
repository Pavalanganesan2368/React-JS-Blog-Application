import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Content from "./Content";
import Nav from "./Nav";
import Footer from "./Footer";
import "./App.css";
import Header from "./Header";
import Post from "./Post";

function App() {
  return (
    <div className="flex flex-col h-screen max-w-250 mx-auto border-l border-r">
      {/* <DataContext> */}
        <Header title="React JS Blog" />
        <Nav />
        <section className="flex-1 p-3">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/content" element={<Content />}></Route>
            <Route path="/posts/:id" element={<Post />} />
          </Routes>
        </section>
        <Footer />
      {/* </DataContext> */}
    </div>
  );
}

export default App;
