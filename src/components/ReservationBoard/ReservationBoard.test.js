import React from 'react'
import { shallow } from 'enzyme'
import ReservationBoard from './ReservationBoard'

it('renders with all data passed in correctlly', () => {
  const mockProps = [{
    id: 1,
    name: 'Ray',
    date: '12/12',
    time:'5:00',
    number: '5'
  }]

  const board = shallow(
    <ReservationBoard
      reservations={mockProps}
      removeReserv={jest.fn()}/>
  )

  expect(board).toMatchSnapshot()
})
