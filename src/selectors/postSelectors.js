export const getPosts = state => state.posts.map((post, i) => ({
  ...post,
  i
}));
export const getPost = (state, index) => state.posts[index];
