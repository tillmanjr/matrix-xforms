const fns = require('./transformation-functions')
const xyhelpers = require('./xy-helpers')

const computeX = (x, y, xForm) => {
  return fns.multiply(xForm.a, x) + fns.multiply(xForm.c, y) + xForm.tx
}
const computeY = (x, y, xForm) => {
  return fns.multiply(xForm.b, x) + fns.multiply(xForm.d, y) + xForm.ty
}
const transformXY = (xy, xForm) => {
  const x = xyhelpers.xFromXY(xy)
  const y = xyhelpers.yFromXY(xy)
  const newX = computeX(x, y, xForm)
  const newY = computeY(x, y, xForm)
  return [
    newX,
    newY
  ]
}

const transformXYs = (xys, xForm) => {
  let result = []
  for (let i = 0; i < xys.length; i++) {
    const newXY = transformXY(xys[i], xForm)
    result.push(newXY)
  }
  return result
}

module.exports.transform = (xys, xForm) => transformXYs(xys, xForm)