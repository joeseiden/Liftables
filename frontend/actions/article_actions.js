import * as ArticleAPIUtil from '../util/article_api_util';

export const RECEIVE_ARTICLES = "RECEIVE_ARTICLES";
export const RECEIVE_ARTICLE = "RECEIVE_ARTICLE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const REMOVE_ARTICLE = "REMOVE_ARTICLE";

export const requestAllArticles = () => dispatch => (
  ArticleAPIUtil.fetchAllArticles()
    .then(articles => dispatch(receiveArticles(articles)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const requestSingleArticle = article => dispatch => (
  ArticleAPIUtil.fetchSingleArticle(article)
    .then(fetchedArticle => dispatch(receiveArticle(fetchedArticle)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const createArticle = article => dispatch => (
  ArticleAPIUtil.createArticle(article)
  .then(newArticle => dispatch(receiveArticle(newArticle)),
    err => dispatch(receiveErrors(err.responseJSON)))
  );

export const editArticle = article => dispatch => (
  ArticleAPIUtil.editArticle(article)
  .then(updatedArticle => dispatch(receiveArticle(updatedArticle)),
    err => dispatch(receiveErrors(err.responseJSON)))
);

export const deleteArticle = article => dispatch => (
  ArticleAPIUtil.deleteArticle(article)
  .then(res => dispatch(removeArticle(res)),
        err => dispatch(receiveErrors(err.responseJSON)))
);

export const receiveArticle = article => ({
  type: RECEIVE_ARTICLE,
  article
});

export const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

export const removeArticle = article => ({
  type: REMOVE_ARTICLE,
  article
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});
