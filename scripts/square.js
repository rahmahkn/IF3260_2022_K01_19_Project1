var verticesSquare = []
var indexSquare = 0

var cornersSquare = []

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
            // indexCornersSquare++;

            begin = false;

            console.log("first click")
            console.log(cornersSquare);
            // console.log(cornersSquare.length-1);
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
                    x = firstX + (firstY-y)/2
                } else {
                    x = firstX + (firstY-y)/2
                }
            }
            
            console.log("x distance")
            console.log(Math.abs(x-firstX))
            console.log("y distance")
            console.log(Math.abs(firstY-y))

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

            // console.log("second click");
            // console.log(cornersSquare);
            // console.log(cornersSquare.length-1);

            // console.log("vertices")
            // console.log(verticesSquare);
            // console.log(verticesSquare.length)

            main(verticesSquare);

            renderSquare();

        }
    });
}

function renderSquare() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    for(var i = 0; i<indexSquare; i+=4)
        gl.drawArrays(gl.TRIANGLE_FAN, i, 4)
}