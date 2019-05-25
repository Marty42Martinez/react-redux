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
    const post = deletePost({ title: 'you gettin axed' });

    expect(post.type).toEqual(DELETE_POST);
    expect(post.payload).toEqual({
      title: 'you gettin axed'
    });
  });
});
