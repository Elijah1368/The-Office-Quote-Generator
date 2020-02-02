import quoteReducer from './quoteReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    quotes: quoteReducer,
  });
  