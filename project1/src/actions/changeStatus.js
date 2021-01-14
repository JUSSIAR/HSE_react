import { change_status } from '../data/actiontypes';
import { changeTaskStatus } from '../client-server/request';

export const actionChangeStatus = (projectId, taskId) => (dispatch, getState) => {
    //console.log(getState());
    dispatch({
        type: change_status,
        payload: changeTaskStatus(projectId, taskId).result,
    })
}
