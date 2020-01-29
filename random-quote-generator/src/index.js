

import React from '../node_modules/react';
import ReactDOM from '../node_modules/react-dom';
import './index.css';

$(document).ready(function(){
    if (window.top == window.self) console.log("it is the top most");
    /*
    getQuotes().then(()=>{
        getQuote();
    });*/
})