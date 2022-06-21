/**
 * Render graph's initial data for automat page
 * @returns library
 */
const initialData={
    'points':[
        {'id':0,'x':300,'y':400, 'state':'q0', 'label':'initialState', 'meaning':'meaning of q0'},
        {'id':1,'x':600,'y':200, 'state':'q1', 'label':'commonState','meaning':'meaning of q1'},
        {'id':2,'x':600,'y':400, 'state':'q2', 'label':'finalState','meaning':'meaning of q2'}
    ],
    'edges':[
        {'id':0,'startId':0,'endId':0, 'symbols':'a'},
        {'id':1,'startId':0,'endId':1, 'symbols':'b'},
        {'id':2,'startId':1,'endId':2, 'symbols':'b'},
        {'id':3,'startId':2,'endId':1, 'symbols':'a'}
    ],
    "symbols":[
        {'id':0,'name':'a','label':'meaning of a'},
        {'id':1,'name':'b','label':'meaning of b'}
    ],
    "names":[
        {"automat":"Example","user":""}
    ]
};

export default initialData