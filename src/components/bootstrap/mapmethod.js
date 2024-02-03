import ProfileCard from "./card"

const MapMethod=()=>{

    const members=[{
        name:"kanna" ,
        id:1,
        color:"red" ,
        designation:"CEO"
      },{
        name:"krshi",id:2, color:"yellow" ,designation:"HR"
      },{
       name:"harsha" ,id:3,color:"blue", designation:"TL"
  
      }
    ]
    return(
        <>
        <div class="jumbotron text-center">
  <h1>WelCome </h1>
  <p>10k coders</p> 
</div>
  
<div class="container">
  <div class="row">
    <div class="col-sm-4" style={{display:"grid",gridTemplateColumns:"100% 100% 100%", gap:"10px"}}>
    {members.map((details)=><ProfileCard profile={details} key={details.id}/>)}
    </div>
    </div>
    </div>
        </>
    )
}

export default MapMethod