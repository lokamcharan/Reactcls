



export const TodoList=()=>{
    

    const details={
        name:"virat kohil",
        imgURL:"https://images.assettype.com/freepressjournal/2019-08/73f24ccc-2af8-477e-885e-80c90e7b7bd0/Virat_Kohli_century.jpg?rect=0%2C0%2C3228%2C1816",
        imgALT:"vk",
        listItems:["cricketer","ipl","india"],
        heading:["S.no","Name","Number"],
        row1:[1,"Charan","9573469756"],
        row2:[2,"Cherry","94965435656"],
        row3:[3,"Krishil","94965435656"],
        label1:"Username",
        label2:"Password",
        button1:"Click Here"
    }
    const{name,imgURL,imgALT,listItems,heading,row1,row2,row3,label1,label2,button1}=details
    return(
        <div>
          <h1>{name}</h1>  
          
          <img 
          src={imgURL}
          alt={imgALT} width="200px"height="200px"
          />
          <ul>
            <li>{listItems[0]}</li>
            <li>{listItems[1]}</li>
            <li>{listItems[2]}</li>
          </ul>


    <table>
        <tr>
          <th>{heading[0]}</th>
          <th>{heading[1]}</th>
          <th>{heading[2]}</th>
        </tr>
        <tr>
          <td>{row1[0]}</td>
          <td>{row1[1]}</td>
          <td>{row1[2]}</td>
        </tr>
        <tr>
          <td>{row2[0]}</td>
          <td>{row2[1]}</td>
          <td>{row2[2]}</td>
        </tr>
        <tr>
          <td>{row3[0]}</td>
          <td>{row3[1]}</td>
          <td>{row3[2]}</td>
        </tr>
      </table><br></br>

      <form> 
        <label>{label1}</label>
        <input type="text" id="loginUsername"placeholder="Username" required></input><br></br><br></br>
        <label>{label2}</label>
            <input type="password" id="loginPassword" placeholder="Password" required></input><br></br><br></br>
            <button className={"click"} type="button" onclick="login()">{button1}</button>
        </form>
        <br></br>
        <hr></hr>
        </div>
    )
}