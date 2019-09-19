const cos = valRadians => Math.cos(valRadians)
const sin = valRadians => Math.sin(valRadians)
const tan = valRadians => Math.tan(valRadians)

const identity = val => val
const add = (lhs, rhs) => lhs + rhs
const substitute = (val, substVal) => substVal

const multiply = (lhs, rhs) => lhs * rhs
const negativeOf = val => multiply(val, -1)

const epsilonCompare = (lhs, rhs) => {
  return lhs >= rhs
    ? lhs - rhs < Number.EPSILON
    : rhs - lhs < Number.EPSILON
}

module.exports = {
  cos,
  sin,
  tan,
  identity,
  add,
  substitute,
  multiply,
  negativeOf,
  epsilonCompare
}
