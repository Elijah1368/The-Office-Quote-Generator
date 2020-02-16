import React, {Component} from 'react';
import {FacebookShareButton, EmailShareButton, TwitterShareButton} from 'react-share';
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
                    <q dangerouslySetInnerHTML={{ __html: this.state.current }}></q>
                    <p className = 'author'>
                    -{this.props.author}
                    </p>
                </div>
                <div className="buttons ">
                    <div className = "socialMedia">
                        <EmailShareButton
                            subject = 'The Office Quotes'
                            body = {this.stripHtmlTags(this.state.current) + this.props.author}>
                            <button className="button fa fa-envelope"></button>
                        </EmailShareButton>
                        <TwitterShareButton
                            title = 'The Office Quotes'
                            via = 'http://localhost:3000/'
                            hashtags = '#TheOffice'>
                            <button className="button fa fa-twitter"></button>
                        </TwitterShareButton>
                        <FacebookShareButton 
                            url='http://localhost:3000/'
                            quote={this.stripHtmlTags(this.state.current) + this.props.author}
                            hashtag="#TheOffice">
                            <button className="button fa fa-facebook"></button>
                        </FacebookShareButton>
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

    stripHtmlTags(text){
        let plainText = text.replace(/<(.|\n)*?>/g, '');
        return plainText;
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