import {RECEIVE_STEPS,
        RECEIVE_STEP,
        REMOVE_STEP
      } from '../actions/step_actions';
import {merge} from 'lodash';


const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_STEPS:
      const steps = action.steps;
      return merge({}, steps);
    case RECEIVE_STEP:
      let newState = {};
      newState[action.step.id]=action.article;
      return newState;
    case REMOVE_STEP:
      return {};
    default:
      return state;
  }
};

export default StepsReducer;
