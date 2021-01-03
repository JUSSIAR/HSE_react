import { push_new_item } from '../data/actiontypes';
import { pushTask } from '../client-server/request';

export const actionPushNewItem = (projectId, item) => (dispatch, getState) => {
    //console.log(getState());
    dispatch({
        type: push_new_item,
        payload: pushTask(projectId, item).result,
    })
}
