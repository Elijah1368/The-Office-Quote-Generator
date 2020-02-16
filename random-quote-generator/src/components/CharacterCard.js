import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactCardFlip from 'react-card-flip';
import '../stylesheets/style.css';

export default class CharacterCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            isFlipped: false,
            isHovered: false,
            url: props.image,
            name: props.name,
            quotes: props.quotes,
            self: null
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
        this.getFlipStyle = this.getFlipStyle.bind(this);
        this.getHoverStyle = this.getHoverStyle.bind(this);
        this.getZIndex = this.getZIndex.bind(this);
    }

    render(){
        return (            
            <ReactCardFlip  isFlipped={this.state.isFlipped} containerStyle={{...this.getZIndex(), ...this.getFlipStyle()}} flipDirection="horizontal">
                {this.getFrontCard(this.state.name, this.state.url)}
                {this.getBackCard(this.state.quote)}
            </ReactCardFlip>
        );
    }


    componentDidMount(){
        this.setState(prevState => ({
            self: ReactDOM.findDOMNode(this).getBoundingClientRect(),
            quote: prevState.quotes[Math.floor(Math.random() * prevState.quotes.length)]
        }));
    }
    
    handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ 
                isFlipped: !prevState.isFlipped
            }));
    }    

    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered,
            zIndex: -prevState.zIndex
        }));
    }

    getZIndex(){
        if (this.state.isHovered || this.state.isFlipped){
            return {
                zIndex:1};
        } else {
            return {};
        }
    }
    
    getHoverStyle(){
        if (this.state.isHovered && !this.state.isFlipped) {
            return  {
                transition: 'transform .2s',
                transform: 'scale(1.2)',
            }
        } else {
            return {
                transition: 'transform .2s', 
                transform: 'scale(1)' 
            }
        }
    }

    getFlipStyle(){
        if (this.state.isFlipped){
            return {
                position: 'absolute',
                transform: `scale(2)`,
                animation: 'center 2s forwards'
            };
        } else {
            return {};
        }
    }


    getFrontCard(alt, src){
        return ( 
        <div key='front' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} style={this.getHoverStyle()} onClick={this.handleClick}>
            <img alt={alt} src={src} id='characterImage'></img>
        </div>
        );
    }

    getBackCard(quote){
        return (
        <div id='back' key='back' onClick={this.handleClick}>
        </div>
        );
    }
}

