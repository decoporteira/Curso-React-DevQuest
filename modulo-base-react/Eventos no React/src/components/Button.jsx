import React from "react"
import './button.css'

// const Button = (props) => {
//   return (
//     <button className="button">{props.label}</button>
//   )
// }
const sayHello = () => {
  console.log('Olá')
}

class Button extends React.Component {
  render() {
    return <button className="button" onClick={sayHello}>{this.props.label}</button>
  }
}

Button.defaultProps = {
  label: 'Clique aqui'
}

export default Button;