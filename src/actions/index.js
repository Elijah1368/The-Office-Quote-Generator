import Andy from '../assets/Andy.png';
import Angela from '../assets/Angela.png';
import Dwight from '../assets/Dwight.png';
import Jim from '../assets/Jim.png';
import Kelly from '../assets/Kelly.png';
import Michael from '../assets/Michael.png';
import Pam from '../assets/Pam.png';
import Stanley from '../assets/Stanley.png';

import Creed from '../assets/Creed.png';
import Kevin from '../assets/Kevin.png';
import Meredith from '../assets/Meredith.png';
import Oscar from '../assets/Oscar.png';
import Phyllis from '../assets/Phyllis.png';
import Ryan from '../assets/Ryan.png';
import Toby from '../assets/Toby.png';
import quotes from '../assets/quotes.json';

export const fetchQuotes = (...urls) => dispatch => {
    //let promises = gatherPromises(urls);
    //dispatchPromises(dispatch, promises);

    dispatch({type: 'FETCH_QUOTES', payload:{quotes}});
};

function dispatchPromises(dispatch, promises){
    Promise.all(promises).then((results) =>{
        let payload = results.reduce((accumulator, val) => Object.assign(accumulator, val));
        dispatch({type: 'FETCH_QUOTES', payload});
    })
}

function gatherPromises(urls){
    let promises = [];
    urls.map((url) => promises.push(asyncFetch(url)));
    return promises;
}

function asyncFetch(url){
    return (
        fetch(url)
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then(data => {
            return listToObject(data);
        })
        .catch(error=> {
            console.log(error);
        })
    );
}

function listToObject(quotes){
    let result = {};
    quotes.map(quote => {
        let key = nameOrCharacter(quote);
        let property = quote[key].substr(0, quote[key].indexOf(' '));
        if (result.hasOwnProperty(property)){
            return result[property].push(quote.quote);
        } else {
            return result[property] = [quote.quote];
        }
    });
    return {quotes: result};
}


function nameOrCharacter(quote){
    if (quote.hasOwnProperty('name')){
        return 'name';
    } else {
        return 'character';
    }
}

export const getImages = () => dispatch => {
    let images = [Andy, Angela, Dwight, Jim, Kelly, Michael, Pam, Stanley, Creed, Kevin, Meredith, Oscar, Phyllis, Ryan, Toby];
    dispatch({type: 'GET_IMAGES', payload: images});
}

export const onSelect = (key) => dispatch => {
    dispatch({type: 'SELECT', payload: key});
}