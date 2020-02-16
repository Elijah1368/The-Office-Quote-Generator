
const initialState = {
    key: "",
}

  
export default function (state = initialState, action){
    switch (action.type){
        case 'SELECT':
            return {
                key: action.payload,
            };
        default:
            return state;
    }
}