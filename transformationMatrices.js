const fns = require('./transformation-functions')
/*
transformation matrix
given:
  |a c tx|   |x|   |x'|
  |b d ty| * |y| = |y'|
  |e f tz|   |z|   |z'|
then
  x' = ax + cy + tx
  y' = bx + dy + ty
  z' = ex + fy + tz
    NOTE: |e f tz| is typically |0, 0, 1|

identity transformation atrix = {
  a: 1, c:0, tx: 0,
  b: 0, d:1, ty: 0
  e:0, f:0, tx:1
  }
simple example with identity (x, y, xForm) => {
  // x' = ax + cy + tx
  const newX = multiplyBy(x, xForm.a) +
  return []
  a: 1, c:0, tx,
  b, d, ty
  0, 0, 1
}
*/

const xyhelpers = require('./xy-helpers')
const xFromXY = xyhelpers.xFromXY
const yFromXY = xyhelpers.yFromXY

const identityMatrix = {
  a: 1, c: 0, tx: 0,
  b: 0, d: 1, ty: 0,
  e: 0, f: 0, tz: 1
}

const generateIdentityMatrix = () => {
  return {
    a: 1, c: 0, tx: 0,
    b: 0, d: 1, ty: 0,
    e: 0, f: 0, tz: 1
  }
}

const generateTranslateToMatrix = (xy) => {
  let result = identityMatrix
  result.tx = xFromXY(xy)
  result.ty = yFromXY(xy)
  return result
}

const generateScaleByMatrix = (scaleFactor) => {
  let result = identityMatrix
  result.a = scaleFactor
  result.d = scaleFactor
  return result
}

const generateSheerXMatrix = (radians) => {
  let result = identityMatrix
  result.c = fns.tan(radians)
  return result
}

const generateSheerYMatrix = (radians) => {
  let result = identityMatrix
  result.b = fns.tan(radians)
  return result
}

const generateRotateAboutOriginMatrix = (radians) => {
  const sinRadians = fns.sin(radians)
  const cosRadians = fns.cos(radians)
  const rotateCC = radians < 0 ? true : false

  let result = identityMatrix
  result.a = cosRadians
  result.c = rotateCC ? sinRadians : fns.negativeOf(sinRadians)
  result.b = rotateCC ? fns.negativeOf(sinRadians) : sinRadians
  result.d = cosRadians

  return result
}

//TODO: tdjr geneerateReflectOrigin
//TODO: tdjr geneerateReflectXAxis
//TODO: tdjr geneerateReflectYAxis
//TODI: tdjs look into affine and perspective transforms

module.exports = {
  identityMatrix,
  generateIdentityMatrix,
  generateTranslateToMatrix,
  generateScaleByMatrix,
  generateSheerXMatrix,
  generateSheerYMatrix,
  generateRotateAboutOriginMatrix
}