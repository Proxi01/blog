import React, { Fragment, Component } from 'react';


class NewPost extends Component{

  state ={
    title: '',
    body: '',
  }

  handleInput = ({target})=>{
    this.setState({[target.id]: target.value})
  }

  handleSubmit=(e)=>{
    e.preventDefault();
    if(this.state.title && this.state.body) {
      this.props.addPost(this.state.title, this.state.body);
      this.props.history.push('/');
    }
  }

  render(){
    return(
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">
            Title:
            <input type="text" id="title" onChange={this.handleInput}/>
          </label>
          <br/>
          <br/>
          <label htmlFor="body">
            Body:
            <textarea id="body" onChange={this.handleInput}/>
          </label>
          <button type="submit">Submit</button>
        </form>
      </Fragment>
    )
  }
}



export default NewPost;
