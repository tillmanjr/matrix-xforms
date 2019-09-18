const {plot, stack, clear, Plot} = require('nodeplotlib')
const xforms = require('../utils/transformation-helpers')
  // doIdentityXForm,
  // doScaleByXForm,
  // doTranslateXForm,
  // doRotateAboutOriginXForm,
  // doShearXXForm,
  // doShearYXForm

const testData = [
  [0, 0],
  [0, 4],
  [4, 4],
  [4, 0],
  [0, 0]
]

const testDataRtTriangle = [
  [0, 0],
  [3, 4],
  [3, 0],
  [0, 0]
]

const testDataAsPlot = [{x: [0, 0, 4, 4, 0], y: [0, 4, 4, 0, 0], type: 'line'}];

const xYtoLinePlotData = (xy) => {
  let x = []
  let y = []
  for (let i = 0; i < xy.length; i++) {
    x.push(xy[i][0])
    y.push(xy[i][1])
  }
  return [{x, y, type: 'line'}]
}

const sepLine = '====================================================================='
const ulLine  = '---------------------------------------------------------------------'
function printResults(results) {
  console.log('\n')
  console.log(results.title)
  console.log(ulLine)
  const data = results.data
  for (let i = 0; i< data.length; i++) {
    const item = data[i]
    console.log(item[0], item[1])
  }
  console.log(sepLine)
}

const createPlotDataObject = (srcData, resultData, title) => {
  return {
    title,
    original: srcData,
    transformed: resultData
  }
}

// displays two plots in a single webpage
const displayPlotData = (plotData) => {
  const originalPlotData = xYtoLinePlotData(plotData.original)
  const transformedPlotData = xYtoLinePlotData(plotData.transformed)
  stack(originalPlotData)
  stack(transformedPlotData)
  plot()
  clear()
}

// extract a single string for all the elements of a polyson - formatted
const mapXYString = item => `  ${item[0].toFixed(2).toString().padStart(6)} : ${item[1].toFixed(2).toString().padEnd(6)}`

// print test results to the console
const printTestResults = (plotData) => {
  console.log('\n')
  console.log(plotData.title)
  console.log(ulLine)

  const original = plotData.original.map( mapXYString )
  const transformed = plotData.transformed.map( mapXYString )

  console.log(original.toString())
  console.log(transformed.toString())
  console.log(sepLine)
  return true
}

// display the test results,
//   showPlot: when false display to console, else webpage plot
const displayTestResults = (plotData, showPlot) => {
  if (showPlot) {
    displayPlotData(plotData)
    return true
  }
  printTestResults(plotData)
  return true
}

const testDataConvert = (data, showPlots=false) => {
  const result = xYtoLinePlotData(data)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: 'Testing transforming startData into startPlot',
      data: [
        ['testData   : ', data],
        ['testDataAsPlot   : ', testDataAsPlot],
        ['result      : ', result]
      ]
    }
    printResults(results)
  }
  return true
}

const testIdentityTransform = (data, showPlots=false) => {
  const title = 'testing identity transform'
  const result = xforms.doIdentityXForm(data)
  const plotDataObj = createPlotDataObject(data, result, title)

  displayTestResults(plotDataObj, showPlots)

  return true
}

const testTranslateToTransform = (data, translateToXY, showPlots=false) => {
  const title = `testing translate to ${translateToXY} transform`
  const result = xforms.doTranslateXForm(data, translateToXY)
  const plotDataObj = createPlotDataObject(data, result, title)

  displayTestResults(plotDataObj, showPlots)

  return true
}

const testScaleByTransform = (data, scaleFactor = 2, showPlots=false) => {
  const title = `testing scaleby ${scaleFactor} transform`
  const result = xforms.doScaleByXForm(data, scaleFactor)
  const plotDataObj = createPlotDataObject(data, result, title)

  displayTestResults(plotDataObj, showPlots)

  return true
}

const testRotateAboutOriginXForm = (data, radians, showPlots=false) => {
  const title = `testing rotate about origin ${radians} radians transform`
  const result = xforms.doRotateAboutOriginXForm(data, radians)
  const plotDataObj = createPlotDataObject(data, result, title)

  displayTestResults(plotDataObj, showPlots)

  return true
}

const testShearXXform = (data, radians, showPlots=false) => {
  const title =  `testing sheer along x parallel by ${radians} radians transform`
  const result = xforms.doShearXXForm(data, radians)
  const plotDataObj = createPlotDataObject(data, result, title)

  displayTestResults(plotDataObj, showPlots)

  return true
}

const testShearYXform = (data, radians, showPlots=false) => {
  const title = `testing sheer along x parallel by ${radians} radians transform`
  const result = xforms.doShearYXForm(data, radians)
  const plotDataObj = createPlotDataObject(data, result, title)

  displayTestResults(plotDataObj, showPlots)

  return true
}

const runAll = (data, showPlot) => {
  testIdentityTransform(data, showPlot)
  testScaleByTransform(data, 3, showPlot)
  testTranslateToTransform(data, [2,3], showPlot)
  testRotateAboutOriginXForm(data, Math.PI, showPlot)//howPlot)
  testRotateAboutOriginXForm(data, (0.25 * Math.PI), showPlot)
  testShearXXform(data, (0.125 * Math.PI), showPlot)
  testShearYXform(data, (0.125 * Math.PI), showPlot)
}

// runAll(testDataRtTriangle, false)
// runAll(testData, true)
