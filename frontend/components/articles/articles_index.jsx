import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router';
import ArticleIndexItem from './article_index_item';

class ArticlesIndex extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      articles: []
    };
  }

  componentWillMount() {
    if (this.props.location.query.search_query) {
      this.props.requestSpecificArticles(this.props.location.query.search_query);
    } else {
      this.props.requestAllArticles();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({articles: newProps.articles});
  }

  render() {
    const articles = this.state.articles;

    if (!articles){ return null; }
    return (
      <section>
        <ul className="articles-index">
          {articles.map(article => <ArticleIndexItem key={article.id} article={article}/>)}
        </ul>
      </section>
    );
  }
}

export default ArticlesIndex;
