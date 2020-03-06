import React from 'react';
import '../App.css';

class ViewPane extends React.Component {    
    render(){
        return (
            <div className="View-pane">
                {this.props.ruleString}
            </div>
        );
    }
}

export default ViewPane;
