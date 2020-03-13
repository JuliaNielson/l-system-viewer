import React from 'react'
import SampleSystems from '../data/SampleSystems'

class SystemSelector extends React.Component{

    render(){
        let systemSelections =[];
        SampleSystems.sampleSystems.forEach((element)=>{
            systemSelections.push(
                <option 
                    key={element.displayName} 
                    value={element.displayName}>
                        {element.displayName}
                </option>
            );
        })
        return (<div>
            <select className="ruleState" value={this.props.ruleState.displayName} onChange={this.props.loadSystem}>
                {systemSelections}
            </select>
        </div>
        );
    }
}
export default SystemSelector;