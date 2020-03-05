import React from 'react';
import '../App.css';

class ViewPane extends React.Component {    
    render(){
        return (
            <div className="View-pane">
                <text>{this.props.value}</text>
            </div>
        );
    }
}

export default ViewPane;
