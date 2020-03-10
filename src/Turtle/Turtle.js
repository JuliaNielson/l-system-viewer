import React from 'react'

class Turtle extends React.Component{
    constructor(props)
    {   
        super(props);
        this.state = {lastX:300,lastY:300,facing:-90}
        

        this.getPath = this.getPath.bind(this);
    }

    getAsRadians(degrees){
        return(degrees * Math.PI/180);
    }

    // getPath(){
    //     let p = new Path2D();
    //     p.moveTo(30, 30);
    //     p.lineTo(200,200);
    //     p.arc(200,200, 50, 0, Math.PI);
    //     return p;
    // }

    findDrawRuleBySymbol(rules, symbol){
        const resultRule = rules.find((rule)=>{return rule.symbol === symbol});
        return resultRule ? resultRule.drawRule : "";
    }

    getPath(ruleString){
        let result = new Path2D();
        let facing = this.state.facing;
        let lastX = this.state.lastX;
        let lastY = this.state.lastY;
        result.moveTo(300,300);
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
            }
        this.setState({facing:facing, lastX:lastX, lastY:lastY});

        });


        return result;
    }

}

export default Turtle;