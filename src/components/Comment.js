import React from 'react';

const Comment = (props)=>{
  return (
    <div key ={props.comment.id} className="comment">{props.comment.body}</div>
  )
};

export default Comment;
