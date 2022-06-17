import Point from'./point'

const Points=(props)=>{
    const points=props.points
    return (
        <>
            {points.map(point=>(<Point 
                state={point.state} 
                x={point.x} 
                y={point.y}
                label={point.label}
            />))}
        </>
    );
}

export default Points