import React from 'react'
import './ReservationBoard.scss'
import ReservationCard from '../ReservationCard/ReservationCard'

const ReservationBoard = ({reservations, removeReserv}) => {

  const cards = reservations.map(reserv => (
    <ReservationCard
      key={reserv.id}
      info={reserv}
      removeReserv={removeReserv}/>
  ))

  return (
    <section className="reserv-board">
      { cards }
    </section>
  )
}

export default ReservationBoard
