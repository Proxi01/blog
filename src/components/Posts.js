import React, { Fragment, useEffect } from 'react';

import {Link} from 'react-router-dom';

/*const Posts = (props)=>{
  const posts = (props.posts.map(post=>(
      <Fragment>
        <Link to={`posts/${post.id}`} key={post.id} style={{display: 'block',}}>{post.title}</Link>
        <p>{`${post.body.slice(0,50)}`} {post.body.length>50 && '...'}</p>
      </Fragment>
    ))
  );
  props.getAllPosts()

  return(
    <Fragment>
      {posts}
      <Link to="/newpost"><button>Create a new post</button></Link>
    </Fragment>
  )
};*/


class Posts extends React.Component{

  componentDidMount(){
    this.props.getAllPosts();
  }

  render(){
    const posts = (this.props.posts.map(post=>(
        <Fragment>
          <Link to={`posts/${post.id}`} key={post.id} style={{display: 'block',}}>{post.title}</Link>
          <p>{`${post.body.slice(0,50)}`} {post.body.length>50 && '...'}</p>
        </Fragment>
      ))
    );
    return(
      <Fragment>
        {posts}
        <Link to="/newpost"><button>Create a new post</button></Link>
      </Fragment>
    )
  }

}



export default Posts;
