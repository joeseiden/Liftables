import React from 'react';
import { Link } from 'react-router';

const ArticleIndexItem = ({article, router}) => {

  const renderImage = () => {
    if(article.images[0]){
      return (
        <img src={article.images[0].url} alt={article.title} className="article-thumbnail"/>
      )
    } else {
      return (
        <img src='https://dummyimage.com/300.png/09f/fff' alt={article.title} className="article-thumbnail"/>
      )
    }
  }

  return (
  <li className="article-index-item">
    <Link to={`/articles/${article.id}`}>
      {renderImage()}
      <div className="article-info">
          <span className="article-index-title">{article.title}</span>
          <br/>
          by <span className="author">{article.user.username}</span>
      </div>
    </Link>
  </li>
  )
};

export default ArticleIndexItem;
