import { Component } from "react";


class Button1Component extends Component{
  state={
    subscribeText1:"Subscribe",
    isSubscribed:false,
    subscribeText2:"Subscribed Thanks"
  }
handleSubscribe=()=>{

    this.setState(
        {
        
        isSubscribed:!this.state.isSubscribed
    },()=>{
        console.log(this.state.isSubscribed);
    }
    )
}
    render(){
        return(
            <>

        {
        <button className={"sunscribe"}
            onClick={this.handleSubscribe}>{this.state.isSubscribed?this.state.subscribeText2:this.state.subscribeText1}
        </button>
         }

        
        {
            this.state.isSubscribed
            ?
            <h2>Thanks For Subscribing ,Explore More</h2>
            :
            <h2>Please Subscribe To Access The App content</h2>
        }

        <br></br>
        <hr></hr>
        </>
        )
    }
}
export default Button1Component


// class Button2Component extends Component{

//     render(){
//     return(
//              <div>
//               <button>Click More</button>
//               {/* <a href="todolist.js"> */}
//                 <img src="https://images.assettype.com/freepressjournal/2019-08/73f24ccc-2af8-477e-885e-80c90e7b7bd0/Virat_Kohli_century.jpg?rect=0%2C0%2C3228%2C1816"  alt="vk" width="350" height="250"></img>   
               
//              </div>  
//          )

//     }

// }
// export default Button2Component