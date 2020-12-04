import { change_theme } from '../data/actiontypes';

export const themeChange = (theme) => ({
    type: change_theme,
    payload: theme
})