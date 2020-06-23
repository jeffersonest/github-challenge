const initialState = {
    data: [],
}

const starredReposReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOADSTARREDREPOS':          
            return (state =  {...state, data : action.payload.data});            
        default:
            return (state);
    }
}

export default starredReposReducer;