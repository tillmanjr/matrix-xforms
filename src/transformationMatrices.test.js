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

