import { load_tasks } from '../data/actiontypes';
import { loadTasks } from '../client-server/request';

export const actionLoadTasks = (projectId) => (dispatch, getState) => {
    //console.log(getState());
    return loadTasks(projectId).then((response) => {
        dispatch({
            type : load_tasks,
            payload : {
                projectId,
                response
            }
        });
        return response;
    })
} 