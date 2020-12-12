import { combineReducers } from 'redux';
import { themeReducer } from './theme';
import { projectListReducer } from './projectList';

export const rootReducer = combineReducers({
    theme : themeReducer,
    projectList : projectListReducer
});