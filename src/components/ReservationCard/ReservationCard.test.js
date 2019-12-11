import React from 'react'
import { shallow } from 'enzyme'
import ReservationCard from './ReservationCard'

describe("ReservationCard", () => {
  let card, mockProps
  const removeReserv = jest.fn()

  beforeEach(() => {
    mockProps = {
      id: 1,
      name: 'Ray',
      date: '12/12',
      time:'5:00',
      number: '5'
    }

    card = shallow(
      <ReservationCard
        key={mockProps.id}
        info={mockProps}
        removeReserv={removeReserv} />
    )
  })

  it('renders with all data passed in correctlly', () => {
    expect(card).toMatchSnapshot()
  })

  it('should call removeReserv prop when button is clicked', () => {
    card.find('button').simulate(
      'click',
      {preventDefault: jest.fn()}
    )

    expect(removeReserv).toHaveBeenCalled()
  })
})
