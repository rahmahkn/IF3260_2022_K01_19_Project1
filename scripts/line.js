var verticesLines = [];
var indexLines = 0;

var numLines = 0;
var numIndicesLines = [];
numIndicesLines[0] = 0;
var startLines = [0];

function drawLine() {
  var n = 0;

  canvas.addEventListener("mousedown", function (event) {
    n++;
    x = getXClickedPosition(canvas, event);
    y = getYClickedPosition(canvas, event);

    // push coordinate to array
    verticesLines.push(x);
    verticesLines.push(y);

    //push color to array - asuumption: polygon color is black
    verticesLines.push(0);
    verticesLines.push(0);
    verticesLines.push(0);

    numIndicesLines[numLines]++;
    indexLines++;

    if (n == 2) {
      numLines++;
      numIndicesLines[numLines] = 0;
      startLines[numLines] = indexLines;

      main(verticesLines);

      renderLine();

      n = 0;
    }
  });
}

function renderLine() {
  gl.clear(gl.COLOR_BUFFER_BIT);

  gl.drawArrays(gl.LINES, 0, indexLines);
  gl.drawArrays(gl.POINTS, 0, indexLines);
}
