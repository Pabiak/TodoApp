import PopupMenu from '../PopupMenu/PopupMenuComponent'
import { MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox } from 'react-icons/md'
import { BsThreeDots } from 'react-icons/bs'
import { useState } from 'react'
import './Task.scss'

const Task = (props) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [editing, setEditing] = useState(false)
  const [newTitle, setNewTitle] = useState(props.title)

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen)
  }

  const handleEditClick = () => {
    setEditing(true)
  }

  const handleTitleChange = (event) => {
    setNewTitle(event.target.value)
  }

  const handleTitleSubmit = () => {
    props.onEditClick(newTitle)
    setEditing(false)
  }

  return (
    <>
      <div className={`task ${props.completed ? 'completed' : ''}`}>
        {props.completed ? (
          <input type="checkbox" checked onClick={props.onClick} className="checkbox selected"/>
          //<MdOutlineCheckBox onClick={props.onClick} className="checkbox selected" />
        ) : (
          <input type="checkbox" onClick={props.onClick} className="checkbox"/>
          //<MdOutlineCheckBoxOutlineBlank onClick={props.onClick} className="checkbox" />
        )}
        {editing ? (
          <input
            type="text"
            value={newTitle}
            onChange={handleTitleChange}
            onBlur={handleTitleSubmit}
          />
        ) : (
          props.title
        )}
        <BsThreeDots onClick={handleMenuClick} className='popupDots' />
        {menuOpen && (
          <PopupMenu
          onDeleteClick={props.onDeleteClick}
          onEditClick={handleEditClick}
        />
        )}
      </div>
    </>
  )
}
export default Task
