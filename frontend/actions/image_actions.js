import * as ImageAPIUtil from '../util/image_api_util';
export const RECEIVE_IMAGES = 'RECEIVE_IMAGES';
export const RECEIVE_IMAGE = 'RECEIVE_IMAGE';
export const REMOVE_IMAGE = 'REMOVE_IMAGE';

export const fetchImages = imageable => dispatch => (
  ImageAPIUtil.fetchImages(imageable).then(
    images => dispatch(receiveImages(images))
  )
);

export const createImage = imageable => dispatch => (
  ImageAPIUtil.createImage(imageable).then(
    image => dispatch(receiveImage(image))
  )
);

export const deleteImage = imageId => dispatch => (
  ImageAPIUtil.deleteImage(imageId).then(
    image => dispatch(removeImage(image))
  )
);

export const receiveImages = images => ({
  type: RECEIVE_IMAGES,
  images
});

export const receiveImage = image => ({
  type: RECEIVE_IMAGE,
  image
});

export const removeImage = image => ({
  type: REMOVE_IMAGE,
  image
});
