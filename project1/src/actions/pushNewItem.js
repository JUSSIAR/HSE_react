import { push_new_item } from '../data/actiontypes';

export const actionPushNewItem = (projectId, item) => ({
    type: push_new_item,
    payload: {
        projectId: projectId, 
        item: item
    }
})
