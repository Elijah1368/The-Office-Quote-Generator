import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../stylesheets/style.css';
import { fetchQuotes, newQuote } from '../actions/index';

import CharacterCard from './CharacterCard';
import Andy from '../assets/Andy.png';
import Angela from '../assets/Angela.png';
import Dwight from '../assets/Dwight.png';
import Jim from '../assets/Jim.png';
import Kelly from '../assets/Kelly.png';
import Michael from '../assets/Michael.png';
import Pam from '../assets/Pam.png';
import Stanley from '../assets/Stanley.png';


export class QuoteGenerator extends Component {

    componentDidMount(){
        this.props.fetchQuotes('https://raw.githubusercontent.com/anderskristo/the-office-quotes/master/src/quotes/all.json', 
        'https://raw.githubusercontent.com/yoscheherazade/the-office-quotes-json/master/quotes.json');
        console.log(this.props.quotes);
    }

    render(){
        return (
            <div className='wrapper'>
                <CharacterCard name="Andy" image={Andy} />
                <CharacterCard name="Angela" image={Angela}/>
                <CharacterCard name="Dwight" image={Dwight}/>
                <CharacterCard name="Jim" image={Jim}/>
                <CharacterCard name="Kelly" image={Kelly}/>
                <CharacterCard name="Michael" image={Michael}/>
                <CharacterCard name="Pam" image={Pam}/>
                <CharacterCard name="Stanley" image={Stanley}/>
         </div> );
    }
}

const mapStateToProps = state => ({
    quotes: state.data,
    randomNumber: state.randomNumber,
    loading: state.loading,
    character: state.character
});

const mapDispatchToProps = dispatch => 
    bindActionCreators(
        {
            fetchQuotes,
            newQuote,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(QuoteGenerator);