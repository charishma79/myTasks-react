import './index.css'

const TaskCard = props => {
  const {taskDetails} = props
  const {taskInput, group} = taskDetails
  return (
    <>
      <li className="task-item">
        <p className="task-name">{taskInput}</p>
        <p className="task-btn">{group}</p>
      </li>
    </>
  )
}

export default TaskCard
