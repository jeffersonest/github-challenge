import {combineReducers} from 'redux';
import searchReducer from './search';
import reposReducer from './repos';
import starredReposReducer from './starred';

const Reducers = combineReducers({
    search: searchReducer,
    repos: reposReducer,
    starred:starredReposReducer
});

export default Reducers;