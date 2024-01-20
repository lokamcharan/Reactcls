
// import React from 'react';


// function App(){
//   return (
//    <div>
//   {/* <h2>List</h2>
//     <ol>
//       <li>telugu</li>
//       <li>maths</li>
//       <li>social</li
//     </ol>
//     <h2>Table</h2>
    // <table>
    //   <tr>
    //     <th>sl.no</th>
    //     <th>name</th>
    //     <th>number</th>
    //   </tr>
    //   <tr>
    //     <td>1</td>
    //     <td>charan</td>
    //     <td>54965164516465</td>
    //   </tr>
    //   <tr>
    //     <td>2</td>
    //     <td>tom</td>
    //     <td>64984616984654984</td>
    //   </tr>
    //   <tr>
    //     <td>2</td>
    //     <td>nithin</td>
    //     <td>64984616984654984</td>
    //   </tr>
    // </table>
//     <h2>Forms</h2>
    // <form> 
    // <input type="text" id="loginUsername"placeholder="Username" required></input><br></br><br></br>
    //     <input type="password" id="loginPassword" placeholder="Password" required></input><br></br><br></br>
    //     <button type="button" onclick="login()">Login</button>
    // </form>
//     </div>*/
//   )
// }
// export default App;

// import ButtonComponents from "./components/button/button"
// import Table from "./components/button/table/table"
// import FormsComponents from "./components/button/forms/froms"
// import ListComponents from "./components/button/list/ollist/ollist"
// import List1Components from "./components/button/list/ollist/ullist/ullist"
// import ListitemComponents from "./components/button/list/ollist/listitem/listitem"
// import ImageChange from "./components/image/image"
// import { TodoList } from "./components/button/todolist/todolist"
// import Button1Component from "./components/button1/button-componets"
// import ApiCall from "./components/ehandling/ehandling"
// import InlineStyles from "./components/styles/incline-style"
// import ExternalStyles from "./components/styles/external-style"
// import BootstrapLayout from "./components/bootstrap/1st-component"
// import MapMethod from "./components/bootstrap/mapmethod"
// import ParentComponent from "./components/props/parent"
// import Counter from "./components/counter/counter"
import Mounting from "./components/life-cycle/mounting/mounting-phase"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Cards from "./components/bootstrap/boost1"
 

function App(){
  return(
    <div>
     {/* style={{backgroundColor:"GrayText"}} */}
         {/* <ButtonComponents/>
         <Table/>
         <FormsComponents/>
         <ListComponents/>
         <List1Components/>
         <ListitemComponents/>
         <TodoList/>
         <Button1Component/>
         <ImageChange/>
         <ApiCall/>
         <InlineStyles/>
         <ExternalStyles/> */}
         {/* <BootstrapLayout/> */}
         {/* <MapMethod/> */}
         {/* <ParentComponent/> */}
         {/* <Counter/> */}
         <Mounting/>

         {/* <Cards/> */}

    </div>
  )
}
export default App