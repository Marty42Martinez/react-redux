import { reducer } from './postReducer';
import { CREATE_POST, createPost } from '../actions/postActions';

describe('Post Reducer', () => {
  it('can handle createPost action', () => {
    const initState = {
      posts: []
    };
    const result = reducer(initState, createPost({
      title: 'testing posts',
      body: 'nailed it'
    }));
    expect(result).toEqual({
      posts: [{
        title: 'testing posts',
        body: 'nailed it'
      }]
    });
  });
});
