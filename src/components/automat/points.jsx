import Point from'./point'
/**
 * Render an representation of the set of points
 * @param {*} props 
 * @param {*} props.points - Set of graph's points
 * @returns List of the <Point> components- representation of the points
 */
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