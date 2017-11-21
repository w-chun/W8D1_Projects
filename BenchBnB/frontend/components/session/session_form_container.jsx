import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import sessionForm from './session_form';
import { login, logout, signup } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  loggedIn: Boolean(state.currentUser),
  errors: state.errors,
  formType: ownProps.location.pathname === "/login" ? "login" : "signup"
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const action = ownProps.formType === "login" ? login : signup;
  return {
    processForm: user => dispatch(action(user))
  };
};

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(sessionForm));
