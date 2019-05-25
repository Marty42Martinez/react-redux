import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Post({ post }) {
  return (
    <>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
    </>
  );
}

Post.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  }).isRequired
};

export default Post;
