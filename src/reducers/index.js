import * as types from '../constants';


const initialState = {
  posts: [],
  activePost:{}
};

export default function (state = initialState, action){

  switch (action.type){
    case types.POSTS_SUCCESS:
      return {...state, posts:[...action.payload]};
    case types.SINGLE_POST_SUCCESS:
      return {...state, activePost: action.payload}
    case types.CREATE_COMMENT_SUCCESS:{
      let initState = {...state};
      return initState = {...initState, activePost: {...initState.activePost, comments:[...initState.activePost.comments, action.payload]}}
    }
    case types.SINGLE_POST_REQUEST:
      return {...state, posts: [...state.posts, action.payload]};


    default:
      return state;
  }
}
