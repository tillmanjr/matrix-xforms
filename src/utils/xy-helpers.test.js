const {
  xFromXY,
  yFromXY
} = require('./xy-helpers')

test('xFromXY = 2 where XY = [2,3]', () => {
  let xy = [2,3]
  expect(xFromXY(xy)).toBe(2)
})

test('yFromXY = 3 where XY is [2,3]', () => {
  let xy = [2,3]
  expect(yFromXY(xy)).toBe(3)
})