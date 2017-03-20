import React from 'react';
import { Link } from 'react-router';

const ArticleIndexItem = ({article, router}) => (
  <li className="article-index-item">
    <Link to={`/articles/${article.id}`}>
      <img src={article.images[0].url} alt={article.title} className="article-thumbnail"/>
      <div className="article-info">
          <span className="article-index-title">{article.title}</span>
          <br/>
          by <span className="author">{article.user.username}</span>
      </div>
    </Link>
  </li>
);

export default ArticleIndexItem;
