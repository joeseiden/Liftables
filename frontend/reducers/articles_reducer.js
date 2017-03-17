import {
  RECEIVE_ARTICLES,
  RECEIVE_ERRORS,
  REMOVE_ARTICLE
} from '../actions/article_actions';
import merge from 'lodash/merge';

const _nullArticles = Object.freeze({
  articles: null,
  errors: []
});

const ArticlesReducer = (state = _nullArticles, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      const articles = action.articles;
      return merge({}, state, {
        articles
      });
    case REMOVE_ARTICLE:
      return merge({}, _nullArticles);
    case RECEIVE_ERRORS:
      const errors = action.errors;
      return merge({}, _nullArticles, {
        errors
      });
    default:
      return state;
  }
};

export default ArticlesReducer;
