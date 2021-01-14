import { getInitState } from '../data/initialState';
import { load_projects } from '../data/actiontypes';
import { load_tasks } from '../data/actiontypes';

const validator = {
  invalidProject : (id, projArr) => {
    if (typeof(id) !== "number")
      return undefined;
    const index = projArr.findIndex((proj) => (proj.projectId === id))
    return ((index === -1) ? undefined : index)
  },
}

const makeCopy = (arr) => {
  let copy = arr.map(it => {
    return {
      projectId: it.projectId,
      projectName: it.projectName,
      tasks: it.tasks.map(elem => {
        return {
          id : elem.id,
          name : elem.name,
          description : elem.description,
          completed : elem.completed
        }
      })
    }
  })
  return copy;
}

export const projectListReducerServerData = (state = getInitState(), action) => {
  switch (action.type) {

    case load_projects: {
      return {
        ...state,
        projectList: action.payload
      };
    }

    case load_tasks: {
      const copy = makeCopy(state.projectList);
      const id = validator.invalidProject(action.payload.projectId, copy);
      if (id === undefined) {
        return state;
      }
      copy[id].tasks = action.payload.response;
      return {
        ...state,
        projectList: copy
      };
    }

    default: {
      return state;
    } 
    
  }
}
