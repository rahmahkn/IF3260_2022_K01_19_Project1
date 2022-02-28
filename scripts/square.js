var verticesSquare = []
var indexSquare = 0
var beginSquare = true

var cornersSquare = []

var pointsSquare = []

function setSquare() {
    isSquare = true;

    isPolygon = false;
    isLine = false;
    isRectangle = false;
    isSelect = false;

    type[numModel] = 2;
}

function drawSquare(x, y) {
    // First click which defines first corner
    if (beginSquare) {

        cornersSquare.push(x);
        cornersSquare.push(y);

        beginSquare = false;
        // console.log("first click")
    }
    // Second click
    else {
        var pointsPerSquare = []

        var indexCornersSquare = cornersSquare.length-1

        firstX = cornersSquare[indexCornersSquare-1]
        firstY = cornersSquare[indexCornersSquare]

        if (firstX < x) {
            if (firstY > y) {
                x = firstX + (firstY-y)/2
            } else {
                x = firstX - (firstY-y)/2
            }
        }
        else {
            if (firstY > y) {
                x = firstX - (firstY-y)/2
            } else {
                x = firstX + (firstY-y)/2
            }
        }

        cornersSquare.push(x)
        cornersSquare.push(y)
        indexCornersSquare = cornersSquare.length-1

        // First vertex
        vertices.push(cornersSquare[indexCornersSquare-3]);
        vertices.push(cornersSquare[indexCornersSquare-2]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);
        pointsPerSquare.push(cornersSquare[indexCornersSquare-3])
        pointsPerSquare.push(cornersSquare[indexCornersSquare-2])

        // Second vertex
        vertices.push(cornersSquare[indexCornersSquare-3]);
        vertices.push(cornersSquare[indexCornersSquare]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);
        pointsPerSquare.push(cornersSquare[indexCornersSquare-3])
        pointsPerSquare.push(cornersSquare[indexCornersSquare])

        // Third vertex
        vertices.push(cornersSquare[indexCornersSquare-1]);
        vertices.push(cornersSquare[indexCornersSquare]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);
        pointsPerSquare.push(cornersSquare[indexCornersSquare-1])
        pointsPerSquare.push(cornersSquare[indexCornersSquare])

        // Fourth vertex
        vertices.push(cornersSquare[indexCornersSquare-1]);
        vertices.push(cornersSquare[indexCornersSquare-2]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);
        pointsPerSquare.push(cornersSquare[indexCornersSquare-1])
        pointsPerSquare.push(cornersSquare[indexCornersSquare-2])

        index += 4;

        numIndices[numModel] = 4;
        
        numModel++;
        numIndices[numModel] = 0;
        start[numModel] = index;

        type[numModel] = 2;

        beginSquare = true;
        pointsSquare.push(pointsPerSquare)
        // console.log(pointsSquare)
        // console.log("second click")

        main();
    }
}