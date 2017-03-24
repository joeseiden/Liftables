import React from 'react';

const CommentsIndexItem = props => {
  const deleteComment = (e) => {
    e.preventDefault();
    props.deleteComment(props.articleId, props.comment.id);
  };

  return (
    <li className="comment-index-item">
      <div className="comment-info">
        <span className="comment-author">{props.comment.user.username}</span>
        <p className="comment-body">
          {props.comment.content}
        </p><button onClick={deleteComment}>Delete</button>
      </div>
    </li>
  );
};

export default CommentsIndexItem;
