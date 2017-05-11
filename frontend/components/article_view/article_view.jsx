import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import { Link, hashHistory } from 'react-router';
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



  renderAuthorActions() {
    const currentUser = this.props.currentUser;

    if (this.props.currentUser && this.props.currentUser.id === this.props.article.user.id) {
      return (
      <div className='author-actions-container'>
        <div className='edit-link-container'>
          <Link to={`/articles/${this.props.article.id}/edit`}
          className='edit-article-link'>Edit Article</Link>
        </div>
      </div>
      );
    }
  }

  renderAuthorInfo() {
    return (
      <div className='article-author-info'>
        <h4>More from {this.props.article.user.username}</h4>
        <ul className="small-article-index">
          {this.props.article.user.articles.map((article, idx) => {
            if(article.published) {
              if(article.images[0]){
                return (
                  <li className="small-article-index-item" key={idx}>
                    <img src={article.images[0].url} title={article.title} className="small-article-thumb"/>
                  </li>
                );
              } else {
                return (
                <li className="small-article-index-item" key={idx}>
                  <img src="https://image.flaticon.com/icons/png/512/8/8928.png" title={article.title} className="article-thumbnail dummy-thumbnail"/>
                </li>
                );
              }
            }
          })}
        </ul>
      </div>
    );
  }

  render() {
    let article = this.props.article;

    if (!article){ return null; }
    return (
      <section className="article-view">
        <div className="article-view-header">
          <h2 className="article-title">{article.title}</h2>
          <span>by <name>{article.user.username}</name></span>
        </div>
        {this.renderAuthorActions()}
        <div className="article-view-body">
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
        </div>
        {this.renderAuthorInfo()}
      </section>
    );
  }

}

export default ArticleView;
