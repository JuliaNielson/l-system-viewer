import React, {Component} from 'react';

class SystemRuleInput extends Component{

    render(){
        let ruleTypes =["Move", "AnglePos", "AngleNeg", "None"]
        let ruleSelections = [];
        ruleTypes.forEach((ruleType)=>{
            ruleSelections.push(
              <option key={ruleType} value={ruleType}>{ruleType}</option>  
            );
        });

        return(
            <tr>
                <td>
                    <input type="Text" className="symbol" id={this.props.index} value={this.props.rule.symbol} onChange = {this.props.handleChange}/>
                </td>
                <td>
                    <input type="Text" className="replacementRule" id={this.props.index} value={this.props.rule.replacementRule} onChange = {this.props.handleChange}/>
                </td>
                <td>
                    <select className="drawRule" id={this.props.index} value={this.props.rule.drawRule}>
                        {ruleSelections}
                    </select>
                </td>
            </tr>
        );
    }
}

export default SystemRuleInput;