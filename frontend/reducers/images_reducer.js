import {
  RECEIVE_IMAGES,
  RECEIVE_IMAGE,
  REMOVE_IMAGE
} from '../actions/image_actions';
import { merge } from 'lodash';

const ImagesReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_IMAGES:
      const images = action.images;
      return merge({}, state, images);
    case RECEIVE_IMAGE:
      newState = merge({}, state);
      newState[action.image.id]=action.image;
      return newState;
    case REMOVE_IMAGE:
      const imageId = action.image.id;
      newState = merge({}, state);
      delete newState[imageId];
      return newState;
    default:
      return state;
  }
};

export default ImagesReducer;
