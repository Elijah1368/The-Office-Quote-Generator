import {FETCH_QUOTES, NEW_QUOTE, LOAD_ASSETS} from '../constants';


export const fetchQuotes = (...urls) => dispatch => {
    let officeQuotes = {};
    for (let url of urls){
        fetch(url)
        .then(response => {
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            return addQuotes(officeQuotes, data);
        })
        .catch(error=> {
            console.log(error);
        })
        .then(data => {
            console.log(`data: ${data['Michael Scott']}`);
            dispatch({type: FETCH_QUOTES, payload: data});
        });
    }
};

export const newQuote = (name) => {
    return {
        type: NEW_QUOTE
    }
};

function addQuotes(container, quotes){
    let result = {container};
    quotes.map(quote => {
        let key = nameOrCharacter(quote);
        if (result.hasOwnProperty(quote[key])){
            result[quote[key]].push(quote.quote);
        } else {
            result[quote[key]] = [quote.quote];
        }
    });

    return result
}

function nameOrCharacter(quote){
    if (quote.hasOwnProperty('name')){
        return 'name';
    } else {
        return 'character';
    }
}