const transform = require('../transformation').transform
const matrices = require('../transformationMatrices')
  // identityMatrix,
  // generateIdentityMatrix
  // generateTranslateToMatrix,
  // generateScaleByMatrix,
  // generateSheerXMatrix,
  // generateSheerYMatrix,
  // generateRotateAboutOriginMatrix

const doIdentityXForm = (xys) => {
  const xForm = matrices.generateIdentityMatrix()
  return transform(xys, xForm)
}

const doScaleByXForm = (xys, scaleBy) => {
  const xForm = matrices.generateScaleByMatrix(scaleBy)
  return transform(xys, xForm)
}

const doTranslateXForm = (xys, translateToXY) => {
  const xForm = matrices.generateTranslateToMatrix(translateToXY)
  return transform(xys, xForm)
}

const doRotateAboutOriginXForm = (xys, radians) => {
  const xForm = matrices.generateRotateAboutOriginMatrix(radians)
  return transform(xys, xForm)
}

const doShearXXForm = (xys, radians) => {
  const xForm = matrices.generateSheerXMatrix(radians)
  return transform(xys, xForm)
}

const doShearYXForm = (xys, radians) => {
  const xForm = matrices.generateSheerYMatrix(radians)
  return transform(xys, xForm)
}

const reflectOnEnum = matrices.reflectOnEnum

const doReflectTransform = (xys, reflectOn) => {
  const xForm = matrices.generateReflectMatrix(reflectOn)
  return transform(xys, xForm)
}

module.exports = {
  doIdentityXForm,
  doScaleByXForm,
  doTranslateXForm,
  doRotateAboutOriginXForm,
  doShearXXForm,
  doShearYXForm,
  doReflectTransform,
  reflectOnEnum
}