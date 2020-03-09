import React, {Component} from 'react';

class SystemRuleInput extends Component{

    render(){
        return(
            <tr>
                <td>
                    <input type="Text" className="symbol" id={this.props.index} value={this.props.symbol} onChange = {this.props.handleChange}/>
                </td>
                <td>
                    <input type="Text" className="replacementRule" id={this.props.index} value={this.props.rule} onChange = {this.props.handleChange}/>
                </td>
            </tr>
        );
    }
}

export default SystemRuleInput;