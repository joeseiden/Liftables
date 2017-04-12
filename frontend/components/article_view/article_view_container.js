import { connect } from 'react-redux';
import ArticleView from './article_view';
import {
  requestSingleArticle,
  deleteArticle
 } from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => ({
  article: state.articles[ownProps.params.articleId],
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleArticle: article => dispatch(requestSingleArticle(article)),
  deleteArticle: article => dispatch(deleteArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView);
