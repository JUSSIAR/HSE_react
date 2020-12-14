import { getInitState } from '../data/initialState';
import { change_status } from '../data/actiontypes';
import { push_new_item } from '../data/actiontypes';
import { erase_task } from '../data/actiontypes';

const validator = {
  invalid : (id, taskArr) => {
    if (typeof(id) !== "number")
      return true;
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

export const taskListReducer = (state = getInitState(), action) => {
  switch (action.type) {

    case change_status: {
      const id = action.payload;
      const checked_id = validator.invalid(id, state.list);
      if (checked_id === undefined)
        return state;
      let copy = state.list.map(it => {
        return {
          id : it.id,
          name : it.name,
          description : it.description,
          completed : it.completed
        };
      })
      const newVal = 1 - copy[checked_id].completed;
      copy[checked_id].completed = newVal;
      return {
        ...state,
        list : copy
      };
    }

    case push_new_item: {
      const new_list = [
        ...state.list,
        { 
          id : newIndex(state.list),
          name : action.payload.name,
          description : action.payload.description,
          completed : 0
        }
      ];
      return {
        ...state,
        list : new_list
      };
    }

    case erase_task: {
      const id = action.payload;
      return {
        ...state,
        list : state.list.filter(function(obj) {
          return (obj.id !== id);
        }
      )};
    }

    default: {
      return state;
    } 
    
  }
}
