import React from 'react'
import './App.css'
import './styles.css'

const compl = ["Done", "In progress..."];
const items = ["task_item1", "task_item2"];

class App extends React.Component {
  state = {
    status : 0
  }
  change = () => {
    this.setState(cur => ({
      status : 1 - cur.status
    }))
  }
  render() {
    return (
      <div className = "back">
        <div className = "content">
          <div id = "header1">
            <h1> ToDoList </h1>
          </div>
          <br/><hr/>
          <div className = {items[this.state.status]}>
            <div className = "block1">
              <h2 className = "header2"> Git </h2>
              <p className = "description"> I have to read git-book </p>
            </div>
            <div className = "block2">
              <p className = "status"> {compl[this.state.status]} </p>
              <button onClick = {this.change}>
                Change status
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
