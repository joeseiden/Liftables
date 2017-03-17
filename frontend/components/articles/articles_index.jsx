import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import ArticleIndexItem from './article_index_item';

class ArticlesIndex extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount() {
    this.props.requestAllArticles();
  }

  render() {
    const articles = this.props.articles;
    console.log(articles);
    if (!articles){ return null; }
    return (
      <section className="articles-index">
        <ul>
          {articles.map(article => <ArticleIndexItem key={article.id} article={article}/>)}
        </ul>
      </section>
    );
  }
}

export default ArticlesIndex;
