import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import SystemRulePane from './SystemRulePane';

class ControlPane extends Component {
    render(){
        return (
            <div className="Control-pane">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p style={{ textAlign: 'center'}}>
                Welcome to Nielson's Lindenmeyer System Viewer
                </p>
                <SystemRulePane generateString={this.props.generateString}/>
                
            </header>
            </div>
        );
    }
}

export default ControlPane;
