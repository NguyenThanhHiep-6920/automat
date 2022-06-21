import Edge from './edge'
/**
 * Render an representation of the set of edges
 * @param {*} props 
 * @param {*} props.edges - Set of graph's edges
 * @param {*} props.points - Set of graph's points
 * @returns List of the <Edge> components- representation of the edges
 */
const Edges=(props)=>{
    const edges=props.edges;
    const points=props.points;
    return (
        <>
            {edges.map(edge =>{
                let label='obecna';
                if(edge.startId===edge.endId){
                    label='smycka';
                }
                else{// must be startId!==endId
                    if(edges.filter(ed=>(ed.startId===edge.endId&&ed.endId===edge.startId)).length===1){
                        label='krivka';
                    }
                }
                return <Edge 
                    points={points}
                    startId={edge.startId} 
                    endId={edge.endId}  
                    label={label}
                    symbols={edge.symbols}
                />
            })}
        </>
    );
}

export default Edges