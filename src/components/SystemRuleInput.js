import React, {Component} from 'react';

class SystemRuleInput extends Component{
    constructor(props){
        super(props);
        this.handleSymbolChange = this.handleSymbolChange.bind(this);
        this.handleRuleChange = this.handleRuleChange.bind(this);
    }

    handleRuleChange(e){
        this.props.handleRuleChange(this.props.index, e.target.value);
    }

    handleSymbolChange(e){
        this.props.handleSymbolChange(this.props.index, e.target.value);
    }

    render(){
        return(
            <tr>
                <td>
                    <input type="Text" value={this.props.symbol} onChange = {this.handleSymbolChange}/>
                </td>
                <td>
                    <input type="Text" value={this.props.rule} onChange = {this.handleRuleChange}/>
                </td>
            </tr>
        );
    }
}

export default SystemRuleInput;