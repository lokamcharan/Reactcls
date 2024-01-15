



function ApiCall(){

    const fetchData=()=>{
        try{
            const a=10
            fetch("https://fakestoreapi.com/products")
            .then(response=>response.json())
            .then(response=>console.log(response))
            .catch(error=>console.log(error))
            console.log(a)
        }
        catch(error){
            console.log(error)
            alert("something went wrong")
        }
        finally{
            console.log("stop the loaders")
        }
    }
    return(
        <>
        <h2>hello</h2>
        <button onClick={fetchData}>click here

        </button>

        <br></br>
        <hr></hr>
        </>
    )
    
}
export default ApiCall