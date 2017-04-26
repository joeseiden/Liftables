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
    if (this.props.location && this.props.location.query.search_query) {
      this.props.requestSpecificArticles(this.props.location.query.search_query);
    } else {
      this.props.requestAllArticles();
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({articles: newProps.articles});
    if (this.props.location) {
      let searchQuery = newProps.location.query.search_query;
      if ( searchQuery !== this.props.location.query.search_query ) {
        if (searchQuery){
          newProps.requestSpecificArticles(searchQuery);
        } else {
          this.props.requestAllArticles();
        }
      }
    }
  }

  render() {
    const articles = this.state.articles;

    if (!articles){ return null; }
    return (
      <section className="articles-index-container">
        <ul className="articles-index">
          {articles.map(article => <ArticleIndexItem key={article.id} article={article}/>)}
        </ul>
      </section>
    );
  }
}

export default ArticlesIndex;
