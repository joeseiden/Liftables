export const fetchAllArticles = () => (
  $.ajax({
    type: 'GET',
    url: 'api/articles'
  })
);

export const fetchSingleArticle = articleId => (
  $.ajax({
    type: 'GET',
    url: `api/articles/${articleId}`
  })
);

export const createArticle = article => (
  $.ajax({
    type: 'POST',
    url: 'api/articles',
    data: { article }
  })
);

export const editArticle = article => (
  $.ajax({
    type: 'PATCH',
    url: `api/articles/${article.id}`,
    data: { article }
  })
);

export const deleteAccount = article => (
  $.ajax({
    type: 'DELETE',
    url: `api/articles/${article.id}`
  })
);