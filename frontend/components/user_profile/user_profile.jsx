import React from 'react';
import ReactDOM from 'react-dom';
import { Link, hashHistory } from 'react-router';
import ArticleIndexItem from '../articles/article_index_item';

class UserProfile extends React.Component {
  constructor(props){
    super(props);

  }


  componentWillMount() {
    this.props.requestUser(this.props.params.userId);
  }

  componentWillReceiveProps(newProps) {
    if (this.props.params.userId !== newProps.params.userId) {
      this.props.requestUser(this.props.params.userId);
    }
  }

  render () {
    const user = this.props.user;
    const articles = user.articles;
    if (!user || !articles){ return null; }
    if (!this.props.currentUser || user.id !== this.props.currentUser.id) {
      return (
        <section className="user-profile">
          <div className="user-profile-header">
            <h2 className="user-profile-title">{user.username}&#39;s articles</h2>
          </div>
          <div className="user-articles-container">
            <ul className="user-articles-index articles-index">
              {articles.map(article =>
                <ArticleIndexItem key={article.id} article={article}/>)
              }
            </ul>
          </div>
        </section>
      );
    }
    else if (this.props.currentUser.id === this.props.user.id) {
      return (
        <section className="user-profile">
          <div className="user-profile-header">
            <h2 className="user-profile-title">Your articles</h2>
          </div>
          <div className="user-articles-container">
            <h3>Published Articles</h3>
            <ul className="user-articles-index articles-index published">
              {articles.map(article => {
              if(article.published) {
                return (<ArticleIndexItem key={article.id} article={article}/>);
              }
              })}
            </ul>
            <h3>Drafts</h3>
            <ul className="user-articles-index articles-index drafts">
              {articles.map(article => {
                if(!article.published) {
                  return (<ArticleIndexItem key={article.id} article={article}/>);
                }
              })}
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default UserProfile;
