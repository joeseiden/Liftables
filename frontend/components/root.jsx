import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';
import { receiveErrors } from '../actions/session_actions';
import App from './app';
import AuthFormContainer from './auth/auth_form_container';
import MainContainer from './main/main_container';


const Root = ({ store }) => {


  return (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={MainContainer}/>
        <Route path="/login"
               component={AuthFormContainer}/>
        <Route path="/signup"
               component={AuthFormContainer}/>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
