import React from 'react'

class Turtle extends React.Component{
    constructor(props)
    {   
        super(props);
        this.state = {
            lastX:320, 
            maxX:320, 
            minX:320,
            lastY:320, 
            maxY:320, 
            minY:320,
            facing:-90
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

                if (newX > maxX){
                    maxX = newX;
                }
                else if(newX<minX){
                    minX = newX;
                }
                if(newY > maxY){
                    maxY = newY;
                }
                else if(newY < minY){
                    minY = newY;
                }
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