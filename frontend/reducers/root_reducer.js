import {combineReducers} from 'redux';

import SessionReducer from './session_reducer';
import ArticlesReducer from './articles_reducer';
import StepsReducer from './steps_reducer';
import ErrorsReducer from './errors_reducer';
import ImagesReducer from './images_reducer';
import CommentsReducer from './comments_reducer';
import UserReducer from './user_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  user: UserReducer,
  articles: ArticlesReducer,
  steps: StepsReducer,
  errors: ErrorsReducer,
  images: ImagesReducer,
  comments: CommentsReducer
});

export default RootReducer;
