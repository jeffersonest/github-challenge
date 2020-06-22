import {combineReducers} from 'redux';
import searchReducer from './search';

const Reducers = combineReducers({
    search: searchReducer,
});

export default Reducers;