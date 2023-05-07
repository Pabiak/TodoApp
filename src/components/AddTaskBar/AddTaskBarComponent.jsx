import './AddTaskBarComponent.scss'
import '../ButtonBar/ButtonBarComponent'
import {MdFormatListBulletedAdd} from 'react-icons/md'

const AddTaskBar = (props) => {
  return (
    <>
    <input
      type="text"
      placeholder='Add a new task'
      className="addTaskBar"
      onChange={props.onChange}
      onKeyDown={props.onKeyDown}
    />
    </>
  )
}
export default AddTaskBar;
