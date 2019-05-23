import { posts } from './postReducer';
import { createPost, deletePost } from '../actions/postActions';

describe('Post Reducer', () => {
  it('can handle createPost action', () => {
    const initState = [];
    const result = posts(initState, createPost({
      title: 'testing posts',
      body: 'nailed it'
    }));
    expect(result).toEqual([{
      title: 'testing posts',
      body: 'nailed it'
    }]);
  });

  it('can handle deletePost action', () => {
    const initState = [{
      title: 'TBD',
      body: 'delete mee'
    }];

    const result = posts(initState, deletePost({
      index: 0
    }));
    expect(result).toEqual([]);
  });
});
