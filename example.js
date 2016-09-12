var loft = require('./')

var start = [0,0,0]
var end = [1,1,0]
var radius = 0.1
var sides = 3

var triangularTube = loft(
  start,
  end,
  radius,
  sides
)

console.log(triangularTube.positions)
console.log(triangularTube.cells)
