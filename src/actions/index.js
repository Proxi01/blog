import * as types from '../constants'

export function getAllPosts() {
  return async(dispatch) => {
    dispatch({
      type: types.POSTS_REQUEST,
    });
      let result = await fetch(`https://simple-blog-api.crew.red/posts`);
      if(result.status === 200){
        let json = await result.json();
        dispatch({
          type: types.POSTS_SUCCESS,
          payload: json,
        })
      }
      else {
        throw new Error ('Something went wrong')
      }
  }
};

export function getSinglePost(id){
  return async(dispatch) => {
    dispatch({
      type: types.SINGLE_POST_REQUEST,
    });
      let result = await fetch(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
      if (result.status === 200) {
        let json = await result.json();
        dispatch({
          type: types.SINGLE_POST_SUCCESS,
          id,
          payload: json,
        });
      }
    else {
        throw new Error ('Something went wrong')
      }
  }
}

export function addComment(postId, body){
  return async (dispatch)=>{
    dispatch({
      type: types.CREATE_COMMENT_REQUEST,
    });

    let result = await fetch(`https://simple-blog-api.crew.red/comments`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        postId,
        body,
      })
    });

    if (result.status === 201) {
      let json = await result.json();
      dispatch({
        type: types.CREATE_COMMENT_SUCCESS,
        payload: json,
      })
    }
    else {
      throw new Error ('Something went wrong')
    }


  }
}

export function addPost(title, body){
  return async (dispatch)=>{
    dispatch({
      type: types.CREATE_POST_REQUEST,
    });

    let result = await fetch(`https://simple-blog-api.crew.red/posts`,{
      method: 'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title,
        body,
      })
    });
    if (result.status === 201) {
      let json = await result.json();
      dispatch({
        type: types.CREATE_POST_SUCCESS,
        payload: json,
      })
    }
    else {
      throw new Error ('Something went wrong')
    }
  }
}

export function delPost(postId){
  return async (dispatch)=>{
    dispatch({
      type: types.DELETE_POST_REQUEST,
    });

    let result = await fetch(`https://simple-blog-api.crew.red/posts/${postId}`,{
      method: 'DELETE'
    });

    if (result.status === 200) {
      let json = await result.json();
      dispatch({
        type: types.DELETE_POST_SUCCESS,
        payload: json,
      })
    }
    else {
      throw new Error ('Something went wrong')
    }
  }
}


