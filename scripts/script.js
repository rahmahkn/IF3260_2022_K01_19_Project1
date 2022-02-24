/* Prepare the canvas and get WebGL context */
canvas = document.getElementById("glcanvas");
const gl = canvas.getContext("webgl");
if (!gl) {
  alert("WebGL isn't available");
}

/* create and compile shader program */
var vertexShaderCode = `precision mediump float;
attribute vec2 vertexPosition;
attribute vec3 vertexColor;
varying vec3 fragColor;
void main() {
    fragColor = vertexColor;
    gl_Position = vec4(vertexPosition, 0.0, 1.0);
}`;

var fragmentShaderCode = `precision mediump float;
varying vec3 fragColor;
void main() {
    gl_FragColor = vec4(fragColor, 1.0);
}`;

var createShader = function (type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);

  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error("Error compiling shader!", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return;
  }

  return shader;
};

var createProgram = function (vertexShader, fragmentShader) {
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);

  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error(
      "Error linking program!",
      gl.getProgramInfoLog(shaderProgram)
    );
    gl.deleteProgram(shaderProgram);
    return;
  }
  gl.validateProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.VALIDATE_STATUS)) {
    console.error(
      "Error validating program!",
      gl.getProgramInfoLog(shaderProgram)
    );
    gl.deleteProgram(shaderProgram);
    return;
  }

  return shaderProgram;
};

var shader = function () {
  // create shader
  var vertshader = createShader(gl.VERTEX_SHADER, vertexShaderCode);
  var fragshader = createShader(gl.FRAGMENT_SHADER, fragmentShaderCode);

  // create shader program
  var program = createProgram(vertshader, fragshader);

  return program;
};

/* Create buffer object and associate the shader program to buffer objects */
var associateBufferShader = function (shaderProgram, vertices) {
  var vertex_buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertex_buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  gl.useProgram(program);
  var posAttribLocation = gl.getAttribLocation(shaderProgram, "vertexPosition");
  var colorAttribLocation = gl.getAttribLocation(shaderProgram, "vertexColor");

  gl.vertexAttribPointer(
    posAttribLocation, // Attribute location
    2, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    0 // Offset from the beginning of a single vertex to this attribute
  );
  gl.vertexAttribPointer(
    colorAttribLocation, // Attribute location
    3, // Number of elements per attribute
    gl.FLOAT, // Type of elements
    gl.FALSE,
    5 * Float32Array.BYTES_PER_ELEMENT, // Size of an individual vertex
    2 * Float32Array.BYTES_PER_ELEMENT // Offset from the beginning of a single vertex to this attribute
  );

  gl.enableVertexAttribArray(posAttribLocation);
  gl.enableVertexAttribArray(colorAttribLocation);
};

/* create shader and draw object */
var main = function (vertices) {
  // set shader
  program = shader();

  // associate buffer and shader
  associateBufferShader(program, vertices);
};

var getXClickedPosition = function (canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  return (x - canvas.width / 2) / (canvas.width / 2);
  //return (2 * event.clientX) / canvas.width - 1;
};

var getYClickedPosition = function (canvas, event) {
  const rect = canvas.getBoundingClientRect();
  const y = event.clientY - rect.top;
  return ((y - canvas.height / 2) / (canvas.height / 2)) * -1;
  //return (2 * (canvas.height - event.clientY)) / canvas.height - 1;
};
