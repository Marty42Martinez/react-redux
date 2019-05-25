export const CREATE_POST = 'CREATE_POST';
export const createPost = post => {
  return {
    type: CREATE_POST,
    payload: {
      title: post.title,
      body: post.body
    }
  };
};

export const DELETE_POST = 'DELETE_POST';
export const deletePost = post => {
  return {
    type: DELETE_POST,
    payload: {
      title: post.title
    }
  };
};
