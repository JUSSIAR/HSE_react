import { getInitState } from '../data/initialState';
import { change_status } from '../data/actiontypes';
import { push_new_item } from '../data/actiontypes';
import { erase_task } from '../data/actiontypes';
import { push_new_project } from '../data/actiontypes';

const validator = {
  invalidProject : (id, projArr) => {
    if (typeof(id) !== "number")
      return undefined;
    const index = projArr.findIndex((proj) => (proj.projectId === id))
    return ((index === -1) ? undefined : index)
  },
  invalidTask : (id, taskArr) => {
    if (typeof(id) !== "number")
      return undefined;
    const index = taskArr.findIndex((task) => (task.id === id))
    return ((index === -1) ? undefined : index)
  }
}

function max(num1, num2) {
  return (num1 < num2) ? num2 : num1;
}

function min(num1, num2) {
  return (num1 > num2) ? num2 : num1;
}

const newIndex = (arr) => {
  let result = -1;
  for (let idx = 0; idx < arr.length; idx++)
    result = max(result, arr[idx].id);
  //console.log(result);
  return result + 1;
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
  return copy
}

export const projectListReducer = (state = getInitState(), action) => {
  switch (action.type) {

    case change_status: {
      const projectId = action.payload.projectId;
      const taskId = action.payload.taskId;
      let listToChange = state.projectList;
      const checked_projectId = validator.invalidProject(projectId, listToChange);
      if (checked_projectId === undefined)
        return state;
      const checked_taskId = validator.invalidTask(taskId, listToChange[checked_projectId].tasks);
      if (checked_taskId === undefined)
        return state;
      let copy = makeCopy(listToChange);
      const newVal = 1 - copy[checked_projectId].tasks[checked_taskId].completed;
      copy[checked_projectId].tasks[checked_taskId].completed = newVal;
      return {
        ...state,
        projectList : copy
      };
    }

    case push_new_item: {
      const projectId = action.payload.projectId;
      let listToChange = state.projectList;
      const checked_projectId = validator.invalidProject(projectId, listToChange);
      if (checked_projectId === undefined)
        return state;
      let copy = makeCopy(listToChange);
      copy[checked_projectId].tasks.push({ 
        id : newIndex(state.list),
        name : action.payload.name,
        description : action.payload.description,
        completed : 0
      });
      return {
        ...state,
        list : copy
      };
    }

    case erase_task: {
      const projectId = action.payload.projectId;
      const taskId = action.payload.taskId;
      let listToChange = state.projectList;
      const checked_projectId = validator.invalidProject(projectId, listToChange);
      if (checked_projectId === undefined)
        return state;
      const checked_taskId = validator.invalidTask(taskId, listToChange[checked_projectId].tasks);
      if (checked_taskId === undefined)
        return state;
      let copy = makeCopy(listToChange);
      copy[checked_projectId].tasks = copy[checked_projectId].tasks.filter(function(obj) {
        return (obj.id != taskId);
      });
      return {
        ...state,
        projectList : copy
      };
    }

    case push_new_project: {
      return state;
    }

    default: {
      return state;
    } 
    
  }
}
