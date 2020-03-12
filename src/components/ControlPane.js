import React, {Component} from 'react';
import '../App.css';
import SystemRulePane from './SystemRulePane';

class ControlPane extends Component {
    render(){
        return (
            <div className="Control-pane">
            <header className="App-header">
                <p style={{ textAlign: 'center'}}>
                Welcome to Nielson's Lindenmeyer System Viewer
                </p>
            </header>
            <p>Mouse over an input option to get an explanation of its purpose. For a greater understanding of Lindenmeyer Systems, see : (update with link to wikipedia)</p>
                <SystemRulePane
                    className = "System-rule-pane"
                    handleDrawButton={this.props.handleDrawButton} 
                    ruleState={this.props.ruleState} 
                    formHandler={this.props.formHandler} 
                    addRuleHandler={this.props.addRuleHandler}
                />
                
            </div>
        );
    }
}

export default ControlPane;
