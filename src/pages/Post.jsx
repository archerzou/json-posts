import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Loader from '../components/Loader';
import PostCard from '../components/PostCard';

const Post = () => {
    let { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [post, setPost] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(post => post.data)
            .then(post => {
                axios.get('https://jsonplaceholder.typicode.com/users')
                    .then(users => users.data)
                    .then(users => {
                        const user = users.find(user => user.id === post.userId);
                        post.username = user.name;
                        return post;
                    });
                    setPost(post);
                    setLoading(false);
            })
    }, [id]);
    
    if (loading) {
        return <Loader />;
    }

    
    return (
    <div>
        <PostCard post={post}/>
    </div>
 );
};

export default Post;
