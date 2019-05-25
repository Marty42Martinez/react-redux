import { getPosts, getPost } from './postSelectors';

describe('post Selector tests', () => {
  it('getPosts Selector will grab all posts', () => {
    const state = {
      posts: [
        { title: 'One', body: 'fish' },
        { title: 'Two', body: 'fishes' },
        { title: 'Red fish', body: 'Blue fish' }
      ]
    };

    const posts = getPosts(state);
    expect(posts).toEqual([
      { title: 'One', body: 'fish', id: 0 },
      { title: 'Two', body: 'fishes', id: 1 },
      { title: 'Red fish', body: 'Blue fish', id:2 }
    ]);
  });
  it('getPost will grab a single post by index', () => {
    const state = {
      posts: [
        { title: 'One', body: 'fish' },
        { title: 'Two', body: 'fishes' },
        { title: 'Red fish', body: 'Blue fish' }
      ]
    };
    const post = getPost(state, 2);
    expect(post).toEqual({
      title: 'Red fish',
      body: 'Blue fish'
    });
  });
});
