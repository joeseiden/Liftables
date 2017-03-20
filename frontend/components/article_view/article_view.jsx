import React from 'react';
import ReactDOM from 'react-dom';

class ArticleView extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestSingleArticle(this.props.params.id);
  }

  renderImages() {
    return (this.props.article.images.map((image, idx) => (
      <img key={idx} src={image.url}/>
    )));
  }

  render() {
    const article = this.props.article;
    console.log(this.props.article);
    if (!article){ return null; }
    return (
      <section className="article-view">
        <div className="article-view-header">
          <h2 className="article-title">{article.title}</h2>
          <span>by {article.user.username}</span>
        </div>
        <div className="article-images">
          {this.renderImages()}
        </div>
        <div className="article-description">
          <p>{article.description}</p>
        </div>
        <p>Steps go here</p>
      </section>
    );
  }

}

export default ArticleView;
