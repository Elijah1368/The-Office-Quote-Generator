
const initialState = {
    quotes: {}
};

  
export default function (state = {}, action){

    if (!action.hasOwnProperty('payload') || !action){
        action = {payload:{}};
    } 
    switch (action.type){
        case 'FETCH_QUOTES':
            console.log();
            return Object.assign({}, action.payload);
        default:
            return state;
    }
}