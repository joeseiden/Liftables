import {
  RECEIVE_ARTICLES,
  RECEIVE_ERRORS,
  REMOVE_ARTICLE
} from '../actions/article_actions';
import merge from 'lodash/merge';

const ArticlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      const articles = action.articles;
      return merge({}, articles);
    case REMOVE_ARTICLE:
      return merge({});
    default:
      return state;
  }
};

export default ArticlesReducer;
