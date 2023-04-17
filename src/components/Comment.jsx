import React from "react";
import PropTypes from 'prop-types';

const Comment = ({ comment }) => {
    const {name, email, body} = comment;

     return (
        <div className="row">
            <p>{body}</p>
            <div className="d-flex justify-content-between">
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
};

Comment.propTypes = {
    comment: PropTypes.object.isRequired,
}

export default Comment;
