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
import Home from './home/home';
import ArticlesIndexContainer from './articles/articles_index_container';
import ArticleViewContainer from './article_view/article_view_container';

const Root = ({ store }) => {


  return (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="articles" component={ ArticlesIndexContainer } />
        <Route path="articles/:id" component={ ArticleViewContainer } />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
