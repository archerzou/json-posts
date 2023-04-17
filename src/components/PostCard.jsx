import React from "react";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import ListComments from './ListComments';


const PostCard = ({ post }) => {
  const {id, title, body, username} = post;
  const postUrl = `/post/${id}`;
  return (
    <div className="card mb-3 border border-warning">
      <div className="card-body">
        <Link to={postUrl}>
          <h2 className="text-primary">{title}</h2>
        </Link>
        <div>
          <p>{body}</p>
          <h5>{username}</h5>
        </div>
        <hr />
        <ListComments postId={id} />
      </div>
  </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostCard;


