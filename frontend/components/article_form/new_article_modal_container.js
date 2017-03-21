import { connect } from 'react-redux';
import NewArticleModal from './new_article_modal';
import { createArticle } from '../../actions/article_actions';

const mapStateToProps = () => ({
  concept: {title: '', description: '', images: [], publish: false, user_id: null, steps: [], modalOpen: true};
});

const mapDispatchToProps = (dispatch) => ({
  createArticle: article => dispatch(createArticle(article))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps)(NewArticleModal);
