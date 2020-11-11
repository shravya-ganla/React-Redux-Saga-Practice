import React, { Component } from 'react';

class userGreetings extends Component {
    constructor(props) {
        super(props);
        this.state={isLoggedIn : false}
    }
    
    render() {
    //     if(this.state.isLoggedIn){
    //         return(
    //             <div>
    //                 Welcome Shravya
    //             </div>
    //         )
    //     }
    //     else{
    //         return(
    //             <div>
    //                 Welcome Guest
    //             </div>
    //         )
    //     }
    // }

    let message 
    if(this.state.isLoggedIn){
        let message = <div>Welcome Shravya</div>
    }
    else{
        let message = <div>Welcome Guest</div>

    }

    return(
    <div>{message}</div>
    )
    }
}

export default userGreetings;