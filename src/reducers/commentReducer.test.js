import { commentReducer } from './commentReducer';
import { createComment } from '../actions/commentActions';

describe('comment Reducer tests', () => {
  it('handles a createComment action', () => {
    const initState = {};

    const newState = commentReducer(initState, createComment({ 
      post_index: 4,
      body: 'What a post!'
    }));
    expect(newState).toEqual({
      4: ['What a post!']
    });
  });
});
