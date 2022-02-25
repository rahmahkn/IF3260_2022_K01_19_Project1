var verticesRectangle = []
var indexRectangle = 0;

var cornersRectangle = [];
// var indexCornersRectangle = 0;

var numRectangles = 0;
var numIndicesRectangles = [];
numIndicesRectangles[0] = 0;
var startRectangle = [0];

function drawRectangle() {
    // First click which defines first corner
    var begin = true;

    canvas.addEventListener("mousedown", function (event) {
        x = getXClickedPosition(canvas, event);
        y = getYClickedPosition(canvas, event);

        if (begin) {
            cornersRectangle.push(x);
            cornersRectangle.push(y);
            // indexCornersRectangle++;

            begin = false;

            console.log("first click")
            console.log(cornersRectangle);
            console.log(cornersRectangle.length-1);
        }
        // Second click
        else {
            cornersRectangle.push(x);
            cornersRectangle.push(y);
            var indexCornersRectangle = cornersRectangle.length-1;

            // First vertex
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-3]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-2]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            // Second vertex
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-3]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            // Third vertex
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-1]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-2]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            // Fourth vertex (same as second vertex)
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-3]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            // Fifth vertex (same as third vertex)
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-1]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-2]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            // Sixth vertex
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-1]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            begin = true;

            console.log("second click");
            console.log(cornersRectangle);
            console.log(cornersRectangle.length-1);

            console.log("vertices")
            console.log(verticesRectangle);
        }
        

    });
}