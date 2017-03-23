export const fetchComments = (articleId) => (
  $.ajax({
    type: 'GET',
    url: `api/articles/${articleId}/comments`
  })
);

export const createComment = (articleId, comment) => (
  $.ajax({
    type: 'POST',
    url: `api/articles/${articleId}/comments`,
    data: {comment}
  })
);

export const deleteComment = (articleId, commentId) => (
  $.ajax({
    type: 'DELETE',
    url: `api/articles/${articleId}/comments/${commentId}`
  })
);
