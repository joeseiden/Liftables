import { connect } from 'react-redux';
import StepEditForm from './edit_step.jsx';
import {
  updateStep,
  fetchSteps,
  fetchStep,
  deleteStep
} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  step: state.steps[ownProps.stepId],
  articleId: ownProps.articleId,
  stepId: ownProps.stepId,
  stopEditing: ownProps.stopEditing
});

const mapDispatchToProps = (dispatch, ownProps) =>({
  fetchSteps: (articleId) => dispatch(fetchSteps(articleId)),
  fetchStep: (articleId, stepId) => dispatch(fetchStep(articleId, stepId)),
  updateStep: (articleId, step) => dispatch(updateStep(articleId, step)),
  deleteStep: (articleId, stepId) => dispatch(deleteStep(articleId, stepId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepEditForm);
