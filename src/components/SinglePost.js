import React, { Fragment, Component } from 'react';
import Comment from './Comment';


class SinglePost extends Component {

  state = {
    input: '',
    loading: true,
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.getSinglePost(id);
    this.setState((state) => ({ ...state, loading: !state.loading }))
  }

  handleInput = ({ target }) => {
    this.setState({ input: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { id } = this.props.match.params;
    if (this.state.input) {
      this.props.addComment(parseInt(id), this.state.input);
      this.setState({ input: '' })
    }
  }
  handleDelete = async (postId) => {
    await this.props.delPost(postId);
    this.props.history.push('/posts');
  }

  render() {
    const { activePost } = this.props;

    if (this.state.loading) {
      return <p>Loading...</p>
    }
    console.log(this.props)

    return (
      <Fragment>
        <h1 className="post_title">{activePost.title}</h1>
        <div>{activePost.body}</div>
        <button onClick={() => this.handleDelete(activePost.id)}> Delete </button>
        <button onClick={()=>this.props.history.push(`/edit/${activePost.id}`)}> Edit </button>

        <div className="comments">
          Comments:
          {activePost.comments ? activePost.comments.map(comment => <Comment key={comment.id} comment={comment} />) : null}
        </div>

        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.input} onChange={this.handleInput} />
          <button type="submit">Add Comment</button>
        </form>
      </Fragment>
    );
  }
}

export default SinglePost;
