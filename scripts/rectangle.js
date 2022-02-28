var verticesRectangle = []
var indexRectangle = 0;
var beginRectangle = true;

var cornersRectangle = []; 

function setRectangle() {
    isRectangle = true;

    isPolygon = false;
    isLine = false;
    isSquare = false;
    isSelect = false;

    type[numModel] = 3;
}

function drawRectangle(x, y) {
    // First click which defines first corner
    if (beginRectangle) {

        cornersRectangle.push(x);
        cornersRectangle.push(y);

        beginRectangle = false;
        // console.log("first click")
    }
    // Second click
    else {
        cornersRectangle.push(x);
        cornersRectangle.push(y);
        var indexCornersRectangle = cornersRectangle.length-1;

        // First vertex
        vertices.push(cornersRectangle[indexCornersRectangle-3]);
        vertices.push(cornersRectangle[indexCornersRectangle-2]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        // Second vertex
        vertices.push(cornersRectangle[indexCornersRectangle-3]);
        vertices.push(cornersRectangle[indexCornersRectangle]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        // Third vertex
        vertices.push(cornersRectangle[indexCornersRectangle-1]);
        vertices.push(cornersRectangle[indexCornersRectangle]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        // Fourth vertex
        vertices.push(cornersRectangle[indexCornersRectangle-1]);
        vertices.push(cornersRectangle[indexCornersRectangle-2]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        index += 4;
        numModel++;
        start[numModel] = index;

        type[numModel] = 3;

        beginRectangle = true;
        // console.log("second click")

        main();
    }
}