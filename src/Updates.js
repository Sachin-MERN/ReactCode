import{useState} from "react"; 
function Updates()
{
    var  [str,setData]=useState(0)
   function UpdatData(){
    setData = (str+1)
     
   }
   console.warn(".........")
   return(
    <div className = "App">
        <h1>{str}</h1>
        <button onClick={UpdatData}>Update</button>
        
    </div>
   )
   
}
export default Updates;