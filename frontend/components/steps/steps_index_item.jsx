import React from 'react';
import { Link } from 'react-router';

const StepsIndexItem = props => {
  const deleteStep = (e) => {
    e.preventDefault();
    props.deleteStep(props.articleId, props.step.id);
  };

  return (
    <li className="step-index-item">
      <span className="step-index-item-title">{props.step.title}</span>
      <p className="step-index-item-body">{props.step.body}</p>
      <div className="step-buttons">
        <Link to={`/articles/${props.articleId}/steps/${props.step.id}/edit`}>
          Edit
        </Link>
        <button onClick={deleteStep}>Delete</button>
      </div>
    </li>
  );
};

export default StepsIndexItem;
