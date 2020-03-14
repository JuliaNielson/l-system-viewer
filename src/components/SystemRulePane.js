import React, {Component} from 'react';
import SystemRuleInput from './SystemRuleInput';
import DescriptionStrings from '../data/DescriptionStrings.json'


class SystemRulePane extends Component{
    render(){
        const ruleInputs = [];
        this.props.ruleState.symbolRules.forEach((rule)=>{
            ruleInputs.push(
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

        return (
            <div> 
            <table align="center">
                <tbody>                
                    <tr>
                        <td title={DescriptionStrings.iterations}>Iterations</td>
                        <td title={DescriptionStrings.axiom}>Axiom</td>
                        <td title={DescriptionStrings.facing}>Initial Facing</td>
                    </tr>
                    <tr>
                        <td>
                            <select title={DescriptionStrings.iterations} value={this.props.ruleState.iterations} className="iterations" onChange={this.props.formHandler}>
                                {iterationsDropDown}
                            </select>
                        </td>
                        <td>
                            <input type="Text" className="axiom" title={DescriptionStrings.axiom} value={this.props.ruleState.axiom} onChange={this.props.formHandler}/>
                        </td>
                        <td>
                            <input type="Number" max={360} min={-360} className="facing" title={DescriptionStrings.facing} value={this.props.ruleState.facing} onChange={this.props.formHandler}/>
                        </td>
                    </tr>
                    <tr>
                        <td title={DescriptionStrings.symbol}>
                            Symbol
                        </td>
                        <td title={DescriptionStrings.replacementRule}>
                            Replacement Rule
                        </td>
                        <td title={DescriptionStrings.drawRule}>
                            Draw Rule
                        </td>
                        <td title={DescriptionStrings.drawRuleParameterHeader}>
                            Draw Rule <br/> Parameter
                        </td>
                    </tr>

                    {ruleInputs}

                    <tr>
                        <td>

                        </td>
                        <td>
                            <button onClick={this.props.handleDrawButton}>Draw System</button>
                        </td>
                        <td>
                            <button onClick={this.props.addRuleHandler}>New Rule</button>
                        </td>
                    </tr>
                </tbody>

            </table>

            
            
            </div>
        );
    }
}

export default SystemRulePane;