import {
  FETCH_POSTS, POST_UPVOTE, POST_DOWNVOTE
} from '../constants'

const initialState = {
  fetching: true,
  posts   : {},
}

export default function post(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return {
        ...state,
        ...action.payload
      }
    case POST_UPVOTE:
      return {
        ...state,
        ...action.payload
      }
    case POST_DOWNVOTE:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
  }
}