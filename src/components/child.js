import React, { Component } from 'react';
import Parent from './parent';
class child extends Component {
    render() {
        return (
            <div>
                {/* <h1>Hi {this.props.name}</h1>
                <Parent firstname={this.props.name}/> */}

                <button onClick={()=>this.props.parentMethod('Infy')}>Click ME</button>
                <h1>Hi {this.props.name}</h1>
                {/* <Parent childName={this.props.name}/> */}

            </div>
        );
    }
}

export default child;