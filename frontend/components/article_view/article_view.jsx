import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import CommentsIndexContainer from '../comments/comments_index_container';

class ArticleView extends React.Component {
  constructor(props){
    super(props);
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

  renderEditLink() {
    const currentUser = this.props.currentUser;

    if (currentUser.id === this.props.article.user.id) {
      return (<div className='edit-link-container'>
        <Link to={`/articles/${article.id}/edit`}
          className={'edit-article-link'}>Edit Article</Link>
      </div>);
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
        <CommentsIndexContainer articleId={article.id} />
      </section>
    );
  }

}

export default ArticleView;
