import {
  RECEIVE_ARTICLE,
  REMOVE_ARTICLE
} from '../actions/article_actions';
import merge from 'lodash/merge';

const _nullArticleView = {
  title: '',
  description: '',
  images: [],
  user: {}
};

const ArticleViewReducer = (state = _nullArticleView, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ARTICLE:
      const article = action.article;
      return merge({}, state, {
        article
      });
    case REMOVE_ARTICLE:
      return merge({}, _nullArticleView);
    default:
      return state;
  }
};

export default ArticleViewReducer;