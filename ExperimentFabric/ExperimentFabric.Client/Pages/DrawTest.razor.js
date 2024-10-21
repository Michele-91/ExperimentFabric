


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
        isDrawingMode: false
    });



    // Create a red square of size 50px by 50px
    //var redSquare = new fabric.Rect({
    //    left: 100,
    //    top: 100,
    //    fill: 'red',
    //    width: 50,
    //    height: 50
    //});

    ////// Add the red square to the canvas
    //canvas.add(redSquare);

    console.log('Red square added to the canvas');


}

export function enableBrush() {
    canvas.isDrawingMode = true;
}


export function addRectangle() {
    var rect = new fabric.Rect({
        left: 200,
        top: 200,
        fill: 'blue',
        width: 60,
        height: 70,
    });
    canvas.add(rect);

    canvas.isDrawingMode = false;
}


