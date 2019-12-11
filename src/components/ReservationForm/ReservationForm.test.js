import React from 'react'
import { shallow } from 'enzyme'
import ReservationForm from './ReservationForm'

describe("ReservationForm", () => {
  let form, instance
  const addNewReserv = jest.fn()

  beforeEach(() => {
    form = shallow(
      <ReservationForm
        addNewReserv={addNewReserv}/>
    )
    instance = form.instance()
  })

  it('renders with all data passed in correctlly', () => {
    expect(form).toMatchSnapshot()
  })

  describe("updateEnteredData", () => {
    it('should update name state', () => {
      expect(form.state('name')).toEqual('')

      instance.updateEnteredData('name', 'Mark')

      expect(form.state('name')).toEqual('Mark')
    })

    it('should update time state', () => {
      expect(form.state('time')).toEqual('')

      instance.updateEnteredData('time', '5:00')

      expect(form.state('time')).toEqual('5:00')
    })

    it('should update date state', () => {
      expect(form.state('date')).toEqual('')

      instance.updateEnteredData('date', '12/12')

      expect(form.state('date')).toEqual('12/12')
    })

    it('should update number state', () => {
      expect(form.state('number')).toEqual('')

      instance.updateEnteredData('number', '5')

      expect(form.state('number')).toEqual('5')
    })
  })

  describe("submitReserv", () => {
    it('should be called by button click', () => {
      const spy = jest.spyOn(instance, 'submitReserv').mockImplementation(() => {})
      instance.forceUpdate()

      form.find('button').simulate(
        'click',
        {preventDefault: jest.fn()}
      )

      expect(spy).toHaveBeenCalled()
    })

    it('should call addNewReserv prop', () => {
      instance.submitReserv({preventDefault: jest.fn()})

      expect(addNewReserv).toHaveBeenCalled()
    })

    it('should call clearInputs', () => {
      const spy = jest.spyOn(instance, 'clearInputs').mockImplementation(() => {})
      instance.forceUpdate()

      instance.submitReserv({preventDefault: jest.fn()})

      expect(spy).toHaveBeenCalled()
    })
  })
})
