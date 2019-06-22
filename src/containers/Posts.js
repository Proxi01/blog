import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getAllPosts } from '../actions'
import Posts from '../components/Posts';

const mapStateToProps = (state) => ({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllPosts,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Posts)
