import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArticlesReducer from './articles_reducer';
import ArticleViewReducer from './article_view_reducer';
import StepsReducer from './steps_reducer';
import ErrorsReducer from './errors_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  articles: ArticlesReducer,
  steps: StepsReducer,
  errors: ErrorsReducer
});

export default RootReducer;
