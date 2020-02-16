
const initialState = {
    images:[]
}

  
export default function (state = initialState, action){

    if (!action.hasOwnProperty('payload') || !action){
        action = {payload:[]};
    } 
    switch (action.type){
        case 'GET_IMAGES':
            return {
                data: action.payload
            };
        default:
            return state;
    }
}