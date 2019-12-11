import React from 'react'
import './ReservationCard.scss'

const ReservationCard = ({info, removeReserv}) => {
  const {id, name, date, time, number} = info

  const deleteCard = (event) => {
    event.preventDefault()
    removeReserv(id)
  }

  return (
    <section id={id} className="reserv-card">
      <h1>{name}</h1>
      <p>{date}</p>
      <p>{time}</p>
      <p>Number of guests: {number}</p>
      <button onClick={deleteCard}>cancel</button>
    </section>
  )
}

export default ReservationCard
