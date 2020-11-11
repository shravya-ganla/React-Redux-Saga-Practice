import React, { Component } from 'react';
import Child from './child';
class parent extends Component {

    handleClick(name){
       alert(`hello This is Parent component ${name}`)
    }

    render() {
        const {firstName} =this.props
        // const {state1,state2}=this.state //Destructuring state
        return (
            <div>
                {/* <p>This is {this.props.firstname}</p> */}
                {/* <button onClick={this.handleClick}>Click ME</button> */}
                
                <p>Welcome {firstName}</p>
                <Child parentMethod={this.handleClick}  name="Shravya"/>

                {/* <p>{this.props.childName}</p> */}
                
            </div>
        );
    }
}

export default parent;