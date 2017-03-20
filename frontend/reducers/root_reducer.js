import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArticlesReducer from './articles_reducer';
import ArticleViewReducer from './article_view_reducer';
import StepsReducer from './steps_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  articles: ArticlesReducer,
  steps: StepsReducer
});

export default RootReducer;
