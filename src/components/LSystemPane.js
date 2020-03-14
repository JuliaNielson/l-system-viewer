import React from 'react';
import ViewPane from './ViewPane';
import ControlPane from './ControlPane';

import SampleSystems from '../data/SampleSystems.json';

class LSystemPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            ruleState: SampleSystems.sampleSystems[0]
        }
        
        this.handleDrawButton = this.handleDrawButton.bind(this);
        this.addRuleHandler = this.addRuleHandler.bind(this);
        this.handleForm = this.handleForm.bind(this);
        this.editSymbolRule = this.editSymbolRule.bind(this);
        this.getSystemByDisplayName = this.getSystemByDisplayName.bind(this);
        this.loadSystem = this.loadSystem.bind(this);
    }

    render(){
        return (
            <div className = "app">
                <ControlPane 
                    handleDrawButton={this.handleDrawButton} 
                    ruleState={this.state.ruleState} 
                    formHandler={this.handleForm}
                    addRuleHandler={this.addRuleHandler}
                    loadSystem={this.loadSystem}
                ></ControlPane>
                <ViewPane ref="viewPane"
                    ruleState={this.state.ruleState}
                ></ViewPane>
            </div>
        );
    }

    handleDrawButton(){
        this.refs.viewPane.updateCanvas();
    }

    handleForm(e){
        e.persist();
        if (["symbol", "replacementRule"].includes(e.target.className)){
            this.editSymbolRule(e);
        }
        else if(["drawRuleType","drawRuleValue"].includes(e.target.className)){
            this.editDrawRule(e);
        }
        else if(["axiom", "iterations","facing"].includes(e.target.className)){
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

    editDrawRule(e){
        let rules = [...this.state.ruleState.symbolRules];
        let index = parseInt(e.target.id, 10);

        let changedRule = this.findRuleByIndex(rules, index);
        let drawRule = changedRule.drawRule;
        if ("drawRuleType"===e.target.className){
            let defaultValue = e.target.value === "Move" ? 10 : 90;
            drawRule = {
                type : e.target.value,
                value : defaultValue,
            }
        }
        else{
            let newValue = e.target.value ? parseInt(e.target.value, 10) : 0;
            drawRule = {
                ...drawRule,
                value: newValue
            }
        }

        changedRule = {
            ...changedRule,
            drawRule:drawRule
        }

        let newRules = rules;
        newRules.splice(index, 1, changedRule);
        this.setState(prevState => ({
            ruleState:{
                ...prevState.ruleState,
                symbolRules: newRules                    
            }}));
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

    findRuleByIndex(rules, index){
        const resultRule = rules.find((rule)=>{return rule.ruleIndex === index});
        return resultRule;
    }

    getSystemByDisplayName(e){
        const resultSystem = SampleSystems.sampleSystems.find((system)=> {return system.displayName === e.target.value});
        return resultSystem;
    }

    loadSystem(e){
        let ruleState = this.getSystemByDisplayName(e);
        this.setState({ruleState:ruleState}, this.handleDrawButton);
    }

    getNewRule(rules){
        let nextIndex = rules.length;
        return {
            ruleIndex: nextIndex,
            symbol: '',
            replacementRule:"",
            drawRule: {type:"None"}
        }
    }
}

export default LSystemPane;
