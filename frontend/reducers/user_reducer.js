import {
  RECEIVE_USER
} from '../actions/user_actions';
import merge from 'lodash/merge';

const UserReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_USER:
      const user = action.user;
      return merge({}, user);
    default:
      return state;
  }
};

export default UserReducer;
