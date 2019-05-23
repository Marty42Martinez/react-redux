import { CREATE_POST, createPost, DELETE_POST, deletePost } from './postActions';

describe('Blog Action Creators', () => {
  it('can create a post', () => {
    const post = createPost({ title: 'test', body: 'Still a test' });
    
    expect(post.type).toEqual(CREATE_POST);
    expect(post.payload).toEqual({
      title: 'test',
      body: 'Still a test'
    });
  });
  it('can delete a post', () => {
    const post = deletePost({ index: 3 });

    expect(post.type).toEqual(DELETE_POST);
    expect(post.payload).toEqual({
      post_index: 3
    });
  });
});
