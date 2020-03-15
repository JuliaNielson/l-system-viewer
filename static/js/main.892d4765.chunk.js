(this["webpackJsonpl-system-viewer"]=this["webpackJsonpl-system-viewer"]||[]).push([[0],[,,,function(e){e.exports=JSON.parse('{"axiom":"One or more characters used to define the starting point of the system.","iterations":"A number defining how many times to run the defined string through the replacement process.","facing":"The initial angle of the system (in degrees)","symbol":"A single character identifing a replacement rule and a drawing rule.","replacementRule":"A string that replaces a given symbol when iterating.","drawRule":"What the drawing program does when it reads this character.","drawRuleParameterHeader":"How far to move or turn (in degrees)"}')},,,,,,,function(e){e.exports=JSON.parse('{"sampleSystems":[{"displayName":"Hilbert Curve","symbolRules":[{"ruleIndex":0,"symbol":"a","replacementRule":"ebcdacadcbe","drawRule":{"type":"None"}},{"ruleIndex":1,"symbol":"b","replacementRule":"dacebcbecad","drawRule":{"type":"None"}},{"ruleIndex":2,"symbol":"c","replacementRule":"c","drawRule":{"type":"Move","value":10}},{"ruleIndex":3,"symbol":"d","replacementRule":"d","drawRule":{"type":"AnglePos","value":90}},{"ruleIndex":4,"symbol":"e","replacementRule":"e","drawRule":{"type":"AngleNeg","value":90}}],"axiom":"a","iterations":5,"facing":-90},{"displayName":"Koch Curve","symbolRules":[{"ruleIndex":0,"symbol":"F","replacementRule":"FLFRFRFLF","drawRule":{"type":"Move","value":10}},{"ruleIndex":1,"symbol":"L","replacementRule":"L","drawRule":{"type":"AngleNeg","value":90}},{"ruleIndex":2,"symbol":"R","replacementRule":"R","drawRule":{"type":"AnglePos","value":90}}],"axiom":"F","iterations":4,"facing":0},{"displayName":"Dragon curve","symbolRules":[{"ruleIndex":0,"symbol":"F","replacementRule":"F","drawRule":{"type":"Move","value":10}},{"ruleIndex":1,"symbol":"X","replacementRule":"XRYFR","drawRule":{"type":"None"}},{"ruleIndex":2,"symbol":"Y","replacementRule":"LFXLY","drawRule":{"type":"None"}},{"ruleIndex":3,"symbol":"R","replacementRule":"R","drawRule":{"type":"AnglePos","value":90}},{"ruleIndex":4,"symbol":"L","replacementRule":"L","drawRule":{"type":"AngleNeg","value":90}}],"axiom":"FX","iterations":10,"facing":-90},{"displayName":"Binary Tree","symbolRules":[{"ruleIndex":0,"symbol":"A","replacementRule":"AA","drawRule":{"type":"Move","value":10}},{"ruleIndex":1,"symbol":"B","replacementRule":"A[LB]RB","drawRule":{"type":"Move","value":10}},{"ruleIndex":2,"symbol":"[","replacementRule":"[","drawRule":{"type":"SaveLocation"}},{"ruleIndex":3,"symbol":"]","replacementRule":"]","drawRule":{"type":"LoadLocation"}},{"ruleIndex":4,"symbol":"R","replacementRule":"R","drawRule":{"type":"AnglePos","value":45}},{"ruleIndex":5,"symbol":"L","replacementRule":"L","drawRule":{"type":"AngleNeg","value":45}}],"axiom":"B","iterations":7,"facing":-90}]}')},,,function(e,t,a){},,function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),s=a.n(l),i=(a(20),a(11)),o=a(9),u=a(8),c=a(1),m=a(2),d=a(5),p=a(4),h=a(7),y=a(6),g=(a(13),function(){function e(t,a,n){Object(c.a)(this,e),this.xCoordinate=t,this.yCoordinate=a,this.facing=n}return Object(m.a)(e,[{key:"getXCoordinate",value:function(){return this.xCoordinate}},{key:"getYCoordinate",value:function(){return this.yCoordinate}},{key:"getFacing",value:function(){return this.facing}}]),e}()),f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={lastX:0,maxX:0,minX:0,lastY:0,maxY:0,minY:0,facing:e.ruleState.facing,savedLocations:[]},a.getPath=a.getPath.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"getAsRadians",value:function(e){return e*Math.PI/180}},{key:"findDrawRuleBySymbol",value:function(e,t){var a=e.find((function(e){return e.symbol===t}));return a?a.drawRule:""}},{key:"getPath",value:function(e){var t=this,a=new Path2D,n=this.state.facing,r=this.state.lastX,l=this.state.lastY,s=this.state.maxX,i=this.state.minX,o=this.state.maxY,u=this.state.minY;return a.moveTo(r,l),e.split("").forEach((function(e){var c=t.findDrawRuleBySymbol(t.props.ruleState.symbolRules,e);if("None"===c.type);else if("AnglePos"===c.type)n+=c.value;else if("AngleNeg"===c.type)n-=c.value;else if("Move"===c.type){var m=c.value,d=r+m*Math.cos(t.getAsRadians(n)),p=l+m*Math.sin(t.getAsRadians(n));a.lineTo(d,p),r=d,l=p,s=Math.max(d,s),i=Math.min(d,i),o=Math.max(p,o),u=Math.min(p,u)}else if("SaveLocation"===c.type){var h=t.state.savedLocations,y=new g(r,l,n);h.push(y),t.setState({savedLocations:h})}else if("LoadLocation"===c.type){var f=t.state.savedLocations,b=f.pop();r=b.xCoordinate,l=b.yCoordinate,n=b.facing,a.moveTo(r,l),t.setState({savedLocations:f})}})),this.setState({facing:n,lastX:r,lastY:l,maxX:s,minX:i,maxY:o,minY:u}),u--,{result:a,minX:i-=20,minY:u,width:s-i+20,height:o-u+20}}}]),t}(r.a.Component),b=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={message:""},a.updateCanvas=a.updateCanvas.bind(Object(h.a)(a)),a.generateString=a.generateString.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.updateCanvas()}},{key:"updateCanvas",value:function(){var e=this.generateString(),t=this.refs.canvas,a=t.getContext("2d");if(e){var n=new f(this.props).getPath(e);t.width=n.width,t.height=n.height,a.translate(-1*n.minX,-1*n.minY),a.stroke(n.result)}}},{key:"findReplacementRuleBySymbol",value:function(e,t){var a=e.find((function(e){return e.symbol===t}));return a?a.replacementRule:t}},{key:"generateString",value:function(){for(var e=this,t=this.props.ruleState.symbolRules,a=this.props.ruleState.axiom,n=parseInt(this.props.ruleState.iterations),r=a,l=0;l<n;l++){var s="";if(!(r.length<25e4||this.props.forceGenerate)){var i="That drawing may cause your browser to slow down, so it was canceled instead. Try using a value of "+l+" for the iterations.";return this.setState({message:i}),a}r.split("").forEach((function(a){s+=e.findReplacementRuleBySymbol(t,a)})),r=s}return this.setState({ruleString:r,message:""}),r}},{key:"render",value:function(){var e=null===this.state.message?"":r.a.createElement("br",null);return r.a.createElement("div",{className:"View-pane",id:"viewPane"},this.state.message,e,r.a.createElement("canvas",{ref:"canvas"},"Your browser does not support the HTML5 canvas tag or you're looking at a search engine preview or something."))}}]),t}(r.a.Component),v=a(3),R=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[];["Move","AnglePos","AngleNeg","SaveLocation","LoadLocation","None"].forEach((function(t){e.push(r.a.createElement("option",{key:t,value:t},t))}));var t=["Move","AnglePos","AngleNeg"].includes(this.props.rule.drawRule.type)?r.a.createElement("input",{type:"Number",className:"drawRuleValue",title:v.drawRuleParameterHeader,id:this.props.index,value:this.props.rule.drawRule.value,onChange:this.props.handleChange}):"";return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"Text",className:"symbol",maxLength:"1",size:"2",id:this.props.index,title:v.symbol,value:this.props.rule.symbol,onChange:this.props.handleChange})),r.a.createElement("td",null,r.a.createElement("input",{type:"Text",className:"replacementRule",title:v.replacementRule,id:this.props.index,value:this.props.rule.replacementRule,onChange:this.props.handleChange})),r.a.createElement("td",null,r.a.createElement("select",{className:"drawRuleType",id:this.props.index,title:v.drawRule,value:this.props.rule.drawRule.type,onChange:this.props.handleChange},e)),r.a.createElement("td",null,t))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=[];return this.props.ruleState.symbolRules.forEach((function(a){t.push(r.a.createElement(R,{key:a.ruleIndex,index:a.ruleIndex,rule:a,handleChange:e.props.formHandler}))})),r.a.createElement("div",null,r.a.createElement("table",{align:"center"},r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",{title:v.iterations},"Iterations"),r.a.createElement("td",{title:v.axiom},"Axiom"),r.a.createElement("td",{title:v.facing},"Initial Facing")),r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("input",{type:"Number",max:20,min:0,title:v.iterations,value:this.props.ruleState.iterations,className:"iterations",onChange:this.props.formHandler})),r.a.createElement("td",null,r.a.createElement("input",{type:"Text",className:"axiom",title:v.axiom,value:this.props.ruleState.axiom,onChange:this.props.formHandler})),r.a.createElement("td",null,r.a.createElement("input",{type:"Number",max:360,min:-360,className:"facing",title:v.facing,value:this.props.ruleState.facing,onChange:this.props.formHandler}))),r.a.createElement("tr",null,r.a.createElement("td",{title:v.symbol},"Symbol"),r.a.createElement("td",{title:v.replacementRule},"Replacement Rule"),r.a.createElement("td",{title:v.drawRule},"Draw Rule"),r.a.createElement("td",{title:v.drawRuleParameterHeader},"Draw Rule ",r.a.createElement("br",null)," Parameter")),t,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.props.handleDrawButton},"Draw System"),r.a.createElement("br",null),r.a.createElement("input",{type:"Checkbox",className:"forceGenerate",id:"forceGenerate",onChange:this.props.formHandler,checked:this.props.forceGenerate}),r.a.createElement("label",{for:"forceGenerate"},"Force large system")),r.a.createElement("td",null,r.a.createElement("button",{onClick:this.props.addRuleHandler},"New Rule"))))))}}]),t}(n.Component),S=a(10),x=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=[];return S.sampleSystems.forEach((function(t){e.push(r.a.createElement("option",{key:t.displayName}," ",t.displayName))})),r.a.createElement("div",null,r.a.createElement("select",{className:"ruleState",value:this.props.displayName,onChange:this.props.loadSystem},e))}}]),t}(r.a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Control-pane"},r.a.createElement("header",{className:"App-header"},r.a.createElement("p",{style:{textAlign:"center"}},"Welcome to Nielson's Lindenmayer System Viewer")),r.a.createElement("p",null,"A Lindenmayer System, or L-System, is a system for generating strings that can be interpreted as geometric shapes."),r.a.createElement("p",null,"Mouse over an input option to get an explanation of its purpose. For a greater understanding of L-Systems, see ",r.a.createElement("a",{href:"https://en.wikipedia.org/wiki/L-system"},"Wikipedia")),r.a.createElement(w,{className:"System-rule-pane",handleDrawButton:this.props.handleDrawButton,ruleState:this.props.ruleState,formHandler:this.props.formHandler,addRuleHandler:this.props.addRuleHandler,forceGenerate:this.props.forceGenerate}),r.a.createElement(x,{displayName:this.props.ruleState.displayName,loadSystem:this.props.loadSystem}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={ruleState:S.sampleSystems[0],forceGenerate:!1},a.handleDrawButton=a.handleDrawButton.bind(Object(h.a)(a)),a.addRuleHandler=a.addRuleHandler.bind(Object(h.a)(a)),a.handleForm=a.handleForm.bind(Object(h.a)(a)),a.editSymbolRule=a.editSymbolRule.bind(Object(h.a)(a)),a.getSystemByDisplayName=a.getSystemByDisplayName.bind(Object(h.a)(a)),a.loadSystem=a.loadSystem.bind(Object(h.a)(a)),a}return Object(y.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"app"},r.a.createElement(E,{handleDrawButton:this.handleDrawButton,ruleState:this.state.ruleState,formHandler:this.handleForm,addRuleHandler:this.addRuleHandler,loadSystem:this.loadSystem,forceGenerate:this.state.forceGenerate}),r.a.createElement(b,{ref:"viewPane",ruleState:this.state.ruleState,forceGenerate:this.state.forceGenerate}))}},{key:"handleDrawButton",value:function(){this.refs.viewPane.updateCanvas()}},{key:"handleForm",value:function(e){e.persist(),["symbol","replacementRule"].includes(e.target.className)?this.editSymbolRule(e):["drawRuleType","drawRuleValue"].includes(e.target.className)?this.editDrawRule(e):["axiom","iterations","facing"].includes(e.target.className)?this.setState((function(t){return{ruleState:Object(u.a)({},t.ruleState,Object(o.a)({},e.target.className,e.target.value))}})):["forceGenerate"].includes(e.target.className)&&this.setState(Object(o.a)({},e.target.className,e.target.checked))}},{key:"editSymbolRule",value:function(e){var t=Object(i.a)(this.state.ruleState.symbolRules),a=parseInt(e.target.id,10),n=this.findRuleByIndex(t,a);n=Object(u.a)({},n,Object(o.a)({},e.target.className,e.target.value));var r=t;r.splice(a,1,n),this.setState((function(e){return{ruleState:Object(u.a)({},e.ruleState,{symbolRules:r})}}))}},{key:"editDrawRule",value:function(e){var t=Object(i.a)(this.state.ruleState.symbolRules),a=parseInt(e.target.id,10),n=this.findRuleByIndex(t,a),r=n.drawRule;if("drawRuleType"===e.target.className){var l="Move"===e.target.value?10:90;r={type:e.target.value,value:l}}else{var s=e.target.value?parseInt(e.target.value,10):0;r=Object(u.a)({},r,{value:s})}n=Object(u.a)({},n,{drawRule:r});var o=t;o.splice(a,1,n),this.setState((function(e){return{ruleState:Object(u.a)({},e.ruleState,{symbolRules:o})}}))}},{key:"addRuleHandler",value:function(e){var t=this.state.ruleState.symbolRules,a=this.getNewRule(t);t.push(a),this.setState((function(e){return{ruleState:Object(u.a)({},e.ruleState,{symbolRules:t})}}))}},{key:"findRuleByIndex",value:function(e,t){return e.find((function(e){return e.ruleIndex===t}))}},{key:"getSystemByDisplayName",value:function(e){return S.sampleSystems.find((function(t){return t.displayName===e.target.value}))}},{key:"loadSystem",value:function(e){var t=this.getSystemByDisplayName(e);this.setState({ruleState:t},this.handleDrawButton)}},{key:"getNewRule",value:function(e){return{ruleIndex:e.length,symbol:"",replacementRule:"",drawRule:{type:"None"}}}}]),t}(r.a.Component);var N=function(){return r.a.createElement(O,{className:"L-system-pane"})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.892d4765.chunk.js.map