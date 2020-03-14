import React, {Component} from 'react';
import DescriptionStrings from '../data/DescriptionStrings.json'

class SystemRuleInput extends Component{

    render(){
        let ruleTypes =[{
            type:"Move",val:10
        },{
            type:"AnglePos",val:90
        },{
            type:"AngleNeg",val:90
        },{
            type:"None"
        }]
        let ruleSelections = [];
        ruleTypes.forEach((rule)=>{
            ruleSelections.push(
              <option key={rule} value={rule.type}>{rule.type}</option>  
            );
        });
        let ruleValueContent = this.props.rule.drawRule.type==="None" ? "":
            <input type="Text" 
            className="drawRuleValue" 
            title={DescriptionStrings.drawRuleParameterHeader}
            id={this.props.index}
            value={this.props.rule.drawRule.value} 
            onChange={this.props.handleChange}/>;
        

        return(
            <tr> 
                <td> 
                    <input type="Text" 
                    className="symbol" 
                    maxLength="1" 
                    id={this.props.index}
                    title={DescriptionStrings.symbol} 
                    value={this.props.rule.symbol} 
                    onChange = {this.props.handleChange}/>
                </td>
                <td> 
                    <input type="Text" 
                    className="replacementRule" 
                    title={DescriptionStrings.replacementRule} 
                    id={this.props.index} 
                    value={this.props.rule.replacementRule} 
                    onChange = {this.props.handleChange}/>
                </td>

                <td> 
                    <select className="drawRuleType" 
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