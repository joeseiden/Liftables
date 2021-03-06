import {
  RECEIVE_ARTICLES,
  RECEIVE_ARTICLE,
  REMOVE_ARTICLE
} from '../actions/article_actions';
import merge from 'lodash/merge';

const ArticlesReducer = (state = {}, action) => {
  let newState;
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      const articles = action.articles;
      return merge({}, articles);
    case RECEIVE_ARTICLE:
      newState = {};
      newState[action.article.id]=action.article;
      return newState;
    case REMOVE_ARTICLE:
      newState = merge({}, state);
      delete newState[action.article.id];
      return newState;
    default:
      return state;
  }
};

export default ArticlesReducer;
