import { connect } from 'react-redux';
import ArticlesIndex from './articles_index';
import { requestAllArticles } from '../../actions/article_actions';
import { selectAllArticles } from '../../reducers/selectors';

const mapStateToProps = (state) => {
  if (state.articles.articles){
    return {articles: Object.keys(state.articles.articles).map(
      id => state.articles.articles[id]
    )};
  } else {
    return {articles: null};
  }

};

const mapDispatchToProps = dispatch => ({
  requestAllArticles: () => dispatch(requestAllArticles())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesIndex);
