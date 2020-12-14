import { push_new_project } from '../data/actiontypes';

export const actionPushNewProject = (project) => ({
    type: push_new_project,
    payload: project
});
