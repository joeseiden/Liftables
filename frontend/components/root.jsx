import React from 'react';
import { Provider } from 'react-redux';
import {
  Router,
  Route,
  IndexRoute,
  hashHistory
} from 'react-router';
import { requestSingleArticle } from '../actions/article_actions';
import { receiveErrors } from '../actions/session_actions';
import App from './app';
import Home from './home/home';
import ArticlesIndexContainer from './articles/articles_index_container';
import ArticleViewContainer from './article_view/article_view_container';
import NewArticleModalContainer from './article_form/new_article_modal_container';
import ArticleEditFormContainer from './article_form/article_edit_form_container';
import StepEditFormContainer from './steps/edit_step_container';

const Root = ({ store }) => {

  const _ensureLoggedIn = (nextState, replace) => {
    const currentUser = store.getState().session.currentUser;
    if (!currentUser) {
      replace('/');
    }
  };

  const _ensureAuthor = (nextState, replace, aSync) => {
    const currentUser = store.getState().session.currentUser;
    if(!currentUser){
      replace('/');
      aSync();
    }
    store.dispatch(requestSingleArticle(nextState.params.articleId)).then(() =>{
      if (!currentUser || store.getState().articles[nextState.params.articleId].user.id !== currentUser.id) {
        replace("/");
      }
      aSync();
    });
  };

  return (
  <Provider store={ store }>
    <Router history={hashHistory}>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home }/>
        <Route path="articles" component={ ArticlesIndexContainer }/>
        <Route path="articles?search_query=:searchQuery" component= { ArticlesIndexContainer } />
        <Route path="articles/:articleId" component={ ArticleViewContainer } />
        <Route path="articles/:articleId/edit" component={ ArticleEditFormContainer } onEnter={ _ensureAuthor }/>
        <Route path="articles/:articleId/steps/:stepId/edit" component={ StepEditFormContainer } onEnter={ _ensureAuthor }/>
      </Route>
    </Router>
  </Provider>
  );
};

export default Root;
