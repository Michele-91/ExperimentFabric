


//import { Canvas, Rect } from './Pages/fabric.min.js'; // Import fabric.js
/*import { fabric } from '../wwwroot/js/fabric.min.js';*/
//import { canvas } from '../wwwroot/js/initializations.js';


//var canvasLoaded;
//var canvas;

//function isDomLoaded() {
//    return document.querySelector("#fabricCanvas") !== null;
//}







export function initializeCanvas() {

    if (typeof fabric === 'undefined') {
        console.error('Fabric.js is not loaded');
        return;
    }

    //console.dir(fabric);
    console.log('Initializing Fabric.js canvas');



    // Call the initializeFabric function after a slight delay to ensure all scripts are loaded
    /*setTimeout(initializeFabric, 500);*/
    //if (!isDomLoaded()) {
    //    setTimeout(initializeCanvas, 100);
    //}



    //Initialize a Fabric.js canvas with the given ID
    var canvasElement = document.getElementById('fabricCanvas');
    //var canvasElement = document.querySelector('#fabricCanvas');
    if (!canvasElement) {
        console.error('Canvas element not found');
        return;
    }


    canvas = new fabric.Canvas('fabricCanvas', {
        isDrawingMode: false,
        selection: false
    });
    canvas.selection = false;

    selectableObjectsActive = false;


    if (fabric.PencilBrush) {
        // initialize eraser brush functionality

        eraserActive = false;
        //eraserBrush = new fabric.EraserBrush(canvas);
        eraserBrush = new fabric.PencilBrush(canvas);
        eraserBrush.width = 10;
        // initialize pencil brush
        pencilActive = false;
        pencil = new fabric.PencilBrush(canvas);
        // initialize small brush
        smallBrushActive = false;
        smallBrush = new fabric.PencilBrush(canvas);
        // initialize medium brush
        mediumBrushActive = false;
        mediumBrush = new fabric.PencilBrush(canvas);
        // initialize small brush
        bigBrushActive = false;
        bigBrush = new fabric.PencilBrush(canvas);
        //bigBrush.width = 5;
    }
    //if (fabric.PencilBrush) {
    //    pencilBrushActive = false;
    //    pencilBrush = new fabric.PencilBrush(canvas);
    //    pencilBrush.width = 5;
    //}
    //if (fabric.CircleBrush) {
    //    circleBrushActive = false;
    //    circleBrush = new fabric.CircleBrush(canvas);
    //    circleBrush.width = 5;
    //}
    if (fabric.SprayBrush) {
        sprayBrushActive = false;
        sprayBrush = new fabric.SprayBrush(canvas);
        sprayBrush.width = 5;
    }


    // --------------- ERASE FUNCTIONALITY ----------------------

    // Listen for the 'erasing:end' event on the canvas
    canvas.on('erasing:end', function () {
        // Get all objects on the canvas
        if (canvas) {
            var objects = canvas.getObjects();
            if (objects) {
                for (var i = objects.length - 1; i >= 0; i--) {
                    var obj = objects[i];
                    // Check if the object is fully erased
                    if (isObjectFullyErased(obj)) {
                        // Remove the object from the canvas
                        canvas.remove(obj);
                    }
                }
                // Render the canvas to reflect changes
                canvas.requestRenderAll();
            }
        }
    });


    console.log('Red square added to the canvas');


}



// Function to determine if an object is fully erased
export function isObjectFullyErased(obj) {
    // If the object doesn't have an eraser, it's not erased
    if (!obj.eraser) {
        return false;
    }
    // Get the object's bounding rectangle
    var objBounds = obj.getBoundingRect();
    // Get the eraser's bounding rectangle
    var eraserBounds = obj.eraser.getBoundingRect();
    // Check if the eraser completely covers the object
    if (
        eraserBounds.left <= objBounds.left &&
        eraserBounds.top <= objBounds.top &&
        eraserBounds.left + eraserBounds.width >= objBounds.left + objBounds.width &&
        eraserBounds.top + eraserBounds.height >= objBounds.top + objBounds.height
    ) {
        return true;
    }
    // Additional check: Compare the areas of the object and eraser
    var objArea = objBounds.width * objBounds.height;
    var eraserArea = eraserBounds.width * eraserBounds.height;
    // If the eraser area is significantly larger, consider the object fully erased
    if (eraserArea >= objArea * 0.99) {
        return true;
    }
    // If fully erased, disable interaction
    obj.selectable = false;
    obj.evented = false;
    obj.visible = false; // Optionally hide the object
    return false; // Return false to avoid removal
}

