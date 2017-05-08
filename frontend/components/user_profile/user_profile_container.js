import { connect } from 'react-redux';
import UserProfile from './user_profile';
import {
  requestUser
} from '../../actions/user_actions';

const mapStateToProps = (state, ownProps) => ({
  user: state.user,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestUser: userId => dispatch(requestUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
