import React, {Component} from 'react';
import '../App.css';
import SystemRulePane from './SystemRulePane';
import SystemSelector from './SystemSelector';

class ControlPane extends Component {
    render(){
        return (
            <div className="Control-pane">
                <header className="App-header">
                    <p style={{ textAlign: 'center'}}>
                        Welcome to Nielson's Lindenmayer System Viewer
                    </p>
                </header>
                <p>
                    A Lindenmayer System, or L-System, is a system for generating strings that can be interpreted as geometric shapes.
                </p><p>
                    Mouse over an input option to get an explanation of its purpose. For a greater understanding of L-Systems, see <a href="https://en.wikipedia.org/wiki/L-system">Wikipedia</a>
                </p>
                <SystemRulePane
                    className = "System-rule-pane"
                    handleDrawButton={this.props.handleDrawButton} 
                    ruleState={this.props.ruleState} 
                    formHandler={this.props.formHandler} 
                    addRuleHandler={this.props.addRuleHandler}
                    forceGenerate={this.props.forceGenerate}
                />
                
                <SystemSelector
                    displayName = {this.props.ruleState.displayName}
                    loadSystem={this.props.loadSystem}
                ></SystemSelector>
                
            </div>
        );
    }
}

export default ControlPane;
