import React, {Component} from 'react';
import SystemRuleInput from './SystemRuleInput';

class SystemRulePane extends Component{
    constructor(props){
        super(props)
        this.state = {
            symbolRules: [{
                symbol: 'a',
                rule:"ab"
            },{
                symbol: 'b',
                rule:"ba"
            }],
            axiom : "a",
            iterations : 4
        }

        this.handleDrawSystem = this.handleDrawSystem.bind(this);
    }

    handleDrawSystem(){
        const formState = this.props.ruleState;
        this.props.generateString(formState);
    }

    render(){
        const rules = [];
        this.props.ruleState.symbolRules.forEach((rule)=>{
            rules.push(
                <SystemRuleInput 
                    key={rule.index} 
                    index={rule.ruleIndex} 
                    symbol={rule.symbol} 
                    rule={rule.replacementRule} 
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
                            <input type="Text" value={this.state.axiom} onChange={(e)=>this.setState({axiom : e.target.value})}/>
                        </td>
                        <td>
                            <select value={this.state.iterations} onChange={(e)=>this.setState({iterations:e.target.value})}>
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