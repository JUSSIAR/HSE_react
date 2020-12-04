import { erase_task } from '../data/actiontypes';

export const actionEraseTask = (id) => ({
    type: erase_task,
    payload: id
})