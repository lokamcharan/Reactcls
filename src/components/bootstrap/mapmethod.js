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
    {members.map((details)=><ProfileCard profile={details} key={details.id}/>)}
        </>
    )
}

export default MapMethod