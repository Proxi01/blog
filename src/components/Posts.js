import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';

class Posts extends React.Component {

  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const posts = (this.props.posts.map(post => (
      <Fragment key={post.id + 666}>
        <Link to={`posts/${post.id}`} key={post.id} className="link">{post.title}</Link>
        <p>{`${post.body.slice(0, 150)}`} {post.body.length > 50 && '...'}</p>
      </Fragment>
    ))
    );
    return (
      <Fragment>
        {posts}
        <Link to="/newpost"><button>Create a new post</button></Link>
      </Fragment>
    )
  }

}



export default Posts;
