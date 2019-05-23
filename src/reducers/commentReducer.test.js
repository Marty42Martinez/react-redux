import { commentReducer } from './commentReducer';
import { createComment } from '../actions/commentActions';

describe('comment Reducer tests', () => {
  it('handles a createComment action with no previous comments', () => {
    const initState = {};

    const newState = commentReducer(initState, createComment({ 
      post_index: 4,
      body: 'What a post!'
    }));
    expect(newState).toEqual({
      4: ['What a post!']
    });
  });
  it('handles a createComment action with previous comments', () => {
    const initState = {
      4: ['What a post!', 'You stink, go home']
    };

    const newState = commentReducer(initState, createComment({ 
      post_index: 4,
      body: 'That was not nice'
    }));
    expect(newState).toEqual({
      4: ['What a post!', 'You stink, go home', 'That was not nice']
    });
  });
});
