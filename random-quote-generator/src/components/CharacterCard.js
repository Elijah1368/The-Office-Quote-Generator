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
        if (!this.state.isHovered){
            imgClass = "unhover";
        } 
    
        return (
            <div className={imgClass}  onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                <ReactCardFlip  isFlipped={this.state.isFlipped} flipDirection="horizontal">
                    <div key='front' onClick={this.handleClick} >
                        <img alt={this.state.name} src={this.state.url} id='characterImage'></img>
                    </div>
                    <div id='back' key='back' onClick={this.handleClick}>
                        <h1>Dwight</h1>
                    </div>
                </ReactCardFlip>
            </div>
        );
    }

}

