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
                    key={rule.index} 
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


        return (
            <div>
            <table>
                <tbody>                
                    <tr>
                        <td>Axiom</td>
                        <td>Iterations</td>
                    </tr>
                    <tr>
                        <td>
                            <input type="Text" value={this.props.ruleState.axiom} className="axiom" onChange={this.props.formHandler}/>
                        </td>
                        <td>
                            <select value={this.props.ruleState.iterations} className="iterations" onChange={this.props.formHandler}>
                                {iterationsDropDown}
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
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