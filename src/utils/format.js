'use strict;'

// returns a formatted string of a Tranformation Matrix
const formatTransformationMatrix = (xForm) => {
  const xLine = `a: ${xForm.a.toFixed(2).toString().padStart(6)}   c: ${xForm.c.toFixed(2).toString().padEnd(6)}   tx: ${xForm.tx.toFixed(2).toString().padEnd(6)}`
  const yLine = `b: ${xForm.b.toFixed(2).toString().padStart(6)}   d: ${xForm.d.toFixed(2).toString().padEnd(6)}   ty: ${xForm.ty.toFixed(2).toString().padEnd(6)}`
  const zLine = `e: ${xForm.e.toFixed(2).toString().padStart(6)}   f: ${xForm.f.toFixed(2).toString().padEnd(6)}   tz: ${xForm.tz.toFixed(2).toString().padEnd(6)}`
  return `${xLine}\n${yLine}\n${zLine}`
}

// takes two tranformation matrices and returns a formatted string of a transformation matrix combining the two
const formatCompareTranformationMatrices = (lhXForm, rhXForm) => {
  const fmtOnePair = (property) => {
    const lhs = lhXForm[property]
    const rhs = rhXForm[property]
    return `${property}: ${lhs.toFixed(2).toString().padStart(6)} | ${rhs.toFixed(2).toString().padEnd(6)}`
  }
  const xLine = `${fmtOnePair('a')}   ${fmtOnePair('c')}   ${fmtOnePair('tx')}`
  const yLine = `${fmtOnePair('b')}   ${fmtOnePair('d')}   ${fmtOnePair('ty')}`
  const zLine = `${fmtOnePair('e')}   ${fmtOnePair('f')}   ${fmtOnePair('tz')}`
  return `${xLine}\n${yLine}\n${zLine}`
}

module.exports = {
  formatTransformationMatrix,
  formatCompareTranformationMatrices
}