import { connect } from 'react-redux';
import { createComment } from '../../actions/commentActions';
import CommentForm from '../../components/comments/CommentForm';

const mapDispatchToProps = (dispatch, props) => ({
  onSubmit(comment) {
    dispatch(createComment({ post_index: props.post_index, body: comment }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(CommentForm);
