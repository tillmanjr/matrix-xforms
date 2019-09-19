'use strict;'

const {
  generateIdentityMatrix,
  generateTranslateToMatrix,
  generateScaleByMatrix,
  generateSheerXMatrix,
  generateSheerYMatrix,
  generateRotateAboutOriginMatrix,
  generateReflectMatrix,
  reflectOnEnum
 } = require('./transformationMatrices')


test('generateIdentityMatrix: should be all 0s except the Eigens which are 1', () => {
  let matrix = generateIdentityMatrix()
   expect(matrix.a).toEqual(1)
   expect(matrix.c).toEqual(0)
   expect(matrix.tx).toEqual(0)

   expect(matrix.b).toEqual(0)
   expect(matrix.d).toEqual(1)
   expect(matrix.ty).toEqual(0)

   expect(matrix.e).toEqual(0)
   expect(matrix.f).toEqual(0)
   expect(matrix.tz).toEqual(1)

})

test('Translation matrix for [12, 34] should be an Identity 0s except tx and ty should be 12, 34', () => {
    let matrix = generateTranslateToMatrix([12,34])
    expect(matrix.a).toEqual(1)
    expect(matrix.c).toEqual(0)
    expect(matrix.tx).toEqual(12)

    expect(matrix.b).toEqual(0)
    expect(matrix.d).toEqual(1)
    expect(matrix.ty).toEqual(34)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  test('generateScaleByMatrix: matrix with scaleFactor = 5 should be an Identity 0s except a and d should be 5', () => {
    let matrix = generateScaleByMatrix(5)
    expect(matrix.a).toEqual(5)
    expect(matrix.c).toEqual(0)
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toEqual(0)
    expect(matrix.d).toEqual(5)
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  // generateSheerXMatrix
  test('generateSheerXMatrix: shearing by 1 radian should be an Identity 0s except c = Math.tan(1)', () => {
    let matrix = generateSheerXMatrix(1)

    expect(matrix.a).toEqual(1)
    expect(matrix.c).toBeCloseTo(Math.tan(1))
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toEqual(0)
    expect(matrix.d).toEqual(1)
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  test('generateSheerYMatrix: shearing by 1 radian should be an Identity 0s except b = Math.tan(1)', () => {
    let matrix = generateSheerYMatrix(1)
    expect(matrix.a).toEqual(1)
    expect(matrix.c).toEqual(0)
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toBeCloseTo(Math.tan(1))
    expect(matrix.d).toEqual(1)
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  test('generateReflectMatrix: on Origin should be an Identity 0s except a & d = -1', () => {
    let reflectOn = reflectOnEnum.origin
    let matrix = generateReflectMatrix(reflectOn)
    expect(matrix.a).toEqual(-1)
    expect(matrix.c).toEqual(0)
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toEqual(0)
    expect(matrix.d).toEqual(-1)
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  test('generateReflectMatrix: on X-Axis should be an Identity 0s except d = -1', () => {
    let reflectOn = reflectOnEnum.xAxis
    let matrix = generateReflectMatrix(reflectOn)
    expect(matrix.a).toEqual(1)
    expect(matrix.c).toEqual(0)
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toEqual(0)
    expect(matrix.d).toEqual(-1)
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  test('generateReflectMatrix: on Y-Axis should be an Identity 0s except a = -1', () => {
    let reflectOn = reflectOnEnum.yAxis
    let matrix = generateReflectMatrix(reflectOn)
    expect(matrix.a).toEqual(-1)
    expect(matrix.c).toEqual(0)
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toEqual(0)
    expect(matrix.d).toEqual(1)
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })

  test('generateRotateAboutOriginMatrix: by 1 radian should be an Identity 0s except a = cos(1), c = -sin(1), b = sin(1), d = cos(1)', () => {
    let matrix = generateRotateAboutOriginMatrix(1)
    expect(matrix.a).toBeCloseTo(Math.cos(1))
    expect(matrix.c).toBeCloseTo(Math.sin(-1))
    expect(matrix.tx).toEqual(0)

    expect(matrix.b).toBeCloseTo(Math.sin(1))
    expect(matrix.d).toBeCloseTo(Math.cos(1))
    expect(matrix.ty).toEqual(0)

    expect(matrix.e).toEqual(0)
    expect(matrix.f).toEqual(0)
    expect(matrix.tz).toEqual(1)
  })