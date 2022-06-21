import {useState} from 'react'
/**
 * Render word test of the automaton
 * @param {*} props 
 * @param {*} props.graphData - Graph's data
 * @returns <input> tag for tested word, <p> tag for show the result
 */
const WordTest=(props)=>{
    const graphData=props.graphData;
    const [conclusion,setConclusion]=useState("");
    const NextId=(startId,symbol)=>{
        let result="";
        let isExisted=false;
        for(let i=0;i<graphData.edges.length;++i){
            if(graphData.edges[i].startId===startId&&graphData.edges[i].symbols.split(",").includes(symbol)){
                result= graphData.points.filter(point=>(point.id===graphData.edges[i].endId))[0].id;
                isExisted=true;
            }
        }
        if(!isExisted){
            result=NaN;
        }
        return result;
    }
    const HandleWordTest=(input)=>{
        if(input!==undefined&&input!==""){
            const word=input;
            let startId=0; //mac dinh la 0, nhung phong truong hop khac
            let endId=0;
            
            for(let i=0;i<graphData.points.length;++i){
                if(graphData.points[i].label==="initialState"){
                    startId=graphData.points[i].id
                }
            }
            for(let i=0;i<word.length;++i){
                endId=NextId(startId,word[i]);
                if(isNaN(endId)){
                    setConclusion("Automat nepřijímá slovo "+word);
                }
                else{
                    startId=endId;
                }
            }
            if(!isNaN(endId)){
                if(graphData.points.filter(point=>(point.id===endId))[0].label==="finalState"){
                    setConclusion("Automat přijímá slovo "+word);
                }
                else{
                    setConclusion("Automat nepřijímá slovo "+word);
                }
            }
        }
    }
    return(
        <>  
            <b>4. Slovo je prijimano automatem</b>
            <br/>
            <label>Zadej slovo</label>
            <input type="search" onChange={(e)=>HandleWordTest(e.target.value)}></input>
            <p>Výsledek: {conclusion}</p>
        </>
    );
}

export default WordTest