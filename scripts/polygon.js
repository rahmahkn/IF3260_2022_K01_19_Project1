var extramenuPolygon = document.getElementById("extramenuPolygon");

function setPolygon() {
  // set so that user can only choose coordinate to make a polygon model
  isPolygon = true;

  isLine = false;
  isSquare = false;
  isRectangle = false;
  isSelect = false;

  // set type
  type[numModel] = 4;

  // show extra menu
  extramenuPolygon.style.display = "grid";
  document.getElementById("selectStats").style.display = "none";
}

function drawPolygon() {
  /* add action when button to stop making polygon is clicked */
  var a = document.getElementById("finishPolygon");

  /* handle "special case" from canvas listener */
  numIndices[numModel]++;
}

function finishPolygon() {
  if (isPolygon) {
    // debug
    //console.log("masuk buttonclick. vertexlen = " + vertices.length);

    numModel++;
    numIndices[numModel] = 0;
    start[numModel] = index;

    // by default the next model to be made is assumed to be polygon
    type[numModel] = 4;

    main();
  }
}
