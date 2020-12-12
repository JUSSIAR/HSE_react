import { erase_task } from '../data/actiontypes';

export const actionEraseTask = (projectId, taskId) => ({
    type: erase_task,
    payload: {
        projectId: projectId, 
        taskId: taskId
    }
})