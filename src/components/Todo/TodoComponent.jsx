import AddTaskBar from '../AddTaskBar/AddTaskBarComponent'
import ButtonBar from '../ButtonBar/ButtonBarComponent'
import TaskDashboard from '../TaskDashBoard/TaskDashBoardComponent'

import { useState, useEffect } from 'react'

import './Todo.scss'

const TodoList = () => {
  const [input, setInput] = useState('')
  const [todoList, setTodoList] = useState([])
  const [filter, setFilter] = useState('all')

  useEffect(() => {
    if (todoList.length > 0) {
      console.log(JSON.stringify(todoList))
    }
  }, [todoList])

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      console.log(input)
      setTodoList([...todoList, { title: input, completed: false }])
      event.target.value = ''
    }
  }

  const handleTaskClick = (index) => {
    const newTodoList = [...todoList]
    newTodoList[index].completed = !newTodoList[index].completed
    setTodoList(newTodoList)
  }

  const handleFilterClick = (newFilter) => {
    setFilter(newFilter)
  }

  const handleClearClick = () => {
    setTodoList([])
  }

  let filteredTasks = todoList

  if (filter === 'pending') {
    filteredTasks = todoList.filter((task) => !task.completed)
  } else if (filter === 'completed') {
    filteredTasks = todoList.filter((task) => task.completed)
  } else {
    filteredTasks = todoList
  }

  const handleDeleteClick = (index) => {
    const newTodoList = [...todoList]
    newTodoList.splice(index, 1)
    setTodoList(newTodoList)
  }

  const handleEditClick = (index, title) => {
    const newTodoList = [...todoList]
    newTodoList[index].title = title
    setTodoList(newTodoList)
  }

  return (
    <div className="todoList">
      <div className="topBar">
        <AddTaskBar onChange={handleInputChange} onKeyDown={handleKeyDown} />
        <ButtonBar
          onFilterClick={handleFilterClick}
          onClearClick={handleClearClick}
        />
      </div>
      <div className="taskBar">
        <TaskDashboard
          todoList={filteredTasks}
          onTaskClick={handleTaskClick}
          onDeleteClick={handleDeleteClick}
          onEditClick={handleEditClick}
        />
      </div>
    </div>
  )
}

export default TodoList
