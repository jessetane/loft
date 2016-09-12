# loft
Loft a regular polygon with n sides between two points in 3d space.

## Why
Native line drawing in WebGL doesn't seem to work consistently across platforms. My first attempt at an alternative was to try drawing tubes made of triangles instead, which this library was factored out of.

## Example
```javascript
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
```

## License
MIT
