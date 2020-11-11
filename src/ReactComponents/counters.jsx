import React, { Component } from 'react';
import Counter from './counter';

class counters extends Component {
    state={
        counters:[
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
            
        ]
    } 
    
    
    handleIncrement = (id) =>{
        this.setState({count: this.state.count+1})
    }



    handleReset =()=>{
        const counters = this.state.counters.map(c =>{

            c.value = 0;
            return c;
        })
    }

    handleDelete= counterId =>{
        const counters = this.state.counters.filter(c => c.id !== counterId)
        this.setState({counters});
    }
    render() {
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm">Reset</button>
                {this.state.counters.map(counter=> 
                <Counter keys={counter.id} onIncrement={this.handleIncrement}  counter={counter.value} id={counter.id}  onDelete={this.handleDelete}/>)}

            </div>
        );
    }
}

export default counters;