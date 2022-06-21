/**
 * Render an representation of a point
 * @param {*} props 
 * @param {*} props.x - Point's X coordinate
 * @param {*} props.y - Point's Y coordinate
 * @param {string} props.label - Point's type
 * @param {string} props.state - State that is represented by this point
 * @returns Elements in a <svg> tag like <line>,<circle>,<polygon>,<text>,...
 */
const Point=(props)=>{
    const x=props.x;
    const y=props.y
    const state=props.state;
    const label=props.label;

    const radius= 20;
    const h=10;
    if(label==='initialState'){
        //initial state
        return <> 
            <line x1={x-3*radius} y1={y} x2={x-radius} y2={y} stroke="black" strokeWidth="2"/>
            <polygon 
                points={[
                    [x-radius,y],
                    [x-radius-h,y+h],
                    [x-radius-h,y-h]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <circle cx= {x} cy={y} r={radius} stroke="black" strokeWidth="2" fill="white"></circle>
            
            <text x={x-5} y={y+5} fill="red">{state}</text>
        </>
    }
    if(label==='commonState'){
        //regular state
        return <> 
            <circle cx= {x} cy={y} r={radius} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={x-5} y={y+5} fill="red">{state}</text>
        </>
    }
    if(label==='finalState'){
        //final state
        return <> 
            <circle cx= {x} cy={y} r={radius} stroke="black" strokeWidth="2" fill="white"></circle>
            <circle cx= {x} cy={y} r={radius-5} stroke="black" strokeWidth="2" fill="white"></circle>
            <text x={x-5} y={y+5} fill="red">{state}</text>
        </>
    }
}

export default Point
