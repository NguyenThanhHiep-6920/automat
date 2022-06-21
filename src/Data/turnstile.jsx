/**
 * Render graph's initial data for turnstile page
 * @returns library
 */
const turnstile={
    "points":[
        {"id":0,"x":100,"y":300,"state":"q0","label":"initialState","meaning":"Locked"},
        {"id":1,"x":600,"y":300,"state":"q1","label":"finalState","meaning":"Unlocked"}
    ],
    "edges":[
        {"id":0,"startId":0,"endId":1,"symbols":"a"},
        {"id":1,"startId":1,"endId":1,"symbols":"a"},
        {"id":2,"startId":1,"endId":0,"symbols":"b"},
        {"id":3,"startId":0,"endId":0,"symbols":"b"}
    ],
    "symbols":[
        {"id":0,"name":"a","label":"Coin"},
        {"id":1,"name":"b","label":"Push"}
    ],
    "names":[
        {"automat":"Turnstile"}
    ]
}
export default turnstile