import { useState } from 'react'
import Button from '../Button/ButtonComponent'

const ButtonBar = (props) => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  return (
    <div className="buttons">
      <Button
        className={`filter ${activeFilter === 'all' ? 'clicked' : ''}`}
        text={'All'}
        onClick={() => {
          setActiveFilter('all')
          props.onFilterClick('all')
        }}
      />
      <Button
        className={`filter ${activeFilter === 'pending' ? 'clicked' : ''}`}
        text={'Pending'}
        onClick={() => {
          setActiveFilter('pending')
          props.onFilterClick('pending')
        }}
      />
      <Button
        className={`filter ${activeFilter === 'completed' ? 'clicked' : ''}`}
        text={'Completed'}
        onClick={() => {
          setActiveFilter('completed')
          props.onFilterClick('completed')
        }}
      />

      <Button
        className={'clear'}
        text={'Clear all'}
        onClick={() => props.onClearClick()}
      />
    </div>
  )
}
export default ButtonBar
