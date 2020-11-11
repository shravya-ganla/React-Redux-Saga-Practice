import React, { Component } from 'react';
import Lifecycle from './lifecycleChild';

class lifecycle extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Shravya"
        }
        console.log("Lifecycle Constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('Lifecycle getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('Lifecycle componentDidMount');
    }


    shouldComponentUpdate(){
        console.log("Lifecycle shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("Lifecycle getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(){
        console.log('Lifecycle componentDidUpdate');
    }

    changeState =() =>{
        this.setState({name:'Ganla'})
    }

    
    render() {
        console.log('Lifecycle render');
        return (
            <div>
                Lifecycle A
                <button onClick={this.changeState}>Change State</button>
                <Lifecycle/>
            </div>
        );
    }
}

export default lifecycle;