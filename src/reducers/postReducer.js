import { CREATE_POST, DELETE_POST } from '../actions/postActions';

const initialState = [];

export function posts(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [...state.slice(0, action.payload.post_index), ...state.slice(action.payload.post_index + 1)];
    default:
      return state;
  }
}
