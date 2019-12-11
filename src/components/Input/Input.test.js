import React from 'react'
import { shallow } from 'enzyme'
import Input from './Input'

describe("Input", () => {
  let input
  const action = jest.fn()

  beforeEach(() => {
    input = shallow(
      <Input
      key='name'
      type='name'
      currentValue='Ray'
      action={action} />
    )
  })

  it('renders with all data passed in correctlly', () => {
    expect(input).toMatchSnapshot()
  })
  
  it('should call action prop when changes are happening', () => {
    input.find('input').simulate(
      'change',
      {target: {value: 'Mark'}}
    )

    expect(action).toHaveBeenCalled()
  })
})
