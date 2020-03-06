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
                <ControlPane testClick={()=> this.testClick()} generateString={this.generateString}></ControlPane>
                <ViewPane value={this.state.counter} ruleString={this.state.ruleString}></ViewPane>
            </div>
        );
    }

    testClick()
    {
        let count = this.state.counter;
        count = count+1;
        this.setState({counter:count});
        alert("Test Message" + count);
    }

    generateString(resultString){
        this.setState({
            ruleString: resultString
        });
    }
}

export default LSystemPane;
