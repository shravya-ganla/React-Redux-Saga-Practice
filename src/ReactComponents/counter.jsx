import React, { Component } from 'react';

class counter extends Component {

    formatCount(){
        const {count} = this.props.counter;
        return count === 0 ? "Zero" : count
    }

  
    render() {
        return (
            <div>
                <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter)}>Increment</button>
                <button onClick={() =>this.props.onDelete(this.props.id)} className="btn btn-danger btn-sm m-2">Delete</button>
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter === 0) ? "warning" : "primary";
        return classes;
    }
}

export default counter;