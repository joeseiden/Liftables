import { connect } from 'react-redux';
import ArticleView from './article_view';
import {
  requestSingleArticle,
  deleteArticle
 } from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => ({
  article: state.articles[ownProps.params.aritcleId],
  currentUser: ((state.session.currentUser) ? state.session.currentUser.username : null)
});

const mapDispatchToProps = dispatch => ({
  requestSingleArticle: article => dispatch(requestSingleArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleView);
