/**
 * Render an representation of an edge
 * @param {*} props 
 * @param {*} props.points - Set of graph's points
 * @param {*} props.startId - Edge's start index
 * @param {*} props.endId - Edge's end index
 * @param {string} props.label - Edge's type
 * @param {string} props.symbols - Symbols that are represented by this edge
 * @returns Elements in a <svg> tag like <line>,<elipse>,<polygon>,<text>,...
 */

const Edge=(props)=>{
    const points=props.points;
    const startPoint= points.filter(point=>(point.id===props.startId))[0];
    const endPoint= points.filter(point=>(point.id===props.endId))[0];
    const label=props.label;
    const symbols=props.symbols;

    const a=startPoint;
    const b=endPoint;
    //radius of the node's circle
    const radius=20;
    //height triangle of the arrow
    const h=10; 
    const length_ab = Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2);
    //common 
    if(label==='obecna'){
        const x1=a.x+(b.x-a.x)*(radius/length_ab);
        const y1=a.y+(b.y-a.y)*(radius/length_ab);
        const x2=b.x-(b.x-a.x)*(radius/length_ab);
        const y2=b.y-(b.y-a.y)*(radius/length_ab);

        const x3=b.x-(b.x-a.x)*((radius+h)/length_ab);
        const y3=b.y-(b.y-a.y)*((radius+h)/length_ab);
        
        const x4=x3+(b.y-a.y)*(h/length_ab);
        const y4=y3-(b.x-a.x)*(h/length_ab);
        const x5=x3-(b.y-a.y)*(h/length_ab);
        const y5=y3+(b.x-a.x)*(h/length_ab);
        //regular line, in <line> x1,y1,x2,y2 can be replaced by coordinates of A,B
        return <>
            <line x1={x1} y1={y1} x2={x2} y2={y2} stroke="black" strokeWidth="2"/>
            <polygon 
                points={[
                    [x2,y2],
                    [x4,y4],
                    [x5,y5]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <text x={(a.x+b.x)/2} y={(a.y+b.y)/2} fill="red">{symbols}</text>
        </>
    }
    //loop
    if(label==='smycka'){
        return<>
            <ellipse cx={a.x} cy={a.y-radius} rx={2*radius} ry={radius} stroke="black" strokeWidth="2" fill="none"/>
            <polygon 
                points={[
                    [a.x,a.y-2*radius+h],
                    [a.x,a.y-2*radius-h],
                    [a.x+h,a.y-2*radius]
                ]} 
                stroke= "black" strokeWidth="2" fill="black"
            />
            <text x={a.x-radius} y={a.y-2*radius} fill="red">{symbols}</text>
        </>
    }
    //curve
    if(label==='krivka'){
        const MidpointX=(a.x+b.x)/2;
        const MidpointY=(a.y+b.y)/2;
        const ControlPointX=MidpointX+(b.y-a.y)/7;
        const ControlPointY=MidpointY-(b.x-a.x)/7;

        const length_Cb = Math.sqrt((ControlPointX-b.x)**2+(ControlPointY-b.y)**2);
        const x2=b.x-(b.x-ControlPointX)*(radius/length_Cb);
        const y2=b.y-(b.y-ControlPointY)*(radius/length_Cb);

        const x3=b.x-(b.x-ControlPointX)*((radius+h)/length_Cb);
        const y3=b.y-(b.y-ControlPointY)*((radius+h)/length_Cb);
        
        const x4=x3+(b.y-ControlPointY)*(h/length_Cb);
        const y4=y3-(b.x-ControlPointX)*(h/length_Cb);
        const x5=x3-(b.y-ControlPointY)*(h/length_Cb);
        const y5=y3+(b.x-ControlPointX)*(h/length_Cb);
        return <>
            <path 
                d={`M${a.x},${a.y} 
                    Q${ControlPointX},${ControlPointY} 
                    ${b.x},${b.y}`}
                stroke="black" strokeWidth="2" fill="none"
            />
            <polygon 
                points={[
                    [x2,y2],
                    [x4,y4],
                    [x5,y5]
                ]}
                stroke="black" fill="black" strokeWidth="2"
            />
            <text x={(MidpointX+ControlPointX)/2} y={(MidpointY+ControlPointY)/2-5} fill="red">{symbols}</text>
        </>
    }
}
export default Edge 
