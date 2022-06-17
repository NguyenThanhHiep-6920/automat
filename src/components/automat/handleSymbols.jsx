import {CloseButton,Table} from 'react-bootstrap'

const HandleSymbols=(props)=>{
    const symbols=props.symbols;
    return (
        <>
            <b>3. Znaky (signaly/symboly):</b>
            <Table variant='primary' hover bordered>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Znak</th>
                        <th>Vyznam</th>
                        <th>Zmen</th>
                        <th>Vymaz</th>
                    </tr>
                </thead>
                <tbody>
                    {symbols.map(symbol=>(
                        <tr>
                            <td>{symbol.id}</td>
                            <td>{symbol.name}</td>
                            <td>{symbol.label}</td>
                            <td><input type="search" placeholder ="Znak Vyznam" onChange={(e)=>props.handleSymbolChange(symbol.id,e.target.value)}/> </td>
                            <td><CloseButton className="btn btn-primary btn-sm" onClick={()=>props.onRemoveSymbol(symbol.id)}/></td>
                        </tr>       
                    ))}
                </tbody>
            </Table>
            <button className="btn btn-primary btn-sm" onClick={()=>props.handleNewSymbol()}>Novy Znak</button>
            <br/>
            <em>- Pokud změníme symbol, jehož název již existuje, změna nejde.</em>
        </>
    );

}
export default HandleSymbols