import React, {Component} from 'react';
import CharacterCard from './CharacterCard';
import '../stylesheets/style.css';
import Andy from '../assets/Andy.png';
import Angela from '../assets/Angela.png';
import Dwight from '../assets/Dwight.png';
import Jim from '../assets/Jim.png';
import Kelly from '../assets/Kelly.png';
import Michael from '../assets/Michael.png';
import Pam from '../assets/Pam.png';
import Stanley from '../assets/Stanley.png';



export default class QuoteGenerator extends Component {
    render(){

        return (
            <div className='wrapper'>
                <CharacterCard name="Andy" image={Andy}/>
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
