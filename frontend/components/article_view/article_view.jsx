import React from 'react';
import ReactDOM from 'react-dom';

class ArticleView extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    this.props.requestSingleArticle(this.props.params.id);
  }

  renderImages() {
    return (this.props.article.images.map((image, idx) => (
      <li key={idx}>
        <img src={image.url}/>
      </li>
    )));
  }

  renderSteps() {

    return (this.props.article.steps.map((step, idx)=> (
      <li key={idx}>
        <h3>{step.title}</h3>
        <div className="images-container">
          <ul className="step-images">
            {step.images.map((image, imgIdx) => (
              <li key={imgIdx}><img src={image.url}/></li>
            ))}
          </ul>
        </div>
        <p>{step.body}</p>
      </li>
    )));
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
      </section>
    );
  }

}

export default ArticleView;
