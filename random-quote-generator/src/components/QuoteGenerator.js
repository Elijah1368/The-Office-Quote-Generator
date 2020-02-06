import React, {Component} from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import '../stylesheets/style.css';
import { fetchQuotes, newQuote } from '../actions/index';
import LoadingScreen from './LoadingScreen';
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
    render(){
        if (this.props.quotes['Andy Bernard']){
            return this.getCharacterGrid(this.props.quotes);
        } else {
            return <LoadingScreen />;
        }
    }

    componentDidMount(){
        this.props.fetchQuotes('https://raw.githubusercontent.com/anderskristo/the-office-quotes/master/src/quotes/all.json', 
        'https://raw.githubusercontent.com/yoscheherazade/the-office-quotes-json/master/quotes.json');
    }

    getCharacterGrid(quotes){
        return (
            <div className= 'wrapper'>
                <div className='grid'>
                    <CharacterCard image={Andy} name="Andy" quotes={quotes['Andy Bernard']}/>
                    <CharacterCard image={Angela} name="Angela" quotes={quotes['Angela Martin']}/>
                    <CharacterCard image={Dwight} name="Dwight" quotes={quotes['Dwight Schrute']}/>
                    <CharacterCard image={Jim} name="Jim" quotes={quotes['Jim Halpert']}/>          
                    <CharacterCard image={Kelly} name="Kelly" quotes={quotes['Kelly Kapoor']}/>
                    <CharacterCard image={Michael}name="Michael" quotes={quotes['Michael Scott']}/>
                    <CharacterCard image={Pam} name="Pam" quotes={quotes['Pam Beesley']}/>          
                    <CharacterCard image={Stanley} name="Stanley" quotes={quotes['Stanley Hudson']}/>
                </div>
            </div>);
    }
}


const mapStateToProps = state => ({
    quotes: state.quotes.data,
    randomNumber: state.quotes.randomNumber,
    loading: state.quotes.loading,
    character: state.quotes.character
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