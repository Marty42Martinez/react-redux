export const getPosts = state => state.posts.map((post, id) => ({
  ...post,
  id
}));
export const getPost = (state, index) => state.posts[index];
