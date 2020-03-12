import React from 'react';
import '../App.css';
import Turtle from '../Turtle/Turtle';

class ViewPane extends React.Component {
    constructor(props){
        //props.ruleState;
        super(props);
        this.state = {
            message: ""
        }

        this.updateCanvas = this.updateCanvas.bind(this);
        this.generateString = this.generateString.bind(this);
    }
    
    componentDidMount(){
        this.updateCanvas();
    }
    updateCanvas(){
        let ruleString = this.generateString();

        const canvas = this.refs.canvas;
        const ctx = canvas.getContext('2d');
        
        if (ruleString)
        {
            let turtle = new Turtle(this.props);
            let p = turtle.getPath(ruleString);
            canvas.width = p.width;
            canvas.height = p.height;
            ctx.translate(p.minX*-1, p.minY*-1);
            ctx.stroke(p.result);
        }
        
    }
    
    // fitToContainer(canvas){
    //     const viewDiv = document.getElementById("viewPane");
    //     canvas.width = viewDiv.offsetWidth;
    //     canvas.height = viewDiv.offsetHeight;

    // }

    findReplacementRuleBySymbol(rules, symbol){
        const resultRule = rules.find((rule)=>{return rule.symbol === symbol});
        return resultRule ? resultRule.replacementRule : symbol;
    }
    
    generateString(){
        const rules = this.props.ruleState.symbolRules;
        const axiom = this.props.ruleState.axiom;
        const iterations = parseInt(this.props.ruleState.iterations);
        let resultString = axiom;
        for (let ii = 0; ii < iterations; ii++) {
            let workString = "";
            if (resultString.length < 250000)
            {
                resultString.split("").forEach(charr => {
                    workString += this.findReplacementRuleBySymbol(rules, charr);
                });

                resultString = workString;
            }
            else{
                this.setState({
                    message: "That drawing may cause your browser to slow down, so it was canceled instead. Try using a smaller value for the iterations."
                });
                return axiom;
            }
        }

        this.setState({
            ruleString: resultString,
            message: ""
        });

        return resultString;
    }
    
    render(){
        let breakk = this.state.message === null ? "" : <br/>;
        return (
            <div className="View-pane" id="viewPane">
                {this.state.message}
                {breakk}
                <canvas ref="canvas">
                Your browser does not support the HTML5 canvas tag or you're looking at a search engine preview or something.
                </canvas>
            </div>
        );
    }
}

export default ViewPane;
