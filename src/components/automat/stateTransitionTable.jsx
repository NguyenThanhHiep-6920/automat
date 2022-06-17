import {Table} from 'react-bootstrap'

const StateTransitionTable=(props)=>{
    const graphData=props.graphData;
    const NextStates=(startId,symbol)=>{
        let nextStates="";
        let isExisted=false;
        //ham nay co the bieu dien dc ca automat nedeterministicky
        for(let i=0;i<graphData.edges.length;++i){
            //Znaky jsou oddeleny carkami
            if(graphData.edges[i].startId===startId&&graphData.edges[i].symbols.split(",").includes(symbol)){
                nextStates= nextStates+","+graphData.points.filter(point=>(point.id===graphData.edges[i].endId))[0].state;
                isExisted=true;
            }
        }
        if(!isExisted){
            return "Prazdna mnozina";
        }
        else{
            return nextStates.slice(1);
        }
        
    }
    const State=(point)=>{
        if(point.label==='initialState'){
            return "->"+point.state;
        }
        if(point.label==='finalState'){
            return "<-"+point.state;
        }
        if(point.label==='commonState'){
            return point.state;
        }
    }
    return(
        <>
            <b>5. Prechodova Tabulka</b>
            <Table  variant="info" hover bordered>
                <thead>
                    <tr>
                        <th>Stavy\Znaky</th>
                        {graphData.symbols.map(symbol=>(
                            <th>{symbol.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {graphData.points.map(point=>(
                        <tr>
                            <td>{State(point)}</td>
                            {graphData.symbols.map(symbol=>(
                                <td>{NextStates(point.id,symbol.name)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </>
    );
}

export default StateTransitionTable