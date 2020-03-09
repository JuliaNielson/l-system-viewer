import React from 'react';
import ViewPane from './ViewPane';
import ControlPane from './ControlPane';

class LSystemPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ruleState: {
                symbolRules: [{
                    ruleIndex: 0,
                    symbol: 'a',
                    replacementRule:"ab"
                },{
                    ruleIndex: 1,
                    symbol: 'b',
                    replacementRule:"ba"
                }],
                axiom : "a",
                iterations : 4
            },
            resultString : ""
        }
        this.generateString = this.generateString.bind(this);
        this.addRuleHandler = this.addRuleHandler.bind(this);
        this.handleForm = this.handleForm.bind(this);
    }

    
    
    render(){
        return (
            <div className = "app">
                <ControlPane 
                    generateString={this.generateString} 
                    ruleState={this.state.ruleState} 
                    formHandler={this.handleForm}
                    addRuleHandler={this.addRuleHandler}
                ></ControlPane>
                <ViewPane 
                    value={this.state.counter} 
                    ruleString={this.state.ruleString} 
                    ruleState={this.state.ruleState}
                ></ViewPane>
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
                
                workString += this.findReplacementRuleBySymbol(rules, charr);
            });
            resultString = workString;
        }

        this.setState({
            ruleString: resultString
        });
    }

    findReplacementRuleBySymbol(rules, symbol){
        const resultRule = rules.find((rule)=>{return rule.symbol === symbol});
        return resultRule ? resultRule.replacementRule : symbol;
    }
    findRuleByIndex(rules, index){
        const resultRule = rules.find((rule)=>{return rule.ruleIndex === index});
        return resultRule;
    }

    handleForm(e){
        if (["symbol", "replacementRule", "drawRule"].includes(e.target.className)){
            let rules = [...this.state.ruleState.symbolRules];
            let index = parseInt(e.target.id, 10);

            let changedRule = this.findRuleByIndex(rules, index);
            changedRule = {
                ...changedRule,
                [e.target.className]:e.target.value
            }

            let newRules = rules;
            newRules.splice(index, 1, changedRule);
            this.setState(prevState => ({
                ruleState:{
                    ...prevState.ruleState,
                    symbolRules: newRules                    
                }
            }));
        }
    }

    addRuleHandler(e){
        let rules = this.state.ruleState.symbolRules;
        let newRule = this.getNewRule(rules);
        rules.push(newRule);

        this.setState(prevState => ({
            ruleState:{
                ...prevState.ruleState,
                    symbolRules : rules
            }
        }));
    }

    getNewRule(rules){
        let nextIndex = rules.length;
        return {
            ruleIndex: nextIndex,
            symbol: '',
            replacementRule:""
        }
    }
}

export default LSystemPane;
