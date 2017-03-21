import {
  RECEIVE_CURRENT_USER,
  REMOVE_USER,
  RECEIVE_ERRORS
} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = Object.freeze({
  currentUser: null
});


const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return merge({}, state, {
        currentUser
      });
    case REMOVE_USER:
      return merge({}, _nullUser);
    default:
      return state;
  }
};

export default SessionReducer;
