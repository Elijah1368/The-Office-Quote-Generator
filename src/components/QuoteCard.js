import React, {Component} from 'react';
import '../stylesheets/loadingScreen.css';


export default class QuoteCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            quotes: this.props.quotes,
            current: ""
        };
        this.newQuote = this.newQuote.bind(this);
    }

    componentDidMount(){
        this.newQuote();
    }

    render(){
        return ( 
        <div className={this.props.className}>
            <div className='quoteBox'>
                <div className ='quote' > 
                    <p dangerouslySetInnerHTML={{ __html: this.state.current }}></p>
                    <p className = 'author'>
                    -{this.props.author}
                    </p>
                </div>
                <div className="buttons ">
                    <div className = "socialMedia">
                        <a
                        href=""
                        className="button fa fa-twitter"
                        id="tweet-quote"
                        title="Tweet this quote!"
                        target="_blank"
                        rel="noopener noreferrer"
                        />
                        <a
                        href=""
                        className="button fa fa-facebook"
                        id="tweet-quote"
                        title="Share this on facebook!"
                        target="_blank"
                        rel="noopener noreferrer"
                        />
                    </div>

                    <button
                    className="button"
                    id="new-quote"
                    onClick={this.newQuote}
                    >
                    NEW QUOTE
                    </button>
                </div>
            </div>
        </div> );
    }

    newQuote(){
        let newQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        while (newQuote === this.state.current){
            newQuote = this.state.quotes[Math.floor(Math.random() * this.state.quotes.length)];
        }
        this.setState(prevState => ({
            current: newQuote
        }));
    }
}