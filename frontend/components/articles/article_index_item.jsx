import React from 'react';
import { Link } from 'react-router';

const ArticleIndexItem = ({article, router}) => (
  <li className="article-index-item">
    <Link to={`/articles/${article.id}`}>
      <span className="article-index-title">{article.title}</span>
      <img src={article.image_url} alt={article.title} className="article-thumbnail"/>
      <span className="article-index-desc">{article.description}</span>
    </Link>
  </li>
);

export default ArticleIndexItem;
