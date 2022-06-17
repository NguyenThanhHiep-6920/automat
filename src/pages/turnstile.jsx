import turnstile from '../Data/turnstile'
import Automat from './automat';

const Turnstile=(props)=>{
    return(
        <Automat initialData={turnstile}/>
    );
}
export default Turnstile