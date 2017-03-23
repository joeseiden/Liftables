import * as CommentAPIUtil from '../util/comment_api_util';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';

export const fetchComments = articleId => dispatch => (
  CommentAPIUtil.fetchComments(articleId).then(
    comments => dispatch(receiveComments(comments))
  )
);

export const createComment = (articleId, comment) => dispatch => (
  CommentAPIUtil.createComment(articleId, comment).then(
    newComment => dispatch(receiveComment(newComment))
  )
);

export const deleteComment = (articleId, commentId) => dispatch => (
  CommentAPIUtil.deleteComment(articleId, commentId).then(
    comment => dispatch(removeComment(comment))
  )
);

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

export const removeComment = comment => ({
  type: REMOVE_COMMENT,
  comment
});
