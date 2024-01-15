function FormsComponents(){
    return(
        <>
        <form> 
        <input type="text" id="loginUsername"placeholder="Username" required></input><br></br><br></br>
            <input type="password" id="loginPassword" placeholder="Password" required></input><br></br><br></br>
            <button className={"login"}type="button" onclick="login()">Login</button>
        </form>
        <br></br>
        <hr></hr>
        </>
    )
}
export default FormsComponents