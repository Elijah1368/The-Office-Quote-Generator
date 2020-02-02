import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
import '../stylesheets/style.css';

export default class CharacterCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false,
            isHovered: false,
            url: props.image,
            name: props.name
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => (
            { isFlipped: !prevState.isFlipped }
        ));
    }    
    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }

    render(){
        let imgClass = "hover";
        if (!this.state.isHovered || this.state.isFlipped){
            imgClass = "unhover";
        } 
        let styles = {
            width: 686 / 40 + 'vw',
            height: 820 / 40 + 'vw'
        };
        //console.log(`width:${this.state.width} height:${this.state.height}`);
        return (
            <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
                <div key='front' onClick={this.handleClick} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                    <img className={imgClass} alt={this.state.name} src={this.state.url} style = {styles}></img>
                </div>
                <div id='back' key='back' onClick={this.handleClick}>
                    <h1>Dwight</h1>
                </div>
            </ReactCardFlip>
 
        );
    }

}

