import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import TaskCard from '../TaskCard'
import TaskButtons from '../TaskButtons'

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
    isActive: false,
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
    isActive: false,
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
    isActive: false,
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
    isActive: false,
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
    isActive: false,
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
    isActive: false,
  },
]

class TaskItem extends Component {
  state = {
    taskInput: '',
    activeOptionId: tagsList[0].optionId,
    tasksList: [],
    newTagsList: tagsList,
  }

  onEnterTask = event => {
    this.setState({taskInput: event.target.value})
  }

  onChangeOption = event => {
    this.setState({activeOptionId: event.target.value})
  }

  onHandleTask = event => {
    event.preventDefault()
    const {activeOptionId, taskInput} = this.state
     const textDisplay = tagsList.filter(
      each => each.optionId === activeOptionId,
    )
    const newTask = {
      id: v4(),
      group: textDisplay[0].displayText,
      taskInput,
    }
    this.setState(prevState => ({
      tasksList: [...prevState.tasksList, newTask],
      taskInput: '',
      activeOptionId: tagsList[0].optionId,
    }))
  }

  updateButton = id => {
    this.setState(prevState => ({
      newTagsList: prevState.newTagsList.map(each => {
        if (id === each.optionId) {
          return {...each, isActive: !each.isActive}
        }
        return each
      }),
    }))
  }

    getFilteredTasks = text => {
    const {tasksList, isFiltered} = this.state
    if (isFiltered) {
      return tasksList.filter(each => each.group === text)
    }
    return tasksList
  }

  render() {
    const {taskInput, activeOptionId, tasksList, newTagsList} = this.state
    console.log(tasksList)
      const filtered = this.getFilteredTasks()

    return (
      <div className="bg-container">
        <div className="my-task-container">
          <h1 className="heading">Create a task!</h1>
          <form className="form-container" onSubmit={this.onHandleTask}>
            <div className="input-container">
              <label htmlFor="task" className="task-label">
                Task
              </label>
              <input
                value={taskInput}
                placeholder="Enter the task here"
                className="task-input"
                id="task"
                onChange={this.onEnterTask}
              />
            </div>
            <label htmlFor="option-label" className="task-label">
              Tags
            </label>
            <select
              className="select-task"
              value={activeOptionId}
              id="option-label"
              onChange={this.onChangeOption}
            >
              {tagsList.map(eachOption => (
                <option
                  key={eachOption.optionId}
                  value={eachOption.optionId}
                  className="select-option"
                >
                  {eachOption.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-btn">
              Add Task
            </button>
          </form>
        </div>
        <div className="my-task-card-item">
          <h1 className="tags">Tags</h1>
          <ul className="unordered-list">
            {newTagsList.map(eachTag => (
              <TaskButtons
                key={eachTag.optionId}
                tagDetails={eachTag}
                updateButton={this.updateButton}
                getFilteredTasks={this.getFilteredTasks}
              />
            ))}
          </ul>

          <h1 className="task-heading">Tasks</h1>
          {filtered.length === 0 ? (
            <p className="no-tasks">No Tasks Added Yet</p>
          ) : (
            <ul className="task-container">
              {filtered.map(eachTask => (
                <TaskCard key={eachTask.id} taskDetails={eachTask} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default TaskItem
