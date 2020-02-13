import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../stylesheets/style.css';
import { fetchQuotes, getImages, onSelect, newQuote } from '../actions/index';
import QuoteCard from './QuoteCard';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import LoadingScreen from './LoadingScreen';
import ReactCardFlip from 'react-card-flip';
import {ArrowLeft, ArrowRight} from './Arrow';


export class CardMenu extends Component {
    render(){
        if (this.props.quotes['Andy'].quotes != 0 && this.props.images){
            return (
            <div id='menu'>
            <ScrollMenu
                data={this.getCards()}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={this.props.selected}
                onSelect={this.props.onSelect}
                scrollToSelected={true}
                />
            </div>);
        } else {
            return <LoadingScreen />;
        }
    }

    getCards(){
        return (
        this.props.images.map(url => {
            let name = extractName(url);
            return (  
            <div key = {name} onDragStart={(e)=> e.preventDefault()} >
                <ReactCardFlip isFlipped = {this.props.selected === name} infinite = {true}>
                    <div key='front'>
                        <img src = {url} alt = {name} className='front'/>
                    </div>
                    <div key='back'>
                        <QuoteCard quote = {this.props.quotes[name].current} onClick = {() => {this.props.newQuote(name)}}/>
                    </div>
                </ReactCardFlip>
            </div> )})
        );
    }

    newQuote(){

    }
    
    componentDidMount(){
        this.props.fetchQuotes('https://raw.githubusercontent.com/anderskristo/the-office-quotes/master/src/quotes/all.json', 
        'https://raw.githubusercontent.com/yoscheherazade/the-office-quotes-json/master/quotes.json');
        this.props.getImages();
    }
}

function extractName(url){
    let fileName = url.substr(url.lastIndexOf('/') + 1);
    let name = fileName.substr(0, fileName.indexOf('.'));
    return name;
}

const mapStateToProps = state => ({
    quotes:         state.quotes.quotes,
    images:         state.images.data,
    cardsFlipState: state.cards.cardsFlipState,
    selected:       state.cards.key
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            fetchQuotes,
            newQuote,
            getImages,
            onSelect
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(CardMenu);