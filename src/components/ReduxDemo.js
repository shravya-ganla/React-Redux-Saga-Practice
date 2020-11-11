import React, { Component } from 'react';
import {createStore} from 'redux';

class ReduxDemo extends Component {
    constructor(props) {
        super(props);
        this.state={name:"Shravya"}
    }
    

    render() {

//Step 2: Reducer :state n action
    const reducer = function(state,action){

        if(action.type === "ATTACK"){
            return action.payload
        }
        if(action.type === "name"){
            return action.payload
        }
        return state
    }

//Step 1: Store :reducer n state
    const store = createStore(reducer,this.state.name);


//Step 3: Subscribe

    store.subscribe(()=>{
        console.log("Store is now" ,store.getState());
    })

//Step 4: Dispatch action 

    store.dispatch({type: "ATTACK" , payload:"Iron Man"})
    store.dispatch({type: "name" , payload:"Ganla"})



        return (
            <div>
                Redux Demo
            </div>
        );
    }
}

export default ReduxDemo;