
const emptyQuotes = {current: "", quotes:[]}
const initialState = {
    quotes: {
        Andy:   {emptyQuotes},
        Michael:{emptyQuotes},
        Stanley:{emptyQuotes},
        Kelly:  {emptyQuotes},
        Dwight: {emptyQuotes},
        Pam:    {emptyQuotes},
        Jim:    {emptyQuotes},
        Angela: {emptyQuotes}
    }
};

  
export default function (state = initialState, action){

    if (!action.hasOwnProperty('payload') || !action){
        action = {payload:{}};
    } 
    switch (action.type){
        case 'FETCH_QUOTES':
            return Object.assign({}, action.payload);
        case 'NEW_QUOTE':
            let newState = {...state};
            newState.quotes[action.payload].current = newState.quotes[action.payload].quotes[Math.floor(Math.random() * newState.quotes[action.payload].quotes.length)];
            return newState;
        default:
            return state;
    }
}