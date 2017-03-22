export const fetchSteps = (articleId) => (
  $.ajax({
    type: 'GET',
    url: `api/articles/${articleId}/steps`
  })
);

export const fetchStep = (articleId, stepId) => (
  $.ajax({
    type: 'GET',
    url: `api/articles/${articleId}/steps/${stepId}`
  })
);

export const createStep = (articleId, step) => (
  $.ajax({
    type: 'POST',
    url: `api/articles/${articleId}/steps`,
    data: { step }
  })
);

export const updateStep = (articleId, step) => (
  $.ajax({
    type: 'PATCH',
    url: `api/articles/${articleId}/steps/${step.id}`,
    data: { step }
  })
);

export const deleteStep = (articleId, stepId) => (
  $.ajax({
    type: 'DELETE',
    url: `api/articles/${articleId}/steps/${stepId}`
  })
);
