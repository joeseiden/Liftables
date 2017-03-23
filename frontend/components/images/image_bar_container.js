import { connect } from 'react-redux';
import ImageBar from './image_bar';
import {
  fetchImages,
  createImage,
  deleteImage
} from '../../actions/image_actions';

const mapStateToProps = (state, ownProps) => {
  let images;
  if (state.images){
    images = Object.keys(state.images).map(
      id => state.images[id]
    );
  } else {
    images = [];
  }

  return {
    imageableType: ownProps.imageableType,
    imageableId: ownProps.imageableId,
    images
  };
};

const mapDispatchToProps = dispatch => ({
  fetchImages: imageable => dispatch(fetchImages(imageable)),
  createImage: (imageable, image) => dispatch(createImage(imageable, image)),
  deleteImage: imageId => dispatch(deleteImage(imageId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageBar);
