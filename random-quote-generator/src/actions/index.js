import {FETCH_QUOTES, NEW_QUOTE} from '../constants';


export const fetchQuotes = (...urls) => dispatch => {
    let promises = [];
    for (let url of urls){
        promises.push(asyncFetch(url));
    }

    Promise.all(promises).then((results) =>{
        let payload = results.reduce((accumulator, val) => Object.assign(accumulator, val));
        dispatch({type: FETCH_QUOTES, payload});
    })
};

function asyncFetch(url){
    return (
        fetch(url)
        .then(response => {
            if (!response.ok){
                throw Error(response.statusText);
            }
            return response.json();
        })
        .then(data => {
            return addQuotes({}, data);
        })
        .catch(error=> {
            console.log(error);
        })
    );
}

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