import HandlePoints from './handlePoints'
import HandleEdges from './handleEdges'
import HandleSymbols from './handleSymbols';
import HandleNames from './handleNames';

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