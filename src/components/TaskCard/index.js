import './index.css'

const TaskCard = props => {
  const {taskDetails} = props
  const {taskInput, group} = taskDetails
  const text = group.charAt(0).toUpperCase() + group.slice(1).toLowerCase()
  return (
    <>
      <li className="task-item">
        <p className="task-name">{taskInput}</p>
        <p className="task-btn">{text}</p>
      </li>
    </>
  )
}

export default TaskCard
