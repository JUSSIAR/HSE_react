import { defaultTheme } from './themes';
import { GetTasks } from '../data/data';

export const getInitState = () => ({
    theme : defaultTheme,
    projectList : GetTasks()
})
