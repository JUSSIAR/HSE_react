import { change_theme } from '../data/actiontypes';

export const actionChangeTheme = (theme) => ({
    type: change_theme,
    payload: theme
})
