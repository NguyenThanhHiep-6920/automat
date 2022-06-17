import Edges from './edges'
import Points from './points'
import GraphInf from './graphInf';

const Graph=(props)=>{
    const graphData=props.graphData;
    const width=1050;
    const height=600;
    return(
        <svg width={width} height={height}>
            <polyline points={[[0,0], [width,0] ,[width,height], [0,height], [0,0]]} fill="white" stroke="black" strokeWidth="10"/>
            <line x1={100} y1={0} x2={100} y2={10} stroke="black" strokeWidth="2"></line>
            <line x1={200} y1={0} x2={200} y2={10} stroke="black" strokeWidth="2"></line>
            <line x1={300} y1={0} x2={300} y2={10} stroke="black" strokeWidth="2"></line>
            <line x1={400} y1={0} x2={400} y2={10} stroke="black" strokeWidth="2"></line>
            <line x1={500} y1={0} x2={500} y2={10} stroke="black" strokeWidth="2"></line>
            <line x1={600} y1={0} x2={600} y2={10} stroke="black" strokeWidth="2"></line>
            <line x1={700} y1={0} x2={700} y2={10} stroke="black" strokeWidth="2"></line>
            <text x={10} y={20} fill="black">0</text>
            <text x={200} y={30} fill="black">200</text>
            <text x={400} y={30} fill="black">400</text>
            <text x={600} y={30} fill="black">600</text>

            <line x1={0} y1={100} x2={10} y2={100} stroke="black" strokeWidth="2"></line>
            <line x1={0} y1={200} x2={10} y2={200} stroke="black" strokeWidth="2"></line>
            <line x1={0} y1={300} x2={10} y2={300} stroke="black" strokeWidth="2"></line>
            <line x1={0} y1={400} x2={10} y2={400} stroke="black" strokeWidth="2"></line>
            <line x1={0} y1={500} x2={10} y2={500} stroke="black" strokeWidth="2"></line>
            <text x={20} y={200} fill="black">200</text>
            <text x={20} y={400} fill="black">400</text>
            <Edges 
                edges={graphData.edges}
                points={graphData.points}
            />
            <Points 
                points={graphData.points}
            />
            <GraphInf
                names={graphData.names}
                symbols={graphData.symbols}
                points={graphData.points}
                width={width}
            />
        </svg>
    );
}

export default Graph