var verticesSquare = []
var indexSquare = 0

var cornersSquare = []

var pointsSquare = []

function drawSquare() {
    var begin = true;

    canvas.addEventListener("mousedown", function (event) {
        x = getXClickedPosition(canvas, event);
        y = getYClickedPosition(canvas, event);

        // First click which defines first corner
        if (begin) {

            cornersSquare = [];
            cornersSquare.push(x);
            cornersSquare.push(y);

            begin = false;
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
            verticesSquare.push(cornersSquare[indexCornersSquare-3]);
            verticesSquare.push(cornersSquare[indexCornersSquare-2]);
            verticesSquare.push(0);
            verticesSquare.push(0);
            verticesSquare.push(0);

            // Second vertex
            verticesSquare.push(cornersSquare[indexCornersSquare-3]);
            verticesSquare.push(cornersSquare[indexCornersSquare]);
            verticesSquare.push(0);
            verticesSquare.push(0);
            verticesSquare.push(0);

            // Third vertex
            verticesSquare.push(cornersSquare[indexCornersSquare-1]);
            verticesSquare.push(cornersSquare[indexCornersSquare]);
            verticesSquare.push(0);
            verticesSquare.push(0);
            verticesSquare.push(0);

            // Fourth vertex
            verticesSquare.push(cornersSquare[indexCornersSquare-1]);
            verticesSquare.push(cornersSquare[indexCornersSquare-2]);
            verticesSquare.push(0);
            verticesSquare.push(0);
            verticesSquare.push(0);

            indexSquare += 4;
            begin = true;

            main(verticesSquare);

            renderSquare();

            pointsSquare.push(cornersSquare)

            // console.log(pointsSquare)
        }
    });
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