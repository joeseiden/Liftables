export const fetchImages = (imageable) => (
  $.ajax({
    type: 'GET',
    url: `api/images?type=${imageable.type}&id=${imageable.id}`
  })
);

export const createImage = (imageable, image) => (
  $.ajax({
    type: 'POST',
    url: `api/images?type=${imageable.type}&id=${imageable.id}`,
    data: {image}
  })
);

export const deleteImage = (imageId) => (
  $.ajax({
    type: 'DELETE',
    url: `api/images/${imageId}`,
  })
);
