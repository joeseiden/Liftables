import { connect } from 'react-redux';
import ArticleEditForm from './article_edit_form';
import {
  fetchArticles,
  fetchArticle,
  editArticle,
  deleteArticle
} from '../../actions/article_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors,
  article: state.articles[ownProps.params.id]
})

const mapDispatchToProps = (dispatch, ownProps) =>({
  fetchArticles: () => dispatch(fetchArticles()),
  fetchArticle: (articleId) => dispatch(fetchArticle(articleId)),
  deleteArticle: (articleId) => dispatch(deleteArticle(articleId)),
  editArticle: (article) => dispatch(editArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticleEditForm);
