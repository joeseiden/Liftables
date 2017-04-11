import { connect } from 'react-redux';
import ArticleEditForm from './article_edit_form';
import {
  requestAllArticles,
  requestSingleArticle,
  editArticle,
  deleteArticle
} from '../../actions/article_actions';
import {
  createStep
} from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  article: state.articles[ownProps.params.articleId],
  articleId: ownProps.params.articleId
});

const mapDispatchToProps = (dispatch, ownProps) =>({
  requestAllArticles: () => dispatch(requestAllArticles()),
  requestSingleArticle: (articleId) => dispatch(requestSingleArticle(articleId)),
  deleteArticle: (articleId) => dispatch(deleteArticle(articleId)),
  editArticle: (article) => dispatch(editArticle(article)),
  createStep: (articleId, step) => dispatch(createStep(articleId, step))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleEditForm);
