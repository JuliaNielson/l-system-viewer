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

        this.newRule = this.newRule.bind(this);
        this.handleSymbolChange = this.handleSymbolChange.bind(this);
        this.handleRuleChange = this.handleRuleChange.bind(this);
        this.handleDrawSystem = this.handleDrawSystem.bind(this);
    }

    newRule(){
        let rules = this.state.symbolRules;
        rules.push({
            symbol: "",
            rule:""
        })
        this.setState(rules);
    }

    handleSymbolChange(index, symbolText){
        const values = [...this.state.symbolRules];
        values[index].symbol = symbolText;
        this.setState({
            symbolRules: values
        });
    }

    handleRuleChange(index, ruleText){
        const values = [...this.state.symbolRules];
        values[index].rule = ruleText;
        this.setState({
            symbolRules: values
        });
    }

    handleDrawSystem(){
        const formState = this.state;
        this.props.generateString(formState);
    }

    render(){
        const rules = [];
        this.state.symbolRules.forEach((rule, index)=>{
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