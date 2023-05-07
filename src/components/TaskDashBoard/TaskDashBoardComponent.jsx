import Task from "../Task/TaskComponent"
import './TaskDashBoardComponent.scss'

const TaskDashboard = (props) => {
  return (
    <div className="tasks">
      {props.todoList.map((task, index) => {
        return (
          <Task
            key={task.title}
            title={task.title}
            completed={task.completed}
            onClick={() => props.onTaskClick(index)}
            onDeleteClick={() => props.onDeleteClick(index)}
            onEditClick={(newTitle) => props.onEditClick(index, newTitle)}
          />
        )
      })}
    </div>
  )
}
export default TaskDashboard
