import React, { Component } from 'react'
import './ReservationForm.scss'
import Input from '../Input/Input'

class ReservationForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      date: '',
      time: '',
      number: ''
    }
  }

  updateEnteredData = (type, value) => {
    switch (type) {
      case 'name':
        this.setState({name: value})
        break;
      case 'date':
        this.setState({date: value})
        break;
      case 'time':
        this.setState({time: value})
        break;
      case 'number':
        this.setState({number: value})
        break;
      default:
        this.setState({error: 'Unvalid type'})
        break;
    }
  }

  submitReserv = (event) => {
    event.preventDefault()
    const newReserv = {...this.state, id: Date.now()}
    this.props.addNewReserv(newReserv)
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      number: ''
    })
  }

  render() {
    const inputs = Object.keys(this.state).map(key => {
      return (
        <Input
          key={key}
          type={key}
          currentValue={this.state[key]}
          action={this.updateEnteredData} />
      )
    })

    return (
      <form className="reserv-form">
        {inputs}
        <button onClick={this.submitReserv}>make reservation</button>
      </form>
    )
  }
}

export default ReservationForm
