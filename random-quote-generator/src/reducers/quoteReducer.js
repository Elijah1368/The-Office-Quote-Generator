import { FETCH_QUOTES, NEW_QUOTE} from '../constants';

const initialState = {
    loading: true,
    error: false,
    data: {},
    character: '',
    randomNumber: 0,
};

  
export default function (state = initialState, action){

    if (!action.payload){
        action = {};
    } 
    switch (action.type){
        case FETCH_QUOTES:
            return {
                ...state,
                loading: false,
                data: Object.assign(state.data, action.payload)
            };
        case NEW_QUOTE:
            return {};
        default:
            return state;
    }
}