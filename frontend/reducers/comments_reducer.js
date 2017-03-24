import {
  RECEIVE_COMMENTS,
  RECEIVE_COMMENT,
  REMOVE_COMMENT
} from '../actions/comment_actions';
import {merge} from 'lodash';

const CommentsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS:
      const comments = action.comments;
      return merge({}, comments);
    case RECEIVE_COMMENT:
      newState = merge({}, state);
      newState[action.comment.id]=action.comment;
      return newState;
    case REMOVE_COMMENT:
      const commentId = action.comment.id;
      newState = merge({}, state);
      delete newState[commentId];
      return newState;
    default:
      return state;
  }
};

export default CommentsReducer;
