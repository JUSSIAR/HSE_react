import { load_projects } from '../data/actiontypes';
import { loadProjects } from '../client-server/request';

export const actionLoadProjects = () => (dispatch, getState) => {
    //console.log(getState());
    return loadProjects().then((response) => {
        dispatch({
            type : load_projects,
            payload : response
        });
        return response;
    })
}