import { erase_task } from '../data/actiontypes';
//import { eraseTask } from '../client-server/request';

export const actionEraseTask = (projectId, taskId) => ({
    type: erase_task,
    payload: {
        projectId: projectId, 
        taskId: taskId
    }
})