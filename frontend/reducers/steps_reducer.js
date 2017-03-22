import {RECEIVE_STEPS,
        RECEIVE_STEP,
        REMOVE_STEP
      } from '../actions/step_actions';
import {merge} from 'lodash';


const StepsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_STEPS:
      const steps = action.steps;
      return merge({}, state, steps);
    case RECEIVE_STEP:
      newState = merge({}, state);
      newState[action.step.id]=action.step;
      return newState;
    case REMOVE_STEP:
      const stepId = action.step.id;
      newState = merge({}, state);
      delete newState[stepId];
      return newState;
    default:
      return state;
  }
};

export default StepsReducer;
