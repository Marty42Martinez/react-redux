import React from 'react';
import PropTypes from 'prop-types';
//eslint-disable-next-line 
function Comment({ comment, id }) {
  return (
    <>
      <p>{comment}</p>
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
