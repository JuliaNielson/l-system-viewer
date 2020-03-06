import React from 'react';
import ViewPane from './ViewPane';
import ControlPane from './ControlPane';

class LSystemPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0,
            ruleString: ""
        }

        this.generateString = this.generateString.bind(this);
    }
    
    render(){
        return (
            <div className = "app">
                <ControlPane generateString={this.generateString}></ControlPane>
                <ViewPane value={this.state.counter} ruleString={this.state.ruleString}></ViewPane>
            </div>
        );
    }

    generateString(formState){
        const rules = formState.symbolRules;
        const axiom = formState.axiom;
        const iterations = parseInt(formState.iterations);
        let resultString = axiom;
        for (let ii = 0; ii < iterations; ii++) {
            let workString = "";
            resultString.split("").forEach(charr => {
                
                workString += this.findRuleBySymbol(rules, charr);
            });
            resultString = workString;
        }

        this.setState({
            ruleString: resultString
        });
    }

    findRuleBySymbol(rules, symbol){
        const resultRule = rules.find((rule)=>{return rule.symbol === symbol});
        return resultRule ? resultRule.rule : symbol;
    }
}

export default LSystemPane;
