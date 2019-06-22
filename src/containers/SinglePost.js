import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { getSinglePost, addComment, delPost } from '../actions'
import SinglePost from '../components/SinglePost';

const mapStateToProps = (state)=>({
  activePost: state.activePost,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
  getSinglePost,
  addComment,
  delPost,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SinglePost)
