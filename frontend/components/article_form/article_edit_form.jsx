import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import StepsIndexContainer from '../steps/steps_index_container';
import ImageBarContainer from '../images/image_bar_container';
import { Link, hashHistory } from 'react-router';

class ArticleEditForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.articleId,
      title: '',
      description: '',
      confirmationModalOpen: false,
      saveButtonText: "Save Article",
      published: this.props.article.published
    };
    this.autoSave();
    this.update = this.update.bind(this);
    this.saveArticle = this.saveArticle.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.deleteArticle = this.deleteArticle.bind(this);
    this.publishArticle = this.publishArticle.bind(this);
    this.doneEditing = this.doneEditing.bind(this);
    this._openConfirmationWindow = this._openConfirmationWindow.bind(this);
    this._closeConfirmationWindow = this._closeConfirmationWindow.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleArticle(this.props.params.articleId);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.article) {
      this.setState({
        id: newProps.articleId,
        title: newProps.article.title,
        description: newProps.article.description,
        confirmationModalOpen: false
      });
    }
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

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  saveArticle() {
    this.props.editArticle(this.state).then((response) => {
      this.setState({saveButtonText: "Saved"});
      setTimeout(() => this.setState({saveButtonText: "Save Article"}), 1500);
    });
  }

  publishArticle() {
    this.setState({published: !this.state.published});
    this.saveArticle();
  }

  autoSave() {
    setInterval(() =>
    this.saveArticle(), 300000);
  }

  deleteArticle() {
    this.props.deleteArticle(this.props.article);
    this._closeConfirmationWindow();
    hashHistory.push("/articles");
  }

  doneEditing() {
    hashHistory.push(`/articles/${this.state.id}`);
  }

  _openConfirmationWindow() {
    this.setState({confirmationModalOpen: true});
  }

  _closeConfirmationWindow() {
    this.setState({confirmationModalOpen: false});
  }

  render() {
    let article = this.state;
    let publishButtonText = this.state.published ? "Unpublish" : "Publish";
    if (!article){ return null; }
    return (
      <div className="article-form-container form-container">
      {this.handleErrors()}
        <div className='article-form-header form-header'>
          <ImageBarContainer imageableType={'Article'}
            imageableId={this.state.id} />
          <div className='buttons'>
            <button id='delete-button' onClick={this._openConfirmationWindow}>Delete Article</button>
            <button className='submit-button' id="article-save-button" onClick={this.saveArticle}>{this.state.saveButtonText}</button>
            <button className='submit-button' id="article-publish-button" onClick={this.publishArticle}>{publishButtonText}</button>
            <button className='submit-button' id="done-editing-button" onClick={this.doneEditing}>Done</button>
          </div>
        </div>
        <form id="article-edit-form" className='edit-form'>
          <label htmlFor='article-edit-title-input'>
          <h3>Title</h3>
          </label>
          <input type='text'
                 id='article-edit-title-input'
                 value={this.state.title}
                 placeholder='Title'
                 onChange={this.update('title')}/>
               <label htmlFor='article-edit-description-input'>
          <h3>Description</h3>
          </label>
          <textarea id='article-edit-description-input'
                 wrap='hard'
                 value={this.state.description}
                 placeholder='Description'
                 onChange={this.update('description')}/>
        </form>
        <div className='delete-button-container'>

        </div>
        <Modal
          isOpen={this.state.confirmationModalOpen}
          contentLabel="confirmation-window"
          onRequestClose={this._closeConfirmationWindow}
          shouldCloseOnOverlayClick={true}
          id="delete-article-confirmation-modal"
          className="modal">
          <div className="confirmation-message">Are you sure you want to permanently delete this article?</div>
          <div className="confirmation-buttons">
            <button onClick={this.deleteArticle}>Yes</button>
            <button onClick={this._closeConfirmationWindow}>No</button>
          </div>
        </Modal>
        <StepsIndexContainer articleId={this.state.id} />
      </div>
    );
  }
}

export default ArticleEditForm;
