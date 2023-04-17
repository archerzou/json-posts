import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import Post from "./pages/Post";
import Posts from "./pages/Posts";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/posts" element={<Posts />}></Route>
        <Route exact path="/post/:id" element={<Post />}></Route>
      </Routes>
    </Router>
  );
};

export default App;

