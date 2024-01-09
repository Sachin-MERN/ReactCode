import { useState } from "react";
import Use from "./Use";
function Arrayuse() {
    const [items, setState] = useState([])
    
    function arrayUpdate() {
        setState([...items, {//spread oprator create one array copy and store the values and prevent from ovewrite
            id: items.length,//set value to id [0][1][2]...[n] like thagt
            value: Math.random()// whenever we click on button one new number is created and store in array.
        }])
    }
    console.log(items);
    return (
        <div>
            <ol>{items.map(item => (
                <li key={item.id}>{item.value}</li>
            ))}
            </ol>
            
            <button onClick={arrayUpdate}>add item</button>
            <br></br>
            <Use />
        </div>
    )
}
export default Arrayuse;