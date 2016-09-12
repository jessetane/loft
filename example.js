var loft = require('./')

var triangularTube = loft([0,0,0], [1,1,0], 0.1, 3)

console.log(triangularTube.positions.length)
console.log(triangularTube.cells)
