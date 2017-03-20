export const fetchSteps = (articleId) => (
  $.ajax({
    type: 'GET',
    url: `api/${articleId}/steps`
  })
);

export const fetchStep = (articleId, stepId) => (
  $.ajax({
    type: 'GET',
    url: `api/${articleId}/steps/${stepId}`
  })
);

export const createStep = (articleId, step) => (
  $.ajax({
    type: 'POST',
    url: `api/${articleId}/steps`,
    data: { step }
  })
);

export const updateStep = (articleId, step) => (
  $.ajax({
    type: 'PATCH',
    url: `api/${articleId}/steps/${step.id}`,
    data: { step }
  })
);

export const deleteStep = (articleId, stepId) => (
  $.ajax({
    type: 'DELETE',
    url: `api/${articleId}/steps/${stepId}`
  })
);
