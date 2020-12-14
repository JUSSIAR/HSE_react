import { change_status } from '../data/actiontypes';

export const actionChangeStatus = (id) => ({
    type: change_status,
    payload: id
});
