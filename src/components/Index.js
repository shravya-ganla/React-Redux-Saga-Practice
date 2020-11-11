import React, { Component } from 'react';

class Index extends Component {
    render() {
    const array=['Ram',"Sita",'Arjun','Ram']
        return (
            <div>
                {array.map((name,index)=>{
                    return(
                    <h1 key={index}>{index } {name}</h1>
                    )
                })}
            </div>
        );
    }
}

export default Index;