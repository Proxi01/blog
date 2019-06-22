import React, { Fragment, Component } from 'react';


class EditPost extends Component {

  state = {
    title: '',
    body: '',
  }

  async componentDidMount() {
    //dispatch single post to receive information based on :id from url
    await this.props.getSinglePost( parseInt(this.props.match.params.id));
    //set data from activePost to state
    this.setState(({ title, body }) => ({
      title: this.props.activePost.title,
      body: this.props.activePost.body,
    }))
  }

  handleInput = ({ target }) => {
    this.setState((state) => ({ ...state, [target.id]: target.value }))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.title && this.state.body) {
      this.props.updatePost(this.props.activePost.id, this.state.title, this.state.body);
      this.props.history.push(`/posts/${this.props.activePost.id}`);
    }
  };

  render() {
    console.log(this.props)
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title:
            <input type="text" id="title" value={this.state.title} onChange={this.handleInput} />
          </label>
          <br />
          <br />
          <label htmlFor="body">
            Body:
            <textarea id="body" value={this.state.body} onChange={this.handleInput} />
          </label>
          <button type="submit">Edit</button>
        </form>
      </Fragment>
    )
  }
}



export default EditPost;
