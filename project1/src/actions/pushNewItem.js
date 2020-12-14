import { push_new_item } from '../data/actiontypes';

export const actionPushNewItem = (item) => ({
    type: push_new_item,
    payload: item
})
