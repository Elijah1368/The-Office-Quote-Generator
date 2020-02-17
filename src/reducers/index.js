import quoteReducer from './quoteReducer';
import imageReducer from './imageReducer';
import cardReducer from './cardReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    quotes: quoteReducer,
    images: imageReducer,
    cards: cardReducer
  });
  