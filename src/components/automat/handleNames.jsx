/**
 * Render handling name of automaton
 * @param {*} props 
 * @param {*} props.handleNameOfAutomaton - Function that handles change of the automaton's name
 * @returns <input> tag
 */
const HandleNames=(props)=>{
    return(
        <>
        <b>Jmeno: </b>
        <input type="search" placeholder="Jmeno" onChange={(e)=>props.handleNameOfAutomaton(e.target.value)} size="10"/>
        </>
    );
}

export default HandleNames