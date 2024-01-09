import Clicks from "./Event";
// import State from "./State";

function Nestedcomp(){
    function Bachu(){
        return(
            <h4>bachu wala component</h4>
        )
    }
    return(
        <div>
        <h2>main comp</h2>
        <Bachu  />
        <Clicks />
        </div>
    )
}
export default Nestedcomp;