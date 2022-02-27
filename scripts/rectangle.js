var verticesRectangle = []
var indexRectangle = 0;

var cornersRectangle = []; 

function drawRectangle() {
    var begin = true;

    canvas.addEventListener("mousedown", function (event) {
        x = getXClickedPosition(canvas, event);
        y = getYClickedPosition(canvas, event);

        // First click which defines first corner
        if (begin) {

            cornersRectangle = [];
            cornersRectangle.push(x);
            cornersRectangle.push(y);

            begin = false;
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
            verticesRectangle.push(cornersRectangle[indexCornersRectangle]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            // Fourth vertex
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-1]);
            verticesRectangle.push(cornersRectangle[indexCornersRectangle-2]);
            verticesRectangle.push(0);
            verticesRectangle.push(0);
            verticesRectangle.push(0);

            indexRectangle += 4;
            begin = true;

            main(verticesRectangle);

            renderRectangle();
        }
    });
}

function renderRectangle() {
    gl.clear(gl.COLOR_BUFFER_BIT);

    for(var i = 0; i<indexRectangle; i += 4)
        gl.drawArrays(gl.TRIANGLE_FAN, i, 4)
}