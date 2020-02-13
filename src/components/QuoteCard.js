import React, {Component} from 'react';
import '../stylesheets/loadingScreen.css';


export default class QuoteCard extends Component {
    render(){
        return ( 
        <div className = 'back'>
            <q>
                {this.props.quote}
            </q>
            <div className="buttons">
                <a
                href=""
                className="button"
                id="tweet-quote"
                title="Tweet this quote!"
                target="_blank"
                rel="noopener noreferrer"
                >
                TWEET
                </a>
                <button
                className="button"
                id="new-quote"
                onClick={this.props.onClick}
                >
                NEW QUOTE
                </button>
            </div>
        </div> );
    }
}