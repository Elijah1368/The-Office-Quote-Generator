import React, {Component} from 'react';
import '../stylesheets/style.css';

export default class CharacterCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            front: true,
            url: props.image,
            name: props.name
        };
        
        this.front = React.createRef();
        this.back = React.createRef();
    }

    


    render(){
        let image = new Image();
        image.src = this.state.url;
        let styles = {
            width: image.width / 42 + "vw",
            height: image.height / 42 + "vw"
        };
       
        return (

            <div>
                <div className='characterImage' ref ={this.front} onClick={this.flip.bind(this)}>
                    <img alt={this.state.name} src={this.state.url} style={styles}></img>
                </div>
                <div className='characterQuote' ref ={this.back} onClick={this.flip.bind(this)}>
                    <h1>Dwight</h1>
                </div>
            </div>
 
        );
    }
    
    flip(){
        if (this.state.front){
            this.front.current.classList.toggle("flipped");
            this.back.current.classList.toggle("flipped");
        } else {
            this.back.current.classList.toggle("flipped");
            this.back.current.classList.toggle("flipped");
        }

        this.setState({
            front: !this.state.front,
            url: this.state.url,
            name: this.state.name
        })
       
    }
}

