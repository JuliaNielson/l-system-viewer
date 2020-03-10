import React from 'react';
import '../App.css';
import Turtle from '../Turtle/Turtle';

class ViewPane extends React.Component {
    constructor(props){
        super(props);
        this.turtle = new Turtle(props);
        this.updateCanvas = this.updateCanvas.bind(this);
    }
    
    componentDidMount(){
        this.updateCanvas("");
    }
    updateCanvas(ruleString){
        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        this.fitToContainer(canvas);
        let p = this.turtle.getPath(ruleString);
        ctx.stroke(p);
    }

    fitToContainer(canvas){
        const viewDiv = document.getElementById("viewPane");
        canvas.width = viewDiv.offsetWidth;
        canvas.height = viewDiv.offsetHeight;

    }
    
    render(){
        return (
            <div className="View-pane" id="viewPane">
                {this.props.ruleString}
                <br/>
                <canvas ref="canvas">
                Your browser does not support the HTML5 canvas tag or you're looking at a search engine preview or something.
                </canvas>
            </div>
        );
    }
}

export default ViewPane;
