import Button from '../Button/ButtonComponent'
import { BsTrash, BsPencil } from 'react-icons/bs'
import './PopupMenu.scss'

const PopupMenu = (props) => {
  return (
    <div className="popupMenu">
      <Button
        text={'Edit'}
        icon={<BsPencil className='icon'/>}
        onClick={props.onEditClick}
        className="edit"
      />
      <Button
        text={'Delete'}
        icon={<BsTrash className='icon'/>}
        onClick={props.onDeleteClick}
        className="delete"
      />
    </div>
  )
}
export default PopupMenu
