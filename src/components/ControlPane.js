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
                <SystemRulePane 
                    handleDrawButton={this.props.handleDrawButton} 
                    ruleState={this.props.ruleState} 
                    formHandler={this.props.formHandler} 
                    addRuleHandler={this.props.addRuleHandler}
                />
                
            </header>
            </div>
        );
    }
}

export default ControlPane;
