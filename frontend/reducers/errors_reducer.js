export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
import merge from 'lodash/merge';


const ErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    default:
      return state;
  }
};

export default ErrorsReducer;
