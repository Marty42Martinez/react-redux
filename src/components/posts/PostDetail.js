import React from 'react';
import PropTypes from 'prop-types';

function PostDetail({ post }) {
  const bodyLines = post.body.split('\n').map((p, i) => (
    <p key={i}>{p}</p>
  ));

  return (
    <section>
      <h1>{post.title}</h1>
      {bodyLines}
    </section>
  );
}

PostDetail.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
};

export default PostDetail;
