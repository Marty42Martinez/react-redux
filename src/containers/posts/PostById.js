import { connect } from 'react-redux';
import PostDetail from '../../components/posts/PostDetail';
import { getPost } from '../../selectors/postSelectors';

const mapStateToProps = (state, props) => ({
  post: getPost(state, props.match.params.id)
});

export default connect(
  mapStateToProps
)(PostDetail);
