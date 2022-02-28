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
        numModel++;
        start[numModel] = index;

        type[numModel] = 2;

        beginSquare = true;
        pointsSquare.push(pointsPerSquare)
        console.log(pointsSquare)
        // console.log("second click")

        main();
    }
}

function idxVertexSquare(x, y) {
    var new_x = (Number(x)).toFixed(1)
    var new_y = (Number(y)).toFixed(1)

    for (i = 0; i < pointsSquare.length; i++) {
        for (let j = 0; j < pointsPerSquare.length; j++) {
            var cond_x = (x >= pointsSquare[i][j*2] - 0.025) && (x <= pointsSquare[i][j*2] + 0.025)
            var cond_y = (y >= pointsSquare[i][j*2+1] - 0.025) && (y <= pointsSquare[i][j*2+1] + 0.025)
        }
        if (cond_x && cond_y) {
        return i;
        }
    }
    return null;
}

function changeSquareSize(x, y) {
    
}