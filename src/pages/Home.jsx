import React from "react";
import { Link } from 'react-router-dom';

const Home = () => {
  return (  
    <Link to="/posts" className="d-flex justify-content-center p-2">
        <button type="button" className="btn btn-success">Search Posts</button>
    </Link>
  );
};

export default Home;
