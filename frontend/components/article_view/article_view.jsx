import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
import CommentsIndexContainer from '../comments/comments_index_container';

class ArticleView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      confirmationModalOpen: false
    };
    this.deleteArticle = this.deleteArticle.bind(this);
    this._openConfirmationWindow = this._openConfirmationWindow.bind(this);
    this._closeConfirmationWindow = this._closeConfirmationWindow.bind(this);
  }

  componentWillMount() {
    this.props.requestSingleArticle(this.props.params.articleId);
  }

  renderImages() {
    return (this.props.article.images.map((image, idx) => (
      <li key={idx}>
        <img src={image.url}/>
      </li>
    )));
  }

  mergeSteps(left, right) {
    const results = [];

    while (left.length > 0 && right.length >0) {
      switch (left[0].order < right[0].order) {
        case true:
          results.push(left.shift());
          break;
        default:
          results.push(right.shift());
      }
    }

    return results.concat(left, right);
  }

  mergeSortSteps(arr){
    if (arr.length < 2) {
      return arr;
    } else {
      const middle = Math.floor(arr.length / 2);
      const left = this.mergeSortSteps(arr.slice(0, middle));
      const right = this.mergeSortSteps(arr.slice(middle));

      return this.mergeSteps(left, right);
    }
  }

  renderSteps() {

    const orderedSteps = this.mergeSortSteps(this.props.article.steps);

    return (orderedSteps.map((step, idx)=> (
      <li key={idx}>
        <h3 className="step-header">{step.title}</h3>
        <div className="images-container">
          <ul className="step-images">
            {step.images.map((image, imgIdx) => (
              <li key={imgIdx}><img src={image.url}/></li>
            ))}
          </ul>
        </div>
        <p className="step-body">{step.body}</p>
      </li>
    )));
  }

  deleteArticle() {
    this.props.deleteArticle(this.props.article);
    this._closeConfirmationWindow();
    hashHistory.push("/articles");
  }

  _openConfirmationWindow() {
    this.setState({confirmationModalOpen: true});
  }

  _closeConfirmationWindow() {
    this.setState({confirmationModalOpen: false});
  }

  renderAuthorActions() {
    const currentUser = this.props.currentUser;

    if (this.props.currentUser && this.props.currentUser.id === this.props.article.user.id) {
      return (
      <div className='author-actions-container'>
        <div className='edit-link-container'>
          <Link to={`/articles/${this.props.article.id}/edit`}
          className={'edit-article-link'}>Edit Article</Link>
        </div>
        <div className='delete-button-container'>
          <button onClick={this._openConfirmationWindow}>Delete Article</button>
        </div>
      </div>
      );
    }
  }

  render() {
    let article = this.props.article;

    if (!article){ return null; }
    return (
      <section className="article-view">
        <div className="article-view-header">
          <h2 className="article-title">{article.title}</h2>
          <span>by {article.user.username}</span>
        </div>
        <div className="images-container">
          <ul className="article-images">
            {this.renderImages()}
          </ul>
        </div>
        <div className="article-description">
          <p>{article.description}</p>
        </div>
        <div className="steps-container">
          <ul className="steps">
            {this.renderSteps()}
          </ul>
        </div>
        {this.renderAuthorActions()}
        <CommentsIndexContainer articleId={article.id} />
        <Modal
          isOpen={this.state.confirmationModalOpen}
          contentLabel="confirmation-window"
          onRequestClose={this._closeConfirmationWindow}
          shouldCloseOnOverlayClick={true}
          id="delete-article-confirmation-modal"
          className="modal">
          <div>Are you sure you want to permanently delete this article?</div>
          <div className="confirmation-buttons">
            <button onClick={this.deleteArticle}>Yes</button>
            <button onClick={this._closeConfirmationWindow}>No</button>
          </div>
        </Modal>
      </section>
    );
  }

}

export default ArticleView;
