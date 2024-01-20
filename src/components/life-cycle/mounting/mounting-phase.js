



import { Component } from "react";
import Loader from "../../loaders/loader";



class Mounting extends Component{


    constructor(){
        super()
        this.state={
            text:"welcome",
            color:"blue",
            post:[]
        }
    }

    static getDerivedStateFromProps(){
        return{}
    }
    componentDidMount(){
        fetch("https://fakestoreapi.com/products")
        .then(response=>response.json())
        .then(response=>{
           this.setState(
            {
                post:response
            }
           )
        }) 
    }

    render(){
        return(
            <>
{/* <div className="card" style={{ width: 400 }}>
  <img className="card-img-top" src="img_avatar1.png" alt="Card image" />
  <div className="card-body">
    <h4 className="card-title">{this.state.eachPost.title}</h4>
    <p className="card-text">{this.state.eachPost.price}</p>
    <a href="#" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div> */}


            
            <h1
                style={{color:this.state.color}}>Hi {this.state.text}
            </h1>
            {
                this.state.post.length>0
                ?
                <>
                {
                    this.state.post.map((eachPost)=><><h2>{eachPost.id}</h2>
                    <h2>{eachPost.title}</h2><h2>{eachPost.price}</h2>
                    <h2>{eachPost.description}</h2>
                    </>
                    
                    )
                }
                </>
                :
                // <h2>Please wait loading</h2>
                <Loader/>
            }
            </>
        )
    }
}

export default Mounting 