import { FETCH_QUOTES, NEW_QUOTE} from '../constants';

export default function (state = {image: new Image()}, action){
    switch (action.type){
        case FETCH_QUOTES:
            return {};
        case NEW_QUOTE:
            return {};
        default:
            return state;
    }
}