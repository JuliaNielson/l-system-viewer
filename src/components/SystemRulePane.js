import React, {Component} from 'react';
import SystemRuleInput from './SystemRuleInput';

class SystemRulePane extends Component{
    constructor(props){
        super(props)
        this.state = {
            systemRules: [{
                symbol: 'a',
                rule:"ab"
            },{
                symbol: 'b',
                rule:"ba"
            }],
            axiom : "",
            iterations : 4
        }

        this.newRule = this.newRule.bind(this);
        this.handleSymbolChange = this.handleSymbolChange.bind(this);
        this.handleRuleChange = this.handleRuleChange.bind(this);
        this.handleDrawSystem = this.handleDrawSystem.bind(this);
    }

    newRule(){
        let rules = this.state.systemRules;
        rules.push({
            symbol: "",
            rule:""
        })
        this.setState(rules);
    }

    handleSymbolChange(index, symbolText){
        const values = [...this.state.systemRules];
        values[index].symbol = symbolText;
        this.setState({
            systemRules: values
        });
    }

    handleRuleChange(index, ruleText){
        const values = [...this.state.systemRules];
        values[index].rule = ruleText;
        this.setState({
            systemRules: values
        });
    }

    handleDrawSystem(){
        const fish = "fish";
        this.props.generateString(fish);
    }

    render(){
        const rules = [];
        this.state.systemRules.forEach((rule, index)=>{
            rules.push(
                <SystemRuleInput 
                    key={index} 
                    index={index} 
                    symbol={rule.symbol} 
                    rule={rule.rule} 
                    handleSymbolChange={this.handleSymbolChange} 
                    handleRuleChange={this.handleRuleChange}
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
                            <button onClick={this.newRule}>New Rule</button>
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