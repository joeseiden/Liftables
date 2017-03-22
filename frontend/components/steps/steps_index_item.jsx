import React from 'react';
import { Link } from 'react-router';

const StepsIndexItem = props => {
  return (
    <li className="step-index-item">
      <div className="step-info">
        <span className="step-index-item-title">{props.step.title}</span>
        <Link to={`/articles/${props.articleId}/steps/${props.step.id}/edit`}>
          Edit
        </Link>
      </div>
    </li>
  );
};

export default StepsIndexItem;
