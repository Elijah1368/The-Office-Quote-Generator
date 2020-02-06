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
        this.getStyle = this.getStyle.bind(this);
    }

    render(){    
        return (
            <div onClick = {this.handleClick} style={this.getStyle()} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                {this.getCard(this.state.isFlipped, this.state.name, this.state.url, this.state.quote)}
            </div>
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
        this.setState(prevState => (
            { isFlipped: !prevState.isFlipped}
        ));
    }    

    handleHover(){
        this.setState(prevState => ({
            isHovered: !prevState.isHovered
        }));
    }
    
    getStyle(){
        let style = {
            transition: 'transform .2s'
        }; 
        style = this.setStyle(style, this.state.isFlipped, this.state.isHovered, this.state.self);
        return style;
    }

    setStyle(style = {}, isFlipped, isHovered, self){
        if (isFlipped){
            style = this.setFlipStyle(style, self);
        } else if (isHovered) {
            style = this.setHoveredStyle(style);
        } else {
            style = this.setUnHoveredStyle(style);
        }
        return style;
    }

    setFlipStyle(style, self){ 
        return Object.assign(style, {
            zIndex: '1',
            position: 'absolute',
            transform: `translateX(calc(39vw - (${self.left}px))) translateY(calc(41vh - (${self.top}px)))`
        });
    }

    setHoveredStyle(style){
        return Object.assign(style, {
            transition: 'transform .2s',
            transform: 'scale(1.2)',
            zIndex: '1'
        });
    }

    setUnHoveredStyle(style){
        return Object.assign(style, { 
            transform: 'scale(1)' 
        });
    }

    getCard(isFlipped, alt, src, quote){
        return (
            <ReactCardFlip  isFlipped={isFlipped} flipDirection="horizontal">
                {this.getFrontCard(alt, src)}
                {this.getBackCard(quote)}
            </ReactCardFlip>
        );
    }

    getFrontCard(alt, src){
        return ( 
        <div key='front'>
            <img alt={alt} src={src} id='characterImage'></img>
        </div>
        );
    }

    getBackCard(quote){
        return (
        <div id='back' key='back'>
        </div>
        );
    }
}

