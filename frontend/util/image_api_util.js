export const fetchImages = (imageable) => (
  $.ajax({
    type: 'GET',
    url: `api/images?type=${imageable.type}&id=${imageable.id}`,
    data: {imageable}
  })
);

export const createImage = (image, imageable) => (
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
