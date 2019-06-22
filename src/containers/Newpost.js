import {connect} from 'react-redux';
import { bindActionCreators } from 'redux'
import { addPost } from '../actions'
import Newpost from '../components/Newpost';

const mapStateToProps = (state)=>({
  posts: state.posts,
});

const mapDispatchToProps = (dispatch)=> bindActionCreators({
  addPost,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Newpost)
