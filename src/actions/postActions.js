import {
  FETCH_POSTS, POST_UPVOTE,POST_DOWNVOTE
} from '../constants'
import  {db} from '../utils/firebaseUtils/'

export function fetchPosts(data) {
  return (dispatch) => {
    dispatch({
      type   : FETCH_POSTS,
      payload: {
        posts   : data,
        fetching: false
      }
    });
  }
}

export function postUpvote(post, key) {
  return (dispatch) => {
    db.data().ref('posts/' + key).update({
      upvote: post.upvote + 1,
    });
    dispatch({
      type   : POST_UPVOTE,
      payload: {}
    });
  }
}

export function postDownvote(post, key) {
  return (dispatch) => {
    db.data().ref('posts/' + key).update({
      downvote: post.downvote + 1
    });
    dispatch({
      type   : POST_DOWNVOTE,
      payload: {}
    });
  }
}