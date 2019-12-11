export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(response => {
      if (!response.ok) {
        throw Error('Reservations were not fetched');
      }
      return response.json();
  })
}

export const postReservation = (newReserv) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newReserv),
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => {
      if (!response.ok) {
        throw Error('Reservation wasn\'t posted');
      }
      return response.json();
    })
}

export const deleteReservation = (id) => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(() => getReservations())
}
