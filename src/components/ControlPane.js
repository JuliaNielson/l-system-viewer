import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';

class ControlPane extends Component {
    render(){
        return (
            <div className="Control-pane">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
                >
                Learn React
                </a>
                <button onClick={this.props.testClick}>Test Button</button>
            </header>
            </div>
        );
    }
}

export default ControlPane;
