import { change_status } from '../data/actiontypes';

export const actionChangeStatus = (projectId, taskId) => ({
    type: change_status,
    payload: {
        projectId: projectId, 
        taskId: taskId
    }
});
