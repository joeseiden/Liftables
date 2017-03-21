import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {
  signup,
  login,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
    loggedIn: Boolean(state.session.currentUser),
    errors: state.errors,
    formType: ownProps.formType
  });

const mapDispatchToProps = (dispatch, formType) => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user)),
    clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
