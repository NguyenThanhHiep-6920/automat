import {CloseButton,Table} from 'react-bootstrap'
/**
 * Render and control symbols
 * @param {*} props 
 * @param {*} props.symbols - Set of graph's symbols
 * @param {*} props.onRemoveSymbol - Function that removes a symbol
 * @param {*} props.handlePointSymbol - Function that handles change of a symbol
 * @param {*} props.handleNewSymbol - Function that handles adding of a new symbol
 * @returns component <Table> that obtains symbols with its mutable information, <button> tag for adding of a new symbol
 */
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