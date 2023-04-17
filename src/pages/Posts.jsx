import { useState, useEffect } from "react";
import axios from 'axios';

import Loader from '../components/Loader';
import SearchForm from "../components/SearchForm";
import PostCard from "../components/PostCard";

const Posts = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(posts=>posts.data)
        .then(posts => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(users => users.data)
        .then(users => {
          posts.map(post=> {
            const user = users.find(user => user.id === post.userId);
            post.username = user.name;
            return post;
          });
          setPosts(posts);
          setResults(posts);
          setIsLoading(false);
        }).catch(err => {
          console.log(`Can't load users: ${err}`);
        })
    }).catch(err => {
      console.log(`Can't load posts: ${err}`);
    })
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  const onSearch = (value) =>{
    if (value.length > 0) {
      let regex = new RegExp(value.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'ig');

      const filterResults = posts.filter((post) =>{
        return regex.test(post.title) || regex.test(post.username) || regex.test(post.body);
      } )
      setResults(filterResults);
    }
  }
  

  return (
    <div className="row">
      <SearchForm onSearch={onSearch} />
      <div>
        <h3 className="px-5 text-info" >counts: {results.length}</h3>
      </div>
        {results.map(post => (
          <div className="px-5" key={post.id}>
            <PostCard post={post}/>
          </div>
        ))}
    </div>
);
};

export default Posts;
