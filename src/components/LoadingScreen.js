import React, {Component} from 'react';
import '../stylesheets/loadingScreen.css';

export default class Loading extends Component {
    render(){
        return (
            <div className="loading-container">
                <div className="loader-dzg" />
            </div>
        );
    }
}