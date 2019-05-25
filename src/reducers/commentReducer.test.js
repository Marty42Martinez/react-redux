import { commentReducer } from './commentReducer';
import { createComment, deleteComment } from '../actions/commentActions';
import { deletePost } from '../actions/postActions';

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
  it('handles a deleteComment action', () => {
    const initState = {
      4: ['What a post!', 'You stink, go home', 'That was not nice']
    };
    const newState = commentReducer(initState, deleteComment({
      post_index: 4,
      comment_index: 1 
    }));
    expect(newState).toEqual({
      4: ['What a post!', 'That was not nice']
    });
  });
  it('hanldes deletePost action by deleting all comments', () => {
    const initState = {
      4: ['What a post!', 'You stink, go home', 'That was not nice']
    };
    const newState = commentReducer(initState, deletePost({
      index: 4
    }));
    expect(newState).toEqual({});
  });
});
