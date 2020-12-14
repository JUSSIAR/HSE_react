import { combineReducers } from 'redux';
import { themeReducer } from './theme';
import { taskListReducer } from './taskList';

export const rootReducer = combineReducers({
    theme : themeReducer,
    list : taskListReducer
});