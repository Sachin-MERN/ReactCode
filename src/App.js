import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Arrayuse from './Arrayuse';

// import Classcomp from './Classcomp';
// import Updates from "./Updates";

function App() {
  // this for the object with usestate hook
  const [data, setData] = useState({ firstName: "sachin", lastName: "madas" });
  // this for the array with hook
  // const num = [10,20,35,41,4,4,20];
  // const double = num.map((x,index)=><h1 key= {index}>{x} index no is:{index}</h1>)
  // if not give the key then it give the warning for duplicate data and here we assign unique key for  each every array element
  function update() {//this for the onclick event name is change
    setData({ ...data, lastName: "madaswar" })
  }
  return (
    <div className="App">



      <h1>firstName is: {data.firstName}  lastName is:  {data.lastName}</h1>
      <button onClick={update}>update</button>
      {/* to display the result of array with map */}
      {/* <h1>{double}</h1> */}
      {/* <Test1 />
      <Classcomp />
      <Updates /> */}
      <Arrayuse />
      {/* <Userstatearray /> */}

    </div>

  );

}
export default App;


// function Test1(){
//   return(
//       <h1>this is the functional component</h1>
//   )
// }

//  {/* <header className="App-header">
// <img src={logo} className="App-logo" alt="logo" />
// <p>
//   Edit <code>src/App.js</code> and save to reload.
// </p>
// <a
//   className="App-link"
//   href="https://reactjs.org"
//   target="_blank"
//   rel="noopener noreferrer"
// >
//   Learn React
// </a>
// </header> */}