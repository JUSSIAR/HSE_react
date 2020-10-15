import React from 'react'
import './App.css'
import './styles.css'

const compl = ["In progress...", "Done"];
const items = ["task_item2", "task_item1"];

class App extends React.Component {
  state = {
    message : "button pushed",
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
    ]
  }

  change = (id) => {
    alert(this.state.message)
    console.log("button pushed\n")    
    this.setState(cur => ({
      //something changed
    }))
  }

  Generate_item = ({props}) => {
    return (
      <div className = {items[props.completed]}>
        <div className = "block1">
          <h2 className = "header2"> {props.name} </h2>
          <p className = "description"> {props.description} </p>
        </div>
        <div className = "block2">
          <p className = "status"> {compl[props.completed]} </p>
          <button onClick = {this.change}>
            Change status
          </button>
        </div>
      </div>
    )
  }

  render() {
    return (
      <div className = "back">
        <div className = "content">
          <div id = "header1">
            <h1> ToDoList </h1>
          </div>
          <br/><hr/>
          {this.state.list.map(
            it => <this.Generate_item props = {it}/>
          )}
        </div>
      </div>
    )
  }
}

export default App
