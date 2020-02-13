
const initialState = {
    key: "",
}

  
export default function (state = initialState, action){
    switch (action.type){
        case 'SELECT':
            return {
                key: action.payload,
                cardsFlipState: state.cardsFlipState
            };
        default:
            return state;
    }
}