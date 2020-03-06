import React from 'react';
import '../App.css';

class ViewPane extends React.Component {    
    render(){
        return (
            <div className="View-pane">
                <text value = {this.props.ruleString} readOnly>
                    {this.props.ruleString}
                </text>
            </div>
        );
    }
}

export default ViewPane;
