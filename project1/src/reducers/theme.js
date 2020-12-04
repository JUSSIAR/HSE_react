import { bindActionCreators } from 'redux';
import { getInitState } from '../data/initialState';
import { change_theme } from '../data/actiontypes';

export const themeReducer = (state = getInitState(), action) => {
    switch (action.type) {
        case change_theme: {
            return {
                ...state,
                theme: action.payload
            };
        }
        default: {
            return state;
        } 
    }
}