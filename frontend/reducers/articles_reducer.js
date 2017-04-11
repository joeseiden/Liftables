import {
  RECEIVE_ARTICLES,
  RECEIVE_ARTICLE,
  REMOVE_ARTICLE
} from '../actions/article_actions';
import merge from 'lodash/merge';

const ArticlesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLES:
      const articles = action.articles;
      return merge({}, articles);
    case RECEIVE_ARTICLE:
      let newState = {};
      newState[action.article.articleId]=action.article;
      return newState;
    case REMOVE_ARTICLE:
      return {};
    default:
      return state;
  }
};

export default ArticlesReducer;
