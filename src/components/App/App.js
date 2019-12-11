import React, { Component } from 'react';
import './App.scss';
import { getReservations, postReservation, deleteReservation } from '../../apiCalls/apiCalls'
import ReservationBoard from '../ReservationBoard/ReservationBoard'
import ReservationForm from '../ReservationForm/ReservationForm'

class App extends Component {
  constructor() {
    super()
    this.state = {
      reservations: null,
      sys: {
        isLoaded: false,
        error: null
      }
    }
  }

  componentDidMount() {
    getReservations()
      .then(reservations => this.setState({reservations, sys: {isLoaded: true}}))
      .catch(error => this.setState({sys: {error}}))
  }

  addNewReserv = (newReserv) => {
    postReservation(newReserv)
      .then(reservation => this.setState({reservations: [...this.state.reservations, reservation]}))
      .catch(error => this.setState({sys: {error}}))
  }

  removeReserv = (id) => {
    deleteReservation(id)
      .then(reservations => this.setState({reservations, sys: {isLoaded: true}}))
      .catch(error => this.setState({sys: {error}}))
  }

  render() {
    return (
      <main className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <ReservationForm addNewReserv={this.addNewReserv} />
        {this.state.sys.isLoaded &&
          <ReservationBoard
            reservations={this.state.reservations}
            removeReserv={this.removeReserv}/>}
      </main>
    )
  }
}

export default App;
