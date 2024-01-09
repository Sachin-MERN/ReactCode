import Student from "./Propsclass";
function Empprops( props){
    console.log(props);//similer to parameter sending the data from import program
    return(
        <>
        {<h1>{props.name}</h1> }
        {/* {<h2>{props.email}</h2>}
        {<h3>{props.other.addres}</h3>} */}

        <Student name="sachin"/>
        </>
    )
}
export default Empprops;