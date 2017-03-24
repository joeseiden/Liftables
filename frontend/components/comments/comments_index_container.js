import { connect } from 'react-redux';
import CommentsIndex from './comments_index';
import {
  fetchComments,
  createComment,
  deleteComment
} from '../../actions/comment_actions';

const mapStateToProps = (state, ownProps) => {
  let comments;
  if (state.comments){
    comments = Object.keys(state.comments).map(id => state.comments[id]);
  } else {
    comments = [];
  }

  return {
    comments,
    articleId: ownProps.articleId,
    currentUser: (
      (state.session.currentUser) ? state.session.currentUser : null
    )
  };
};


const mapDispatchToProps = (dispatch, ownProps) => ({
  fetchComments: articleId => dispatch(fetchComments(articleId)),
  createComment: (articleId, comment) => dispatch(createComment(articleId, comment)),
  deleteComment: (articleId, commentId) => dispatch(deleteComment(articleId, commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentsIndex);
