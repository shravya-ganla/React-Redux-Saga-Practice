import React, { Component } from 'react';

class refsDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef=null
        this.setCbRef = element=>{
            this.cbRef=element
        }
    }
    
    componentDidMount(){
        // this.inputRef.current.focus()
        // console.log(this.inputRef);

        //Callback Ref
        if(this.cbRef){
            this.cbRef.focus()
        }
    
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.setCbRef}  />
            </div>
        );
    }
}

export default refsDemo;