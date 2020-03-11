import React from 'react'

class Turtle extends React.Component{
    constructor(props)
    {   
        super(props);
        // this.state = {
        //     lastX:0, 
        //     maxX:0, 
        //     minX:0,
        //     lastY:0, 
        //     maxY:0, 
        //     minY:0,
        //     facing:-90
        // }
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
        this.getMinX = this.getMinX.bind(this);
        this.getMinY = this.getMinY.bind(this);
    }

    getAsRadians(degrees){
        return(degrees * Math.PI/180);
    }

    findDrawRuleBySymbol(rules, symbol){
        const resultRule = rules.find((rule)=>{return rule.symbol === symbol});
        return resultRule ? resultRule.drawRule : "";
    }

    getMinX(){
        return this.state.minX;
    }
    getMinY(){
        return this.state.minY;
    };

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
            let nextType = this.findDrawRuleBySymbol(this.props.ruleState.symbolRules, charr);
            if("None" === nextType){
                //no-op
            }
            else if("AnglePos" === nextType){
                facing += 90;
            }
            else if("AngleNeg" === nextType){
                facing -= 90;
            }
            else if("Move" === nextType){
                let newX = lastX + (10 * Math.cos(this.getAsRadians(facing)));
                let newY = lastY + (10 * Math.sin(this.getAsRadians(facing)));

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
            facing:facing, lastX:lastX, lastY:lastY, maxX:maxX, minX:minX, maxY:maxY, minY:minY
        });
        minX--;
        minY--;
        return {result, minX, minY};
    }

}

export default Turtle;