import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../stylesheets/style.css';
import { fetchQuotes, getImages, onSelect} from '../actions/index';
import QuoteCard from './QuoteCard';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import LoadingScreen from './LoadingScreen';
import ReactCardFlip from 'react-card-flip';
import {ArrowLeft, ArrowRight} from './Arrow';



export class CardMenu extends Component {
    render(){
        if (this.props.quotes && this.props.images){
            return (
            <div id='menu'>
            <ScrollMenu
                data={this.getCards()}
                arrowLeft={ArrowLeft}
                arrowRight={ArrowRight}
                selected={this.props.selected}
                onSelect={this.props.onSelect}
                scrollToSelected={true}
                wheel = {false}
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
            <div key = {name} onDragStart={(e)=> e.preventDefault()} className='card'>
                <ReactCardFlip isFlipped = {this.props.selected === name} infinite = {true}>
                    <div key='front'>
                        <img src = {url} alt = {name} className='front'/>
                    </div>
                    <div key='back'>
                        <QuoteCard quotes = {this.props.quotes[name]} className='back' author={name}/>
                    </div>
                </ReactCardFlip>
            </div>)})
        );
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
    selected:       state.cards.key
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            fetchQuotes,
            getImages,
            onSelect
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(CardMenu);