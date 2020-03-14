import React from 'react'

class Turtle extends React.Component{
    constructor(props)
    {   
        super(props);
        this.state = {
            lastX:0, 
            maxX:0, 
            minX:0,
            lastY:0, 
            maxY:0, 
            minY:0,
            facing:props.ruleState.facing
        }

        this.getPath = this.getPath.bind(this);
    }

    getAsRadians(degrees){
        return(degrees * Math.PI/180);
    }

    findDrawRuleBySymbol(rules, symbol){
        const resultRule = rules.find((rule)=>{return rule.symbol === symbol});
        return resultRule ? resultRule.drawRule : "";
    }

    getPath(ruleString){
        let result = new Path2D();
        let facing = this.state.facing;
        let lastX = this.state.lastX;
        let lastY = this.state.lastY;
        let maxX = this.state.maxX;
        let minX = this.state.minX;
        let maxY = this.state.maxY;
        let minY = this.state.minY;
        result.moveTo(lastX, lastY);
        ruleString.split("").forEach((charr) => {
            let nextInstruction = this.findDrawRuleBySymbol(this.props.ruleState.symbolRules, charr);
            if("None" === nextInstruction.type){
                //no-op
            }
            else if("AnglePos" === nextInstruction.type){
                facing += nextInstruction.value;
            }
            else if("AngleNeg" === nextInstruction.type){
                facing -= nextInstruction.value;
            }
            else if("Move" === nextInstruction.type){
                let moveLength = nextInstruction.value;

                let newX = lastX + (moveLength * Math.cos(this.getAsRadians(facing)));
                let newY = lastY + (moveLength * Math.sin(this.getAsRadians(facing)));

                result.lineTo(newX, newY);
                lastX = newX;
                lastY = newY;

                maxX = Math.max(newX, maxX);
                minX = Math.min(newX,minX);
                
                maxY = Math.max(newY, maxY);
                minY = Math.min(newY,minY);
                
            }
        });

        this.setState({
            facing:facing, 
            lastX:lastX, 
            lastY:lastY, 
            maxX:maxX, 
            minX:minX, 
            maxY:maxY, 
            minY:minY
        });

        minX = minX - 20;
        minY--;
        let width = maxX - minX + 20 ;
        let height = maxY - minY + 20;

        return {result, minX, minY, width, height};
    }

}

export default Turtle;