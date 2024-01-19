

import { Component } from "react";
import Child from "./child";

class Counter extends Component{


    constructor(){
        super()
        this.state={
            count:0
        }
    }
//second way of creation

handleIncrement=()=>{
    //set state
    this. setState({
        count:this.state.count+1
    })
}
    render(){
        return(
            <>
            <h2>Hi Guys</h2>
            <h2>{this.state.count}</h2>
            <Child handleIncrementMethod={this.handleIncrement}/>
            </>
        )
    }
}

export default Counter