import { CREATE_COMMENT } from "../actions/commentActions";

const initialState = { };


export function commentReducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_COMMENT:
      if(!state[action.payload.post_index]) {
        return { ...state, [action.payload.post_index]: [action.payload.body] };
      }
      return { ...state, [action.payload.post_index]: [...state[action.payload.post_index], action.payload.body] };
  }
}
