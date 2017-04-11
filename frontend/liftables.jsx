import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { login, logout } from './actions/session_actions';
const http = require('http');

const windowFunctions = { login, logout };

Object.assign(window, windowFunctions);

setInterval(() => {
  http.get("http://liftables.herokuapp.com");
}, 900000);

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  let store;
  if (window.currentUser){
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }
  window.store = store;
  ReactDOM.render(<Root store={ store }/>, root);
});
