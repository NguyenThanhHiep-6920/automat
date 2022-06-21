import HandlePoints from './handlePoints'
import HandleEdges from './handleEdges'
import HandleSymbols from './handleSymbols';
import HandleNames from './handleNames';
/**
 * Render graph's element and represent it, also control it
 * @param {*} props 
 * @param {*} props.graphData - Graph's data
 * @param {*} props.handleNameOfAutomaton - Function that handles change of the automaton's name
 * @param {*} props.onRemovePoint - Function that removes a point
 * @param {*} props.onRemoveEdge - Function that removes an edge
 * @param {*} props.onRemoveSymbol - Function that removes a symbol
 * @param {*} props.handlePointChange - Function that handles change of a point
 * @param {*} props.handleEdgeChange - Function that handles change of an edge
 * @param {*} props.handleSymbolChange - Function that handles change of a symbol
 * @param {*} props.handleNewPointFunction - Function that handles adding of a new point
 * @param {*} props.handleNewEdge - Function that handles adding of an new edge
 * @param {*} props.handleNewSymbol - Function that handles adding of a new symbol
 * @returns Components: <HandleNames>, <HandlePoints>, <HandleEdges> and <HandleSymbols>
 */
const Handle=(props)=>{
    const graphData=props.graphData;
    return(
        <>
            <h2>Automat</h2>
            <HandleNames
                handleNameOfAutomaton={props.handleNameOfAutomaton}
            />
            <br/>
            <HandlePoints 
                points={graphData.points} 
                onRemovePoint={props.onRemovePoint}
                handlePointChange={props.handlePointChange}
                handleNewPoint={props.handleNewPoint}
            />
            <br/>
            <HandleEdges 
                edges= {graphData.edges}
                onRemoveEdge={props.onRemoveEdge}
                handleEdgeChange={props.handleEdgeChange} 
                handleNewEdge={props.handleNewEdge}
            />
            <br/>
            <HandleSymbols
                symbols={graphData.symbols}
                onRemoveSymbol={props.onRemoveSymbol}
                handleSymbolChange={props.handleSymbolChange}
                handleNewSymbol={props.handleNewSymbol}
            />
        </>
    );
}

export default Handle