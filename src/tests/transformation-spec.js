const {plot, Plot} = require('nodeplotlib')
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

// Opens a browser and plot the points - ensure the data is plotly data form
function draw(data) {
  plot(data)
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
  const result = xforms.doIdentityXForm(data)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: 'testing identity transform',
      data: [
        ['testData : ', data],
        ['result : ', result]
      ]
    }
    printResults(results)
  }
  return true
}

const testTranslateToTransform = (data, translateToXY, showPlots=false) => {
  const result = xforms.doTranslateXForm(data, translateToXY)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: `testing translate to ${translateToXY} transform`,
      data: [
        ['testData : ', data],
        ['result : ', result]
      ]
    }
    printResults(results)
  }
}
const testScaleByTransform = (data, scaleFactor = 2, showPlots=false) => {
  const result = xforms.doScaleByXForm(data, scaleFactor)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: `testing scaleby ${scaleFactor} transform`,
      data: [
        ['testData : ', data],
        ['result : ', result]
      ]
    }
    printResults(results)
  }
}


const testRotateAboutOriginXForm = (data, radians, showPlots=false) => {
  const result = xforms.doRotateAboutOriginXForm(data, radians)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: `testing rotate about origin ${radians} radians transform`,
      data: [
        ['testData : ', data],
        ['result : ', result]
      ]
    }
    printResults(results)
  }
}

const testShearXXform = (data, radians, showPlots=false) => {
  const result = xforms.doShearXXForm(data, radians)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: `testing sheer along x parallel by ${radians} radians transform`,
      data: [
        ['testData : ', data],
        ['result : ', result]
      ]
    }
    printResults(results)
  }
}

const testShearYXform = (data, radians, showPlots=false) => {
  const result = xforms.doShearYXForm(data, radians)
  if (showPlots) {
    plot( xYtoLinePlotData( data.concat(result) ) )
  } else {
    const results = {
      title: `testing sheer along x parallel by ${radians} radians transform`,
      data: [
        ['testData : ', data],
        ['result : ', result]
      ]
    }
    printResults(results)
  }
}

const runAll = (showPlot) => {
  testDataConvert(testData, showPlot)
  testIdentityTransform(testData, showPlot)
  testScaleByTransform(testData, 3, showPlot)
  testTranslateToTransform(testData, [2,3], showPlot)
  testRotateAboutOriginXForm(testData, Math.PI, showPlot)
  testRotateAboutOriginXForm(testData, (0.25 * Math.PI), showPlot)
  testShearYXform(testData, (0.125 * Math.PI), showPlot)
}

runAll()