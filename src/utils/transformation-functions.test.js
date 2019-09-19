const  fns = require('./transformation-functions')
  // cos,
  // sin,
  // tan,
  // identity,
  // add,
  // substitute,
  // multiply,
  // negativeOf

const epsilonCompare = (lhs, rhs) => {
  return lhs >= rhs
    ? lhs - rhs < Number.EPSILON
    : rhs - lhs < Number.EPSILON
}

test('Add 2 + 3 equals 5', () => {
  expect(fns.add(2,3)).toBe(5)
})

test('Add -2 + 3 equals 1', () => {
  expect(fns.add(-2,3)).toBe(1)
})

test('Multiply 2 by 3 equals 6', () => {
  expect(fns.multiply(2,3)).toBe(6)
})

test('Multiply 21 by -3 equals 6', () => {
  expect(fns.multiply(21, -3)).toBe(-63)
})

test('Substitute 9 for 6 equals 6', () => {
  expect(fns.substitute(6, 9)).toBe(9)
})

test('Negative of 9 equals -9', () => {
  expect(fns.negativeOf(9)).toBe(-9)
})

test('Negative of -42 equals 42', () => {
  expect(fns.negativeOf(-42)).toBe(42)
})

test('Identity of 42 equals 42', () => {
  expect(fns.identity(42)).toBe(42)
})

test('Identity of -1729 equals -1729', () => {
  expect(fns.identity(-1729)).toBe(-1729)
})

// constants for trig tests - in radians a 0, 0.5, & 1

// sine
const sin0 =  0.0
const sin05 = 0.4794255386042030
const sin1 =  0.8414709848078965

test('Sine of 0 radians equals 0', () => {
  expect(fns.sin(0)).toBeCloseTo(sin0)
})

test('Sine of 0.5 radians equals 0.4794255386042030', () => {
  expect(fns.sin(0.5)).toBeCloseTo(sin05)
})

test('Sine of 1 radians equals 0.8414709848078965', () => {
  expect(fns.sin(1)).toBeCloseTo(sin1)
})

const cos0 =  1.0000000000000000
const cos05 = 0.8775825618903727
const cos1 =  0.5403023058681397

test('Cosine of 0 radians equals 1', () => {
  expect(fns.cos(0)).toBeCloseTo(cos0)
})

test('Cosine of 0.5 radians equals 0.8775825618903727', () => {
  expect(fns.cos(0.5)).toBeCloseTo(cos05)
})

test('Cosine of 1 radians equals 0.5403023058681397', () => {
  expect(fns.cos(1)).toBeCloseTo(cos1)
})

const tan0 =  0.0
const tan05 = 0.5463024898437905
const tan1 =  1.5574077246549022

test('Tangent of 0 radians equals 0', () => {
  expect(fns.tan(0)).toBeCloseTo(tan0)
})

test('Tangent of 0.5 radians equals 0.5463024898437905', () => {
  expect(fns.tan(0.5)).toBeCloseTo(tan05)
})

test('Tangent of 1 radians equals 1.5574077246549022', () => {
  expect(fns.tan(1)).toBeCloseTo(tan1)
})
