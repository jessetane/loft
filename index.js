module.exports = loft

var vec3 = {
  add: require('gl-vec3/add'),
  subtract: require('gl-vec3/subtract'),
  cross: require('gl-vec3/cross'),
  normalize: require('gl-vec3/normalize'),
  scale: require('gl-vec3/scale'),
  transformMat4: require('gl-vec3/transformMat4')
}
var mat4 = {
  create: require('gl-mat4/create'),
  rotate: require('gl-mat4/rotate')
}

function loft (start, end, radius, sides) {
  if (start[0] === end[0] &&
      start[1] === end[1] &&
      start[2] === end[2]) {
    return {
      positions: [[0,0,0]],
      cells: [[0,0,0]]
    }
  }
  var positions = []
  var cells = []
  var direction = vec3.subtract([], end, start)
  var random = direction.slice()
  random[0] += 0.1
  random[1] += 0.1
  random[2] += 0.1
  var orthogonal = vec3.cross([], direction, random)
  vec3.normalize(orthogonal, orthogonal)
  vec3.scale(orthogonal, orthogonal, radius)
  var step = Math.PI * 2 / sides
  var id = mat4.create()
  for (var i = 0; i < sides; i++) {
    var r = mat4.rotate([], id, step * i, direction)
    var v = vec3.transformMat4([], orthogonal, r)
    positions.push(
      vec3.add([], v, start),
      vec3.add([], v, end)
    )
    var n = i * 2
    cells.push(
      [n + 0, n + 1, n + 2],
      [n + 2, n + 1, n + 3]
    )
  }
  var last = sides * 2
  cells[last - 2][2] = 0
  cells[last - 1][0] = 0
  cells[last - 1][2] = 1
  return { positions, cells }
}
