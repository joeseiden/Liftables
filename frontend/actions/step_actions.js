import * as StepAPIUtil from '../util/step_api_util';
export const RECEIVE_STEPS = 'RECEIVE_STEPS';
export const RECEIVE_STEP = 'RECEIVE_STEP';
export const REMOVE_STEP = 'REMOVE_STEP';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const fetchSteps = articleId => dispatch => (
  StepAPIUtil.fetchSteps(articleId).then(
    steps => dispatch(receiveSteps(steps),
      err => dispatch(receiveErrors(err.responseJSON)))
  )
);

export const fetchStep = (articleId, stepId) => dispatch => (
  StepAPIUtil.fetchStep(articleId, stepId).then(
    step => dispatch(receiveStep(step),
      err => dispatch(receiveErrors(err.responseJSON)))
  )
);

export const createStep = (articleId, step) => dispatch => (
  StepAPIUtil.createStep(articleId, step).then(
    newStep => dispatch(receiveSteps({step}),
      err => dispatch(receiveErrors(err.responseJSON)))
  )
);

export const updateStep = (articleId, step) => dispatch => (
  StepAPIUtil.updateStep(articleId, step).then(
    updatedStep => dispatch(receiveStep(updatedStep),
      err => dispatch(receiveErrors(err.responseJSON)))
  )
);

export const deleteStep = (articleId, stepId) => dispatch => (
  StepAPIUtil.deleteStep(articleId, stepId).then(
    step => dispatch(removeStep(step),
      err => dispatch(receiveErrors(err.responseJSON)))
  )
);

export const receiveSteps = steps => ({
  type: RECEIVE_STEPS,
  steps
});

export const receiveStep = step => ({
  type: RECEIVE_STEP,
  step
});

export const removeStep = step => ({
  type: REMOVE_STEP,
  step
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
