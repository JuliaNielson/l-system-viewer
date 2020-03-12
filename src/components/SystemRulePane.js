import React, {Component} from 'react';
import SystemRuleInput from './SystemRuleInput';

class SystemRulePane extends Component{
    constructor(props){
        super(props)
        this.handleDrawSystem = this.handleDrawSystem.bind(this);
    }

    handleDrawSystem(){
        this.props.handleDrawButton();
    }

    render(){
        const rules = [];
        this.props.ruleState.symbolRules.forEach((rule)=>{
            rules.push(
                <SystemRuleInput 
                    key={rule.ruleIndex} 
                    index={rule.ruleIndex} 
                    rule={rule} 
                    handleChange={this.props.formHandler}
                />
            );

        });

        const iterationsDropDown = [];
        for (let ii = 1; ii <= 20; ii++) {
            iterationsDropDown.push(
                <option key={ii} value={ii}>{ii}</option>
            );
            
        }
        let axiomDescription = "One or more characters used to define the starting point of the system.";
        let iterationDescription = "A number defining how many times to run the defined string through the replacement process.";
        let symbolDescription = "A single character identifing a replacement rule and a drawing rule";

        return (
            <div> 
            <table align="center">
                <tbody>                
                    <tr>
                        <td title={axiomDescription}>Axiom</td>
                        <td title={iterationDescription}>Iterations</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="Text" className="axiom" title={axiomDescription} value={this.props.ruleState.axiom} onChange={this.props.formHandler}/>
                        </td>
                        <td>
                            <select title={iterationDescription} value={this.props.ruleState.iterations} className="iterations" onChange={this.props.formHandler}>
                                {iterationsDropDown}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td title={symbolDescription}>
                            Symbol
                        </td>
                        <td>
                            Rule
                        </td>
                    </tr>

                    {rules}

                    <tr>
                        <td>
                            <button onClick={this.props.addRuleHandler}>New Rule</button>
                        </td>
                        <td>
                            <button onClick={this.handleDrawSystem}>Draw System</button>
                        </td>
                    </tr>
                </tbody>

            </table>

            
            
            </div>
        );
    }
}

export default SystemRulePane;