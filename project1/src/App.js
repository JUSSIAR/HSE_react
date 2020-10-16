import React from 'react'
import './App.css'
import './styles.css'

const compl = ["In progress...", "Done"];
const items = ["task_item2", "task_item1"];

const Generate_item = ({props, click}) => {
  return (
    <div className = {items[props.completed]}>
      <div className = "block1">
        <h2 className = "header2"> {props.name} </h2>
        <p className = "description"> {props.description} </p>
      </div>
      <div className = "block2">
        <p className = "status"> {compl[props.completed]} </p>
        <button onClick = {() => click(props.id)}>
          Change status
        </button>
      </div>
    </div>
  )
}

const Input_element = ({
  label,
  type,
  value,
  onChange,
  placeholder,
  min = "0",
  max = "1",
}) => {
  return (
    <div className = "person">
      <label> {label} </label>
      <input
        type = {type}
        value = {value}
        onChange = {onChange}
        placeholder = {placeholder}
        min = {(type == "number") ? min : undefined}
        max = {(type == "number") ? max : undefined}
      /> <br/>
    </div>
  )
}

const NewCase = ({props, change, click}) => {
  return (
    <div className = "newCase">
      <form>
        <fieldset>
          <legend> Creating Form </legend>
          <Input_element
            label = "Name"
            type = "text"
            value = {props.name}
            onChange = {change}
            placeholder = "name..."
          />
          <Input_element
            label = "Description"
            type = "text"
            value = {props.description}
            onChange = {change}
            placeholder = "description..."
          />
          <Input_element
            label = "Completed"
            type = "number"
            min = "0"
            max = "1"
            value = "0"
            onChange = {change}
          />
          <button onClick = {click}>
            Push a new case!
          </button>
        </fieldset>
      </form>
    </div>
  )
}

class MyToDoList extends React.Component {
  state = {
    list : [
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
    ],
    list_size: 5,
    form : {
      name: "",
      description: "",
      completed: 0    
    }
  }

  Change = (id) => {
    this.setState(cur => {
      let copy = cur.list.map(it => {
        return ({
          id : it.id,
          name : it.name,
          description : it.description,
          completed : it.completed
        })
      })
      const new_val = 1 - copy[id].completed
      copy[id].completed = new_val
      return {
        list : copy,
        list_size : cur.list_size,
        form : cur.form
      }
    })
  }

  Input_field = (event, field) => {
    const { value } = event.target
    this.setState(cur => {
      return {
        list : cur.list,
        list_size : cur.list_size,
        form : cur.form
      }
    })
  }

  Push_new_item = () => {
    this.setState(cur => {
      const new_list = [
        ...cur.list,
        { 
          id : cur.list_size,
          name : cur.form.name,
          description : cur.form.description,
          completed : cur.form.completed 
        }
      ]
      return ({
        list : new_list,
        list_size : cur.list_size + 1,
        form : {
          name : cur.form.name,
          description : cur.form.description,
          completed : cur.form.completed
        }
      })
    })
  }

  render() {
    return (
      <div className = "back">
        <div className = "content">
          <div id = "header1">
            <h1> ToDoList </h1>
          </div>
          <br/><hr/>
          <div>
            {this.state.list.map(it => 
              <Generate_item 
                props = {it}
                click = {this.Change}  
              />
            )}
          </div>
          <br/><hr/>
          <NewCase
            props = {this.state.form}
            change = {this.Input_field}
            click = {this.Push_new_item}
          />
        </div>
      </div>
    )
  }
}

export default MyToDoList
