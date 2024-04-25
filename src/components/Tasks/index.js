import {ListItem, TaskName, TaskCategory} from './styledComponents'

const Tasks = props => {
  const {eachTaskDetails} = props
  const {taskName, taskCategory} = eachTaskDetails

  return (
    <ListItem>
      <TaskName>{taskName}</TaskName>
      <TaskCategory>{taskCategory}</TaskCategory>
    </ListItem>
  )
}

export default Tasks
