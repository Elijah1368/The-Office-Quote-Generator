import Andy from '../assets/Andy.png';
import Angela from '../assets/Angela.png';
import Dwight from '../assets/Dwight.png';
import Jim from '../assets/Jim.png';
import Kelly from '../assets/Kelly.png';
import Michael from '../assets/Michael.png';
import Pam from '../assets/Pam.png';
import Stanley from '../assets/Stanley.png';
import quotes from '../assets/quotes.json';

export const fetchQuotes = (...urls) => dispatch => {
    dispatch({type: 'FETCH_QUOTES', payload:{quotes}});
};

export const getImages = () => dispatch => {
    let images = [Andy, Angela, Dwight, Jim, Kelly, Michael, Pam, Stanley];
    dispatch({type: 'GET_IMAGES', payload: images});
}

export const onSelect = (key) => dispatch => {
    dispatch({type: 'SELECT', payload: key});
}