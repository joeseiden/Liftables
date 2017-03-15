import { connect } from 'react-redux';
import AuthForm from './auth_form';
import {
  signup,
  login,
  receiveErrors
} from '../../actions/session_actions';

const mapStateToProps = ({session}) => ({
    loggedIn: Boolean(session.currentUser),
    errors: session.errors
  });

const mapDispatchToProps = (dispatch, { location }) => {
    const formType = location.pathname.slice(1);
    const processForm = (formType === 'login') ? login : signup;

    return {
      // clearErrors: () => (dispatch(receiveErrors([]))),
      processForm: user => dispatch(processForm(user)),
      formType
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthForm);
