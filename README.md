## Simple proof of concept for doing 2D transforms using transformation matrices

#### Simple as can be:
1. Take an array of xy points (each a 2 element array of real)  forming a polygon
2. Get a transformation matrix (or create an new one). Common ones found in transformationMatrices.js
3. Call transform(points, matrix)
4. Get back the transformed set of points

#### Supplied transformation matrices
  Identity
  TranslateTo
  ScaleBy
  SheerX
  SheerY
  RotateAboutOrigin