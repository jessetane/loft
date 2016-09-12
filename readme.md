# loft
Loft a regular polygon with n sides between two points in 3d space.

## Why
Native line drawing in WebGL doesn't seem to work consistently across platforms. My first attempt at an alternative was to try drawing tubes made of triangles instead, which this library was factored out of.

## Example
```javascript
var loft = require('./')

var triangularTube = loft([0,0,0], [1,1,0], 0.1, 3)

console.log(triangularTube.positions.length)
console.log(triangularTube.cells)
```

## License
MIT
