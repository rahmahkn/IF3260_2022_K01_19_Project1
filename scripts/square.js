var verticesSquare = []
var indexSquare = 0
var beginSquare = true

var cornersSquare = []

var pointsSquare = []

function setSquare(params) {
    isSquare = true

    isPolygon = false;
    isLine = false;
    isRectangle = false;
    isSelect = false;

    type[numModel] = 2;
}

function drawSquare(x, y) {
    // First click which defines first corner
    if (beginSquare) {

        cornersSquare = [];
        cornersSquare.push(x);
        cornersSquare.push(y);

        beginSquare = false;
        // console.log("first click")
    }
    // Second click
    else {
        firstX = cornersSquare[0]
        firstY = cornersSquare[1]

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
        var indexCornersSquare = cornersSquare.length-1

        // First vertex
        vertices.push(cornersSquare[indexCornersSquare-3]);
        vertices.push(cornersSquare[indexCornersSquare-2]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        // Second vertex
        vertices.push(cornersSquare[indexCornersSquare-3]);
        vertices.push(cornersSquare[indexCornersSquare]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        // Third vertex
        vertices.push(cornersSquare[indexCornersSquare-1]);
        vertices.push(cornersSquare[indexCornersSquare]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        // Fourth vertex
        vertices.push(cornersSquare[indexCornersSquare-1]);
        vertices.push(cornersSquare[indexCornersSquare-2]);
        vertices.push(0);
        vertices.push(0);
        vertices.push(0);

        index += 4;
        numModel++;
        start[numModel] = index;

        type[numModel] = 2;

        beginSquare = true;
        // console.log("second click")

        main();
    }
}

function renderSquare() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    for(var i = 0; i<indexSquare; i += 4)
        gl.drawArrays(gl.TRIANGLE_FAN, i, 4)
}

function isInsideSquare() {
    canvas.addEventListener("mousedown", function (event) {
        x = getXClickedPosition(canvas, event);
        y = getYClickedPosition(canvas, event);

        let found = false;

        let i = 0
        console.log(pointsSquare)
        while (!found && i < pointsSquare.length) {
            if ((pointsSquare[i][0] <= x && x <= pointsSquare[i][2]) && (pointsSquare[i][1] <= y && y <= pointsSquare[i][3])) {
                found = true;
                console.log("found");
                return i;
            }
            console.log(i)
            i++;
        }

        return -1;
    }); 
}