import { connect } from 'react-redux';
import StepEditForm from './edit_step.jsx';
import {
  editStep,
  fetchSteps,
  fetchStep,
  deleteStep
} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  step: state.steps[ownProps.params.stepId],
  articleId: ownProps.params.articleId,
  stepId: ownProps.params.stepId
});

const mapDispatchToProps = (dispatch, ownProps) =>({
  fetchSteps: (articleId) => dispatch(fetchSteps(articleId)),
  fetchStep: (articleId, stepId) => dispatch(fetchStep(articleId, stepId)),
  editStep: (articleId, step) => dispatch(editStep(articleId, step)),
  deleteStep: (articleId, stepId) => dispatch(deleteStep(articleId, stepId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StepEditForm);
