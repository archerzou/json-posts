import axios from 'axios';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';

const ListComments = ({ postId }) => {
    const [comments, setComments] = useState([]);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(comments=>comments.data)
            .then(comments => {
                setComments(comments);
            }).catch(err => {
                console.log(`Can't load comments: ${err}`);
            })
    }, [postId]);

    return (
        <div className="row">
            <h3>Comments</h3>
            <ul className="list-group mt-4">
                {comments.map(comment => {
                   return(
                    <li className="list-group-item" key={comment.id}>
                        <Comment comment={comment} />
                    </li>
                   )
                }
                )}
            </ul>
        </div>
);
};

ListComments.propTypes = {
    postId: PropTypes.number.isRequired,
}

export default ListComments;
