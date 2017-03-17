import React from 'react';
import { Link } from 'react-router';

const ArticleIndexItem = ({article, router}) => (
  <li className="article-index-item">
    <Link to={`/articles/${article.id}`}>
      <span>{article.title}</span>
      <img src={article.image_url} alt={article.title} />
      <span>{article.description}</span>
    </Link>
  </li>
);

export default ArticleIndexItem;
