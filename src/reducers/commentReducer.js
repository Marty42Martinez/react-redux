import { CREATE_COMMENT, DELETE_COMMENT } from "../actions/commentActions";

const initialState = { };


export function commentReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      if(!state[action.payload.post_index]) {
        return { ...state, [action.payload.post_index]: [action.payload.body] };
      }
      return { ...state, [action.payload.post_index]: [...state[action.payload.post_index], action.payload.body] };
    case DELETE_COMMENT: {
      const post = action.payload.post_index;
      const comment = action.payload.comment_index;
      return { ...state, [post]: [...state[post].slice(0, comment), ...state[post].slice(comment + 1)] };
    }
  }
}
