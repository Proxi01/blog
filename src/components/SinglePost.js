import React, { Fragment, Component } from 'react';
import Comment from './Comment';
import PropTypes from 'prop-types';


class SinglePost extends Component{

  state={
    input:''
  };

  componentDidMount(){
    const {id} = this.props.match.params;
    this.props.getSinglePost(id);
  }

  handleInput = ({target})=>{
    this.setState({input: target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    const {id} = this.props.match.params;
    if(this.state.input) {
      this.props.addComment(parseInt(id), this.state.input);
      this.setState({input: ''})
    }
  }
  handleDelete=(postId)=>{
    this.props.delPost(postId);
    this.props.history.push('/posts');
  }

  render(){
    const {activePost} = this.props;
    return (
      <Fragment>
        <h1 className="post_title">{activePost.title}</h1>
        <div>{activePost.body}</div>
        <button onClick={()=>this.handleDelete(activePost.id)}> Delete </button>

        <div className="comments">
          {activePost.comments ? activePost.comments.map(comment=> <Comment key={comment.id} comment={comment} />) : <p>Be first!</p>}
        </div>

        <form onSubmit = {this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleInput}/>
          <button type="submit">Add Comment</button>
        </form>
      </Fragment>
    );
  }
}

export default SinglePost;
