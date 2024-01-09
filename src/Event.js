import Updates from './Updates';
function Clicks() {
    let str = "sachin"
    function Mesg() {
        str = "how are you bro";
        alert(str);
    }
    return (
        <div>
            <h1>{str}</h1>
            {/* without state we cant change the value of the valriable   */}
            {/* <button onClick={Mesg()}>click</button> we cant call function react like this it automatically call the alert funcation */}
            <button onClick={Mesg}>click</button>
            {/* we can call function without () this  */}
            {/* <State /> */}
            <Updates />
        </div>
    )
}
export default Clicks;