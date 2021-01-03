import { push_new_project } from '../data/actiontypes';
import { pushProject } from '../client-server/request';

export const actionPushNewProject = (project) => (dispatch, getState) => {
    //console.log(getState());
    dispatch({
        type: push_new_project,
        payload: pushProject(project).result,
    })
}
