import turnstile from '../Data/turnstile'
import Automat from './automat';
/**
 * Render page about turnstile's automaton
 * @param {*} props 
 * @returns <p> tag
 */
const Turnstile=(props)=>{
    return(
        <Automat initialData={turnstile}/>
    );
}
export default Turnstile