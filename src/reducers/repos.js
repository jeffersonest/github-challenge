const initialState = {
    data: [],
}

const reposReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADREPOS':          
            return (state =  {...state, data : action.payload.data});            
        default:
            return (state);
    }
}

export default reposReducer;