import { connect } from 'react-redux';
import StepsIndex from './steps_index';
import {
  fetchSteps,
  fetchStep,
  createStep,
  updateStep,
  deleteStep
} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  steps: Object.keys(state.steps).map(id => state.steps[id]),
  articleId: ownProps.articleId,
  errors: state.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchSteps: articleId => dispatch(fetchSteps(articleId)),
  fetchStep: (articleId, id) => dispatch(fetchStep(articleId, id)),
  createStep: (articleId, step) => dispatch(createStep(articleId, step)),
  updateStep: (articleId, step) => dispatch(updateStep(articleId, step)),
  deleteStep: (articleId, id) => dispatch(deleteStep(articleId, id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepsIndex);
