var startLine = 0
var numPoint = 0;

function setLine() {
  // set so that user can only choose coordinate to make a line model
  isLine = true;

  isPolygon = false;
  isSquare = false;
  isRectangle = false;
  isSelect = false;

  // set type = 1 -> line
  type[numModel] = 1;
}

function drawLine() {
  numPoint++;

  // checking if 2 points are clicked, if yes, add a new line
  if (numPoint == 2) {
    numModel++;
    numIndices[numModel] = 2;
    start[numModel] = startLine;

    type[numModel] = 1;

    numPoint = 0;

    main()
  } else {
    startLine = index + 2;
  }
}