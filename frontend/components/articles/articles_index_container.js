import { connect } from 'react-redux';
import ArticlesIndex from './articles_index';
import { requestAllArticles } from '../../actions/article_actions';
import { selectAllArticles } from '../../reducers/selectors';

const mapStateToProps = state => ({
  articles: selectAllArticles(state)
});

const mapDispatchToProps = dispatch => ({
  requestAllArticles: dispatch(() => requestAllArticles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesIndex);
