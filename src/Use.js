import { useState } from "react"
import Empprops from './Empprops';
const Use =()=>{
    const mydata =[
        {id:0,Name:"sachin",age:30},
        {id:0,Name:"abhishek",age:25},
        {id:0,Name:"rushikesh",age:27},
        {id:0,Name:"tushar",age:26},
        
    ]
    const [myarray,setArray] = useState(mydata)
   const clearData =()=>{
     setArray([]);
   }
   const [data,setData]=useState("madas");
   
    return (
        <>
        {
        myarray.map((ele)=><h1 key={ele.id}>Name is:{ele.Name} age is: {ele.age}</h1>)
        }
        
        <button onClick={clearData}>clear data</button>
         <Empprops name={data} />
         <button onClick={()=>{setData("sachin")}}>update</button>

{/*          
        //  {{addres:'nanded',mob:'111'}}
        // <Empprops name={"abhishek"} email = "abhishek@test.com" other={{addres:'osmanabad',mob:'222'}}/>
        // <Empprops name={"rushi"} email = "rushi@test.com" other={{addres:'osmanabad',mob:'333'}}/> 
         */}

        </>
    )
}
export default Use;