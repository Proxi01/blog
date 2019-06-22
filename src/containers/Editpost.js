import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { updatePost, getSinglePost } from '../actions'
import EditPost from '../components/Editpost';

const mapStateToProps = (state) => ({
  activePost: state.activePost,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  updatePost,
  getSinglePost
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditPost)
