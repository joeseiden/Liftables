import React from 'react';
import ReactDOM from 'react-dom';
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'ykgtnmrm';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/liftables/upload';

class ImageBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      images: [],
      imageable: {
        type: this.props.imageableType,
        id: this.props.imageableId
      },
      uploadedFileCloudinaryUrl: ''
    };

  }

  componentDidMount() {
    this.props.fetchImages(this.state.imageable);
  }

  componentWillReceiveProps(newProps) {
    this.setState({images: newProps.images});
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);
    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  }

  render() {
    return (
      <div>
        <div className='file-upload'>
          <Dropzone
            multiple={false}
            accept="image/*"
            onDrop={this.onImageDrop.bind(this)}>
            <p>Drop an image or click to select a file to upload.</p>
          </Dropzone>
        </div>

        <div className='image-preview'>
          {this.state.uploadedFileCloudinaryUrl === '' ? null:
          <div>
            <img src={this.state.uploadedFileCloudinaryUrl} />
          </div>}
        </div>
      </div>

    );
  }
}

export default ImageBar;
