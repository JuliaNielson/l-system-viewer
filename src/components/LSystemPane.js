import React from 'react';
import ViewPane from './ViewPane';
import ControlPane from './ControlPane';

class LSystemPane extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            counter: 0
        }
    }
    
    render(){
        return (
            <div className = "app">
                <ControlPane testClick={()=> this.testClick()}></ControlPane>
                <ViewPane value={this.state.counter}></ViewPane>
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
}

export default LSystemPane;
