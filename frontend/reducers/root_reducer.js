import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArticlesReducer from './articles_reducer';
import ArticleViewReducer from './article_view_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  articles: ArticlesReducer
});

export default RootReducer;
