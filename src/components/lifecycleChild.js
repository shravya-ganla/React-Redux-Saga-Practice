import React, { Component } from 'react';

class lifecycleChild extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:"Shravya"
        }
        console.log("lifecycleChild Constructor")
    }
    
    static getDerivedStateFromProps(props,state){
        console.log('lifecycleChild getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('lifecycleChild componentDidMount');
    }

    shouldComponentUpdate(){
        console.log("lifecycleChild shouldComponentUpdate");
        return true;
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lifecycleChild getSnapshotBeforeUpdate");
        return null
    }

    componentDidUpdate(){
        console.log('lifecycleChild componentDidUpdate');
    }

   

    render() {
        console.log('lifecycleChild render');
        return (
            <div>
                lifecycleChild 
            </div>
        );
    }
}

export default lifecycleChild;