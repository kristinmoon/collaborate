var canvas = new fabric.Canvas("c");

// create shape objects
var rect = new fabric.Rect({
  left: 100,
  top: 100,
  fill: 'red',
  width: 20,
  height: 20,
});

var circle = new fabric.Circle({
  radius: 20,
  fill: 'green',
  left: 200,
  top: 200
});

var triangle = new fabric.Triangle({
  width: 20,
  height: 30,
  fill: 'blue',
  left: 50,
  top: 50
});

// add shapes onto canvas
// canvas.add(rect, circle, triangle);

// create text
var text = new fabric.Text('hello world', { left: 150, top: 150 });

// add text onto canvas
// canvas.add(text);

canvas.renderAll();