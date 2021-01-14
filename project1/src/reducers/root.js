import { combineReducers } from 'redux';
import { themeReducer } from './theme';
//import { projectListReducer } from './projectList';
import { projectListReducerServerData } from './projectListServerData';

export const rootReducer = combineReducers({
    theme : themeReducer,
    projectList : projectListReducerServerData
});
