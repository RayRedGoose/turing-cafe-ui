import React from 'react'
import './Input.scss'

const Input = ({type, action, currentValue}) => {

  const makeChanges = (event) => {
    action(type, event.target.value)
  }

  const placeholder = (type === 'number') ? 'number of guests' : type
  return (
    <input
      className="reserv-input"
      type="text"
      name={type}
      value={currentValue}
      placeholder={placeholder}
      onChange={makeChanges}/>
  )
}

export default Input
