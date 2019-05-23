import { CREATE_POST } from '../actions/postActions';

const initialState = {
  posts: []
};

export function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return { ...state, posts: [...state.posts, action.payload] };
  }
}
