import React from 'react';
import PropTypes from 'prop-types';

function Comment({ comment, id }) {
  return (
    <>
      <p>{comment.body}</p>
    </>
  );
}

Comment.propTypes = {
  comment: PropTypes.shape({
    post_index: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired,
  id: PropTypes.number.isRequired
};

export default Comment;
