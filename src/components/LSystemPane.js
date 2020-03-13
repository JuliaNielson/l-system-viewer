import React from 'react';
import ViewPane from './ViewPane';
import ControlPane from './ControlPane';
import SampleSystems from '../data/SampleSystems.json'

class LSystemPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ruleState: SampleSystems.hilbertCurve,
            ruleString : ""
        }
        this.handleDrawButton = this.handleDrawButton.bind(this);
        this.addRuleHandler = this.addRuleHandler.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.editSymbolRule = this.editSymbolRule.bind(this);
    }

    componentDidMount(){
        document.body.classList.add("Body-format");
    }
    
    render(){
        return (
            <div className = "app">
                <ControlPane 
                    handleDrawButton={this.handleDrawButton} 
                    ruleState={this.state.ruleState} 
                    formHandler={this.handleForm}
                    addRuleHandler={this.addRuleHandler}
                ></ControlPane>
                <ViewPane ref="viewPane"
                    ruleString={this.state.ruleString} 
                    ruleState={this.state.ruleState}
                ></ViewPane>
                <SystemSelector>
                    
                </SystemSelector>
            </div>
        );
    }

    handleDrawButton(){
        
        this.refs.viewPane.updateCanvas();
    }

    findRuleByIndex(rules, index){
        const resultRule = rules.find((rule)=>{return rule.ruleIndex === index});
        return resultRule;
    }

    handleForm(e){
        e.persist();
        if (["symbol", "replacementRule", "drawRule"].includes(e.target.className)){
            this.editSymbolRule(e);
        }
        else if(["axiom", "iterations"].includes(e.target.className)){
            this.setState(prevState => ({
                ruleState:{
                    ...prevState.ruleState,
                [e.target.className] : e.target.value
                }
            }));
        }
    }

    editSymbolRule(e){
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
    //consider always having an empty new rule and doing away with the button
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
            replacementRule:"",
            drawRule:"None"
        }
    }
}

export default LSystemPane;
