import {Row} from "react-bootstrap";

const HandleNames=(props)=>{
    return(
        <>
        <b>Jmeno: </b>
        <input type="search" placeholder="Jmeno" onChange={(e)=>props.handleNameOfAutomaton(e.target.value)} size="10"/>
        </>
    );
}

export default HandleNames