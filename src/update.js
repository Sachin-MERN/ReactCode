import { useState } from "react";
function Update(){
    // let counter = 10
    // console.log('click me',counter)
    // counter = counter + 1
  let [counter,setCounter]=useState(10)
    const update = ()=>{
        setCounter = (counter + 1)
    }

    return(
        <>
         <h1>{counter}</h1>
         <button onClick={update}>add value</button>
        </>
    )
}
export default Update;