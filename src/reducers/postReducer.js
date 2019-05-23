import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export function postReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case DELETE_POST:
      return { ...state, posts: [...state.posts.slice(0, action.payload.post_index), ...state.posts.slice(action.payload.post_index + 1)] };
  }
}
