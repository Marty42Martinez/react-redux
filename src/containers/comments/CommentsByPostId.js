import { connect } from 'react-redux';
import Comments from '../../components/comments/Comments';
import { getComments } from '../../selectors/commentSelectors';

const mapStateToProps = (state, { post_index }) => ({
  comments: getComments(state, post_index)
});

export default connect(
  mapStateToProps
)(Comments);
