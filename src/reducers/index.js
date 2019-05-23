import { CombineReducers } from 'redux';
import { posts } from './postReducer';
import { comments } from './commentReducer';

export default CombineReducers({
  posts,
  comments
});
