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
                            <input 
                                type="Number" 
                                max={20} min={0}  
                                title={DescriptionStrings.iterations} 
                                value={this.props.ruleState.iterations} 
                                className="iterations" 
                                onChange={this.props.formHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="Text" 
                                className="axiom" 
                                title={DescriptionStrings.axiom} 
                                value={this.props.ruleState.axiom} 
                                onChange={this.props.formHandler}
                            />
                        </td>
                        <td>
                            <input 
                                type="Number" 
                                max={360} 
                                min={-360} 
                                className="facing"
                                title={DescriptionStrings.facing} 
                                value={this.props.ruleState.facing} 
                                onChange={this.props.formHandler}
                            />
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
                            <button onClick={this.props.handleDrawButton}>Draw System</button><br/>
                            
                            <input type="Checkbox" className="forceGenerate" id="forceGenerate" onChange={this.props.formHandler} checked={this.props.forceGenerate}/>
                            <label for="forceGenerate">Force large system</label>
                            
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