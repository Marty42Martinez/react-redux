import { connect } from 'react-redux';
import { getPosts } from '../../actions/postActions';
import Posts from '../../components/posts/Posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});


export default connect(
  mapStateToProps
)(Posts);
