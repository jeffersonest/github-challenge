const initialState = {
    username: '',
    data: {},
    status: false
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH':          
            return (state =  {...state, username : action.payload.data.login, data : action.payload.data}); 
        case 'OPENLIST':          
            return (state =  {...state, status : true}); 
        case 'CLOSELIST':          
        return (state =  {...state, status : false});            
        default:
            return (state);
    }
}

export default searchReducer;