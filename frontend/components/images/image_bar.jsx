import React from 'react';
import ReactDOM from 'react-dom';

class ImageBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      imageable: {
        type: this.props.imageableType,
        id: this.props.imageableId
      }
    };

    this.upload = this.upload.bind(this);
  }

  componentDidMount() {
    this.props.fetchImages(this.state.imageable);
  }

  componentWillReceiveProps(newProps) {
    this.setState({images: newProps.images});
  }

  upload(e) {
    e.preventDefault();
    const imageable = this.state.imageable;
    const createImage = this.props.createImage;
    window.cloudinary.openUploadWidget(window.cloudinary_options,
      (error, images) => {
        if (error === null) {
          createImage(imageable, images[0]);
        }
      });
    }

  render() {
    return (

      <button onClick={this.upload}>
        Click To Add Image
      </button>
    );
  }
}

export default ImageBar;
