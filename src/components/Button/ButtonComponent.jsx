import './ButtonComponent.scss'

const Button = (props) => {
  return (
    <button className={props.className} onClick={props.onClick}>
      {props.icon}
      {props.text}
    </button>
  )
}
export default Button
