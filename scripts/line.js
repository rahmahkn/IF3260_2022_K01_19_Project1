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
    numIndices[numModel] = 2;

    // getting started to make a new model
    numModel++;
    numIndices[numModel] = 0;
    start[numModel] = startLine;

    // by default the next model to be made is assumed to be line
    type[numModel] = 1;

    numPoint = 0;

    main()
  } else {
    startLine = index + 2;
  }
}