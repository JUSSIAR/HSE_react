import React from 'react'
import './App.css'
import './styles.scss'
import NewCase from './components/newCase/newCase.js'
import TaskList from './components/taskList/taskList.js'

const listOfTasks = [
  {
    id: 0,
    name: 'Git',
    description: 'I have to read git-book',
    completed: 1
  },
  {
    id: 1,
    name: 'Math',
    description: 'I have to study hard',
    completed: 0
  },
  {
    id: 2,
    name: 'Web',
    description: 'I have to develop ToDoList',
    completed: 0
  },
  {
    id: 3,
    name: 'Sport',
    description: 'I have to go to a gym',
    completed: 1
  },
  {
    id: 4,
    name: 'Household',
    description: 'I have to wash up',
    completed: 0
  }
]

const validator = {
  invalid : (id, taskArr) => {
    if (typeof(id) != "number")
      return true;
    const index = taskArr.findIndex((task) => (task.id === id))
    return ((index === -1) ? undefined : index)
  }
}

class MyToDoList extends React.Component {
  state = {
    list : listOfTasks,
    form : {
      name: "",
      description: "" 
    }
  }

  changeStatus = (id) => {
    const checked_id = validator.invalid(id, this.state.list)
    if (checked_id === undefined)
      return
    this.setState(cur => {
      let copy = cur.list.map(it => {
        return {
          id : it.id,
          name : it.name,
          description : it.description,
          completed : it.completed
        }
      })
      const newVal = 1 - copy[checked_id].completed
      copy[checked_id].completed = newVal
      return {list : copy}
    })
  }

  changeNewName = (event) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        form : {
          ...cur.form,
          name : value,
        }
      }
    })
  }

  changeNewDescription = (event) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        form : {
          ...cur.form,
          description : value
        }
      }
    })
  }

  pushNewItem = () => {
    this.setState(cur => {
      const new_list = [
        ...cur.list,
        { 
          id : cur.list.length,
          name : cur.form.name,
          description : cur.form.description,
          completed : 0
        }
      ]
      return {
        list : new_list
      }
    })
  }

  eraseTask = (id) => {
    this.setState(cur => {
      return {list : cur.list.filter(function(obj) {
        return (obj.id !== id);
      })}
    })
  }

  render() {
    return (
      <div className = "back">
        <div className = "content">
          <div id = "header1">
            <h1> ToDoList </h1>
          </div>
          <TaskList
            list = {this.state.list}
            click = {this.changeStatus}
            erase = {this.eraseTask}
          />
          <NewCase
            props = {this.state.form}
            changeName = {this.changeNewName}
            changeDescription = {this.changeNewDescription}
            click = {this.pushNewItem}
          />
        </div>
      </div>
    )
  }
}

export default MyToDoList
