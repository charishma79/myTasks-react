import './index.css'

const TaskButtons = props => {
  const {tagDetails, updateButton, getFilteredTasks} = props
  const {displayText, optionId, isActive} = tagDetails

  const updateTextButton = () => {
    getFilteredTasks(optionId)
  }

  const onClickButton = () => {
    updateButton(optionId)
  }

  const activeButton = isActive ? 'filled-btn' : 'tag-btn'
  return (
    <li className="tag-name" onClick={updateTextButton}>
      <button className={activeButton} type="button" onClick={onClickButton}>
        {displayText}
      </button>
    </li>
  )
}
export default TaskButtons
