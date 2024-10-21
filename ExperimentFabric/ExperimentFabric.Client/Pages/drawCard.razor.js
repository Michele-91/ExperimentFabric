



export function addTriangle() {
    var triangle = new fabric.Triangle({
        width: 100,
        height: 100,
        fill: 'blue',
        left: 150,
        top: 150
    });

    // Add the triangle to the canvas
    canvas.add(triangle);

    canvas.isDrawingMode = false;
}




export function enableBrush() {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 5;
}


export function enablePencil() {
    canvas.isDrawingMode = true;
    canvas.freeDrawingBrush.width = 1;
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


export function addSquare() {
    var redSquare = new fabric.Rect({
        left: 100,
        top: 100,
        fill: 'red',
        width: 50,
        height: 50
    });

    //// Add the red square to the canvas
    canvas.add(redSquare);

    canvas.isDrawingMode = false;

}