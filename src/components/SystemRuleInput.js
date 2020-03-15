import React, {Component} from 'react';
import DescriptionStrings from '../data/DescriptionStrings.json'

class SystemRuleInput extends Component{

    render(){
        let ruleTypes =["Move", "AnglePos", "AngleNeg", "SaveLocation", "LoadLocation", "None"]
        let ruleSelections = [];
        ruleTypes.forEach((ruleType)=>{
            ruleSelections.push(
              <option key={ruleType} value={ruleType}>{ruleType}</option>  
            );
        });
        let ruleValueContent = ["Move", "AnglePos", "AngleNeg"].includes(this.props.rule.drawRule.type) 
        ?
            <input 
                type="Number" 
                className="drawRuleValue" 
                title={DescriptionStrings.drawRuleParameterHeader}
                id={this.props.index}
                value={this.props.rule.drawRule.value} 
                onChange={this.props.handleChange}
            />
        :
             "" ; 

        return(
            <tr> 
                <td> 
                    <input 
                        type="Text" 
                        className="symbol" 
                        maxLength="1" 
                        size="2"
                        id={this.props.index}
                        title={DescriptionStrings.symbol} 
                        value={this.props.rule.symbol} 
                        onChange = {this.props.handleChange}
                    />
                </td>
                <td> 
                    <input 
                        type="Text" 
                        className="replacementRule" 
                        title={DescriptionStrings.replacementRule} 
                        id={this.props.index} 
                        value={this.props.rule.replacementRule} 
                        onChange = {this.props.handleChange}
                    />
                </td>

                <td> 
                    <select 
                        className="drawRuleType" 
                        id={this.props.index} 
                        title={DescriptionStrings.drawRule} 
                        value={this.props.rule.drawRule.type} 
                        onChange={this.props.handleChange}>
                            {ruleSelections}
                    </select>    
                </td>
                <td>
                    {ruleValueContent}
                </td>
            </tr>
        );
    }
}

export default SystemRuleInput;