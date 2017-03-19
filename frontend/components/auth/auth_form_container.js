import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {
  signup,
  login,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = ({session}, ownProps) => ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors,
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
