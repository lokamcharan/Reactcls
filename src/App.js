// import React from 'react';
// function App(){
//   return (
//    <div>
//   {/* <h2>List</h2>
//     <ol>
//       <li>telugu</li>
//       <li>maths</li>
//       <li>social</li>

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

import ButtonComponents from "./components/button/button"
import Table from "./components/button/table/table"
import FormsComponents from "./components/button/forms/froms"
import ListComponents from "./components/button/list/ollist/ollist"
import List1Components from "./components/button/list/ollist/ullist/ullist"
import ListitemComponents from "./components/button/list/ollist/listitem/listitem"

function App(){
    return (
      <div>
        <h2>Button</h2>
      <ButtonComponents/>



      <h2>Table</h2>
      <Table/>

      <h2>Forms</h2>
      <FormsComponents/>




      <h2>order list</h2>
      <ListComponents/>

      <h2>unorder list</h2>
      <List1Components/>

      <ListitemComponents/>

      
      </div>
    )

}
export default App