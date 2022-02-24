var vertices = [];
var index = 0;

var numPolygons = 0;
var numIndices = [];
numIndices[0] = 0;
var start = [0];

function drawPolygon() {
  /* add action when button to stop making polygon is clicked */
  var a = document.getElementById("finishPolygon");
  a.addEventListener("click", function () {
    numPolygons++;
    numIndices[numPolygons] = 0;
    start[numPolygons] = index;

    main(vertices);

    render();
  });

  /*add action when certain point in canvas is clicked */
  canvas.addEventListener("mousedown", function (event) {
    x = getXClickedPosition(canvas, event);
    y = getYClickedPosition(canvas, event);

    // push coordinate to array
    vertices.push(x);
    vertices.push(y);

    //push color to array - asuumption: polygon color is black
    vertices.push(0);
    vertices.push(0);
    vertices.push(0);

    numIndices[numPolygons]++;
    index++;
  });
}

function render() {
  gl.clear(gl.COLOR_BUFFER_BIT);

  for (var i = 0; i < numPolygons; i++) {
    gl.drawArrays(gl.TRIANGLE_FAN, start[i], numIndices[i]);
  }
}