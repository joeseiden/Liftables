import React from 'react';
import ReacDOM from 'react-dom';
import {Link, hashHistory} from 'react-router';
import Modal from 'react-modal';

class NewArticleModal extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      description: '',
      modalOpen: true
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this._closeForm = this._closeForm.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let that = this;
    this.props.createArticle({
      title: this.state.title,
      description: this.state.description
    }).then((response) => {
      let url = `articles/${response.article.id}/edit`;
      that._closeForm();
      hashHistory.push(url);
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  _closeForm(){
    this.setState({modalOpen: false});
  }

  handleErrors() {
    if (this.props.errors){
    return(
      <ul className="errors">
        {this.props.errors.map((error, i) =>(
          <li className="animated pulse" key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
    }
  }

  render(){

    return (
      <form onSubmit={this.handleSubmit} className="new-article-form">
        <div>
          {this.handleErrors()}
          <h2 id="article-title-label">I'm writing an article about:</h2>
          <input type='text'
                 id='article-modal-title-input'
                 placeholder='Title'
                 onChange={this.update('title')}/>
          <textarea id='article-modal-description-input'
                 wrap='hard'
                 placeholder='Description'
                 onChange={this.update('description')}></textarea>
          <input type='submit'
            id='article-modal-submit'
            value='Start Article'/>
        </div>
      </form>
    )
  };
}

export default NewArticleModal;
