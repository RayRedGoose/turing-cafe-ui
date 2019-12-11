import React from 'react'
import { getReservations } from './apiCalls'

describe("getReservations", () => {
  let mockReservs = [{
    id: 0,
    name: 'Ray',
    date: '12/12',
    time: '3:00',
    number: '3'
  }]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReservs)
      })
    })
  })

  it("should call fetch with correct url", () => {
    getReservations()

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  })

  it("should return array if fetch is completed correctly", () => {
    expect(getReservations()).resolves.toEqual(mockReservs)
  })

  it("should return error if fetch is completed incorrectly", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getReservations()).rejects.toEqual(Error('Reservations were not fetched'))
  })

  it("should return error if fetch is failed", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Fetch is failed'))
    })
    expect(getReservations()).rejects.toEqual(Error('Fetch is failed'))
  })
})
