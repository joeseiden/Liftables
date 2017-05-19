import React from 'react';

const CommentsIndexItem = props => {
  const deleteComment = (e) => {
    e.preventDefault();
    props.deleteComment(props.articleId, props.comment.id);
  };

  const deleteButton = () => {
    if (props.currentUser) {
      if (props.currentUser.id === props.articleAuthorId ||
        props.currentUser.id === props.comment.user.id) {
        return(<button onClick={deleteComment}  className="fa fa-times delete-button"></button>);
      }
    }
  };

  return (
    <li className="comment-index-item">
      <div className="comment-info">
        <span className="comment-author">{props.comment.user.username}</span>
        {deleteButton()}
        <p className="comment-body">
          {props.comment.content}
        </p>
      </div>
    </li>
  );
};

export default CommentsIndexItem;
