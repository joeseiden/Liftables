import { connect } from 'react-redux';
import NewArticleModal from './new_article_modal';
import { createArticle, receiveErrors } from '../../actions/article_actions';

const mapStateToProps = (state) => ({
  errors: state.errors
});

const mapDispatchToProps = (dispatch) => ({
  createArticle: article => dispatch(createArticle(article)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NewArticleModal);
