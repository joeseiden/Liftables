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
import NewArticleModalContainer from './article_form/new_article_modal_container';
import ArticleEditFormContainer from './article_form/article_edit_form_container';
import StepEditFormContainer from './steps/edit_step_container';

const Root = ({ store }) => {


  return (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="articles" component={ ArticlesIndexContainer }/>
        <Route path="articles?search_query=:searchQuery" component= { ArticlesIndexContainer } />
        <Route path="articles/:id" component={ ArticleViewContainer } />
        <Route path="articles/:id/edit" component={ ArticleEditFormContainer } />
        <Route path="articles/:articleId/steps/:stepId/edit" component={ StepEditFormContainer } />
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
