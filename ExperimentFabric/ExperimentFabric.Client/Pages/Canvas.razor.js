
//import '/js/fabric.min.js';


console.log("1");

let canvasLoaded = false;

var canvas;
var blueSquare;
var gradient;


console.log("2");

export function initializeFabric() {

    console.log("3");
    if (typeof fabric === 'undefined') {
        console.error('Fabric.js is not loaded');
        return;
    }

    console.log('Initializing Fabric.js canvas');

    // Initialize a Fabric.js canvas with the given ID
    var canvasElement = document.getElementById('fabricCanvas');
    if (!canvasElement) {
        console.error('Canvas element not found');
        return;
    }
    canvasLoaded = true;

    canvas = new fabric.Canvas('fabricCanvas', {
        isDrawingMode: true
    });

    // Create a red square of size 50px by 50px
    //var redSquare = new fabric.Rect({
    //    left: 100,
    //    top: 100,
    //    fill: 'red',
    //    width: 50,
    //    height: 50
    //});

    //// Add the red square to the canvas
    //canvas.add(redSquare);

    //canvas.isDrawingMode = true;

    console.log('Red square added to the canvas');
}


