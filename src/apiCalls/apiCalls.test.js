import React from 'react'
import { getReservations, postReservation } from './apiCalls'

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

describe("postReservation", () => {
  let mockOptions
  const mockReserv = {
    id: 2,
    name: 'Mark',
    date: '12/22',
    time: '5:00',
    number: '5'
  }

  beforeEach(() => {
    mockOptions = {
      method: 'POST',
      body: JSON.stringify(mockReserv),
      headers: {
        'Content-Type': 'application/json'
      }
    }

    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockReserv)
      })
    })
  })

  it("should call fetch with correct url and options", () => {
    postReservation(mockReserv)

    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations', mockOptions)
  })

  it("should return array if fetch is completed correctly", () => {
    expect(postReservation(mockReserv)).resolves.toEqual(mockReserv)
  })

  it("should return error if fetch is completed incorrectly", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(postReservation(mockReserv)).rejects.toEqual(Error('Reservation wasn\'t posted'))
  })

  it("should return error if fetch is failed", () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('Fetch is failed'))
    })
    expect(postReservation(mockReserv)).rejects.toEqual(Error('Fetch is failed'))
  })
})
