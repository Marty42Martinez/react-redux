import { getPosts } from './postSelectors';

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
      { title: 'One', body: 'fish' },
      { title: 'Two', body: 'fishes' },
      { title: 'Red fish', body: 'Blue fish' }
    ]);
  });
});
