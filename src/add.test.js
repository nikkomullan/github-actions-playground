const add = require('./add')

describe('add', () => {
  test('adds 2 numbers', () => {
    expect(add(1, 2)).toBe(3)
    expect(add(2, 3)).toBe(5)
  })
})
