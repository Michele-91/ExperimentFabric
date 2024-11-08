



// 3

// General function to add shapes to the canvas
//export function addShape(shapeName) {
//    const shape = shapes.find(s => s.name.toLowerCase() === shapeName.toLowerCase());
//    if (!shape) {
//        console.error('Shape not found:', shapeName);
//        return;
//    }

//    let fabricShape;

//    switch (shape.type) {
//        case 'Rect':
//            fabricShape = new fabric.Rect(shape.options);
//            break;
//        case 'Circle':
//            fabricShape = new fabric.Circle(shape.options);
//            break;
//        case 'Triangle':
//            fabricShape = new fabric.Triangle(shape.options);
//            break;
//        case 'Polygon':
//            fabricShape = new fabric.Polygon(shape.options.points, shape.options);
//            break;
//        case 'Path':
//            fabricShape = new fabric.Path(shape.options.pathData, shape.options);
//            break;
//        // Add more cases as needed for other shape types
//        default:
//            console.error('Shape type not recognized:', shape.type);
//            return;
//    }

//    resetBrushesSelection();
//    canvas.add(fabricShape);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(fabricShape);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.isDrawingMode = false;
//    canvas.renderAll();
//}






// 2

//// Array of shapes containing their properties
//const shapes = [


//    {
//        name: 'Square',
//        type: 'Rect',
//        options: {
//            left: 100,
//            top: 100,
//            fill: 'red',
//            width: 50,
//            height: 50,
//            erasable: true,
//            stroke: null,
//            strokeWidth: null,
//            radius: null,
//            points: null,
//            pathData: null,
//            selectable: true,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Rectangle',
//        type: 'Rect',
//        options: {
//            left: 200,
//            top: 200,
//            fill: 'blue',
//            width: 70,
//            height: 50,
//            erasable: true,
//            stroke: null,
//            strokeWidth: null,
//            radius: null,
//            points: null,
//            pathData: null,
//            selectable: true,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Circle',
//        type: 'Circle',
//        options: {
//            left: 100,
//            top: 100,
//            fill: 'blue',
//            stroke: 'black',
//            strokeWidth: 2,
//            radius: 50,
//            erasable: null,
//            points: null,
//            pathData: null,
//            selectable: true,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Triangle',
//        type: 'Triangle',
//        options: {
//            width: 100,
//            height: 100,
//            fill: 'blue',
//            left: 150,
//            top: 150,
//            erasable: true,
//            stroke: null,
//            strokeWidth: null,
//            radius: null,
//            points: null,
//            pathData: null,
//            selectable: true,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Pentagon',
//        type: 'Polygon',
//        options: {
//            points: generatePolygonPoints(5, 200, 200, 80, Math.PI / 5),
//            fill: 'lightblue',
//            stroke: 'darkblue',
//            strokeWidth: 2,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            pathData: null,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Star',
//        type: 'Polygon',
//        options: {
//            points: generateStarPoints(5, 250, 250, 100, 50),
//            fill: 'yellow',
//            stroke: 'orange',
//            strokeWidth: 2,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            pathData: null,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Cylinder',
//        type: 'Path',
//        options: {
//            pathData: `
//                M 54 11.2
//                C 36.72 11.2 23.76 18.16 23.76 27.44
//                V 85.68
//                C 23.76 86.12 24.08 86.92 24.08 86.92
//                C 26.12 95 38.48 100.8 54 100.8
//                C 69.52 100.8 81.8 95.04 83.92 87
//                C 84.24 86.6 84.36 86.16 84.36 85.68
//                V 27.44
//                C 84.36 18.16 71.28 11.2 54 11.2
//                Z
//                M 54 38.08
//                C 42.28 38.08 29.16 33.52 29.16 27.44
//                C 29.16 21.36 42.28 16.8 54 16.8
//                C 65.72 16.8 78.84 21.36 78.84 27.44
//                C 78.84 33.52 65.72 38.08 54 38.08
//                Z
//            `,
//            fill: 'rgba(0, 0, 255, 0.2)',
//            stroke: 'blue',
//            strokeWidth: 1,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Hexagon',
//        type: 'Path',
//        options: {
//            pathData: `
//                M 77.8716 95.2008
//                H 34.12156
//                C 32.86156 95.2008 31.6978 94.5464 31.07656 93.484
//                L 9.20156 56.084
//                C 8.58908 55.0384 8.58908 53.7632 9.20156 52.7264
//                L 31.07656 15.32636
//                C 31.6978 14.26388 32.86156 13.60936 34.12156 13.60936
//                H 77.8716
//                C 79.1316 13.60936 80.29536 14.26388 80.9166 15.32636
//                L 102.7916 52.7264
//                C 103.40408 53.772 103.40408 55.0464 102.7916 56.084
//                L 80.9166 93.484
//                C 80.29536 94.5464 79.1316 95.2008 77.8716 95.2008
//                Z
//            `,
//            fill: 'lightgray',
//            stroke: 'black',
//            strokeWidth: 2,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: null,
//            scaleY: null,
//        }
//    },
//    {
//        name: 'Heart',
//        type: 'Path',
//        options: {
//            pathData: `
//            M 8 1.314
//            C 12.438 -3.248 23.534 4.735 8 15
//            C -7.534 4.736 3.562 -3.248 8 1.314
//            Z
//        `,
//            fill: 'red',
//            stroke: 'darkred',
//            strokeWidth: 1.5,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: 8,
//            scaleY: 8,
//        }
//    },
//    {
//        name: 'Moon',
//        type: 'Path',
//        options: {
//            pathData: `
//            M 6 0.278
//            A 0.77 0.77 0 0 1 6.08 1.136
//            A 7.2 7.2 0 0 0 5.202 4.718
//            C 5.202 8.739 8.48 11.995 12.52 11.995
//            Q 13.312 11.994 14.053 11.834
//            A 0.79 0.79 0 0 1 14.863 12.15
//            A 0.73 0.73 0 0 1 14.832 13.043
//            A 8.35 8.35 0 0 1 8.344 16
//            C 3.734 16 0 12.286 0 7.71
//            C 0 4.266 2.114 1.312 5.124 0.06
//            A 0.75 0.75 0 0 1 6 0.278
//            Z
//        `,
//            fill: 'yellow',
//            stroke: 'goldenrod',
//            strokeWidth: 0.5,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: 10,
//            scaleY: 10,
//        }
//    },
//    {
//        name: 'Sun',
//        type: 'Path',
//        options: {
//            pathData: `
//            M 8 12
//            A 4 4 0 1 0 8 4
//            A 4 4 0 0 0 8 12
//            M 8 0
//            A 0.5 0.5 0 0 1 8.5 0.5
//            V 2.5
//            A 0.5 0.5 0 0 1 7.5 2.5
//            V 0.5
//            A 0.5 0.5 0 0 1 8 0
//            M 8 13
//            A 0.5 0.5 0 0 1 8.5 13.5
//            V 15.5
//            A 0.5 0.5 0 0 1 7.5 15.5
//            V 13.5
//            A 0.5 0.5 0 0 1 8 13
//            M 16 8
//            A 0.5 0.5 0 0 1 15.5 8.5
//            H 13.5
//            A 0.5 0.5 0 0 1 13.5 7.5
//            H 15.5
//            A 0.5 0.5 0 0 1 16 8
//            M 3 8
//            A 0.5 0.5 0 0 1 2.5 8.5
//            H 0.5
//            A 0.5 0.5 0 0 1 0.5 7.5
//            H 2.5
//            A 0.5 0.5 0 0 1 3 8
//        `,
//            fill: 'yellow',
//            stroke: 'orange',
//            strokeWidth: 0.5,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: 15,
//            scaleY: 15,
//        }
//    },
//    {
//        name: 'Trapezoid',
//        type: 'Path',
//        options: {
//            pathData: `
//            M 23.9695 22.5248
//            H 2.03202
//            C 1.7903 22.5248 1.5628 22.4122 1.40843 22.2188
//            C 1.25406 22.0254 1.19109 21.7683 1.23374 21.5218
//            L 4.07749 5.3718
//            C 4.14859 4.96805 4.48374 4.6748 4.87577 4.6748
//            H 21.1258
//            C 21.5178 4.6748 21.853 4.96805 21.9241 5.3718
//            L 24.7678 21.5218
//            C 24.8125 21.7704 24.7475 22.0254 24.5931 22.2188
//            C 24.4387 22.4122 24.2092 22.5248 23.9695 22.5248
//            Z
//        `,
//            fill: 'gray',
//            stroke: 'black',
//            strokeWidth: 0.5,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: 4,
//            scaleY: 4,
//        }
//    },
//    {
//        name: 'Parallelogram',
//        type: 'Path',
//        options: {
//            pathData: `
//            M 22.3588 22.5248
//            H 1.265
//            C 1.00977 22.5248 0.769301 22.4101 0.608988 22.2103
//            C 0.448676 22.0106 0.385394 21.7492 0.438129 21.5006
//            L 3.81524 5.35055
//            C 3.8975 4.95743 4.24133 4.6748 4.64 4.6748
//            H 25.7338
//            C 25.989 4.6748 26.2295 4.78955 26.3898 4.9893
//            C 26.5501 5.18905 26.6134 5.45043 26.5606 5.69905
//            L 23.1856 21.8491
//            C 23.1034 22.2422 22.7595 22.5248 22.3609 22.5248
//            H 22.3588
//            Z
//        `,
//            fill: 'blue',
//            stroke: 'black',
//            strokeWidth: 0.5,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: 4,
//            scaleY: 4,
//        }
//    },
//    {
//        name: 'Drop',
//        type: 'Path',
//        options: {
//            pathData: `
//            M 8 16
//            A 6 6 0 0 0 14 10
//            C 14 8.345 12.878 7.096 11.568 5.638
//            C 10.254 4.176 8.75 2.503 8 0
//            C 8 0 2 5.686 2 10
//            A 6 6 0 0 0 8 16
//            M 6.646 4.646
//            L 7.354 5.354
//            C 7.064 5.644 6.226 6.665 5.447 8.224
//            L 4.553 7.776
//            C 5.373 6.135 6.27 5.023 6.646 4.646
//        `,
//            fill: 'blue',
//            stroke: 'black',
//            strokeWidth: 0.5,
//            selectable: true,
//            erasable: null,
//            left: null,
//            top: null,
//            width: null,
//            height: null,
//            radius: null,
//            points: null,
//            scaleX: 10,
//            scaleY: 10,
//        }
//    }
//];

//// Function to generate polygon points
//function generatePolygonPoints(sides, centerX, centerY, radius, rotation) {
//    let points = [];
//    let angle = (2 * Math.PI) / sides;
//    for (let i = 0; i < sides; i++) {
//        let x = centerX + radius * Math.cos(rotation + i * angle - Math.PI / 2);
//        let y = centerY + radius * Math.sin(rotation + i * angle - Math.PI / 2);
//        points.push({ x: x, y: y });
//    }
//    return points;
//}

//// General function to add shapes to the canvas
//export function addShapeByName(shapeName) {
//    const shape = shapes.find(s => s.name.toLowerCase() === shapeName.toLowerCase());
//    if (!shape) {
//        console.error('Shape not found:', shapeName);
//        return;
//    }

//    let fabricShape;

//    switch (shape.type) {
//        case 'Rect':
//            fabricShape = new fabric.Rect(shape.options);
//            break;
//        case 'Circle':
//            fabricShape = new fabric.Circle(shape.options);
//            break;
//        case 'Triangle':
//            fabricShape = new fabric.Triangle(shape.options);
//            break;
//        case 'Polygon':
//            fabricShape = new fabric.Polygon(shape.options.points, shape.options);
//            break;
//        case 'Path':
//            fabricShape = new fabric.Path(shape.options.pathData, shape.options);
//            break;
//        // Add more cases as needed for other shape types
//        default:
//            console.error('Shape type not recognized:', shape.type);
//            return;
//    }

//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(fabricShape);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(fabricShape);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}






//// Example usage
//addShapeByName('Drop'); // Adds a red square to the canvas
//addShapeByName('Rectangle'); // Adds a blue rectangle to the canvas





// square, rectangle, circle, triangle, pentagon, start, hexagon, moon, heart, sun, trapezoid, parallelogram, drop
//resetBrushesSelection();
//canvas.add(square);
//if (selectableObjectsActive) {
//    canvas.setActiveObject(square);
//} else {
//    toggleObjectsSelectable(false);
//}
//canvas.isDrawingMode = false;
//canvas.renderAll();
















































// 1

//export function addSquare() {
//    var redSquare = new fabric.Rect({
//        left: 100,
//        top: 100,
//        fill: 'red',
//        width: 50,
//        height: 50,
//        erasable: true
//    });
//    resetBrushesSelection();
//    canvas.add(redSquare);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(redSquare);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.isDrawingMode = false;
//}
//export function addRectangle() {
//    var rect = new fabric.Rect({
//        left: 200,
//        top: 200,
//        fill: 'blue',
//        width: 70,
//        height: 50,
//        erasable: true
//    });
//    resetBrushesSelection();
//    canvas.add(rect);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(rect);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.isDrawingMode = false;
//}
//export function addCircle() {
//    var circle = new fabric.Circle({
//        left: 100,
//        top: 100,
//        radius: 50,
//        fill: 'blue',
//        stroke: 'black',
//        strokeWidth: 2
//    });
//    resetBrushesSelection();
//    canvas.add(circle);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(circle);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.isDrawingMode = false;
//}
//export function addTriangle() {
//    var triangle = new fabric.Triangle({
//        width: 100,
//        height: 100,
//        fill: 'blue',
//        left: 150,
//        top: 150,
//        erasable: true
//    });
//    resetBrushesSelection();
//    canvas.add(triangle);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(triangle);

//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.isDrawingMode = false;
//}
//export function addPentagon() {

//    let centerX = 200;
//    let centerY = 200;
//    let radius = 80;
//    let rotation = Math.PI / 5; // Rotate to make a flat base

//    let points = [];
//    let sides = 5;
//    let angle = (2 * Math.PI) / sides;

//    for (var i = 0; i < sides; i++) {
//        var x = centerX + radius * Math.cos(rotation + i * angle - Math.PI / 2);
//        var y = centerY + radius * Math.sin(rotation + i * angle - Math.PI / 2);
//        points.push({ x: x, y: y });
//    }

//    let pentagon = new fabric.Polygon(points, {
//        fill: 'lightblue',
//        stroke: 'darkblue',
//        strokeWidth: 2,
//        selectable: true,
//        //objectCaching: false       // Disable caching for better performance with complex paths
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(pentagon);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(pentagon);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}

//export function addStar() {
//    let cx = 250;
//    let cy = 250;
//    let spikes = 5;
//    let outerRadius = 100;
//    let innerRadius = 50;
//    var starPoints = [];
//    var rot = Math.PI / 2 * 3;
//    var step = Math.PI / spikes;

//    for (var i = 0; i < spikes; i++) {
//        var x = cx + Math.cos(rot) * outerRadius;
//        var y = cy + Math.sin(rot) * outerRadius;
//        starPoints.push({ x: x, y: y });
//        rot += step;

//        x = cx + Math.cos(rot) * innerRadius;
//        y = cy + Math.sin(rot) * innerRadius;
//        starPoints.push({ x: x, y: y });
//        rot += step;
//    }

//    var star = new fabric.Polygon(starPoints, {
//        fill: 'yellow',
//        stroke: 'orange',
//        strokeWidth: 2,
//        selectable: true,
//        //strokeDashArray: [5, 5], // Dashed border: 5 units dash, 5 units gap
//        opacity: 0.8,
//        angle: 0
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(star);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(star);

//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}

//export function addCylinder() {
//    // Define the path data for the cylinder
//    let pathData = `
//        M 54 11.2
//        C 36.72 11.2 23.76 18.16 23.76 27.44
//        V 85.68
//        C 23.76 86.12 24.08 86.92 24.08 86.92
//        C 26.12 95 38.48 100.8 54 100.8
//        C 69.52 100.8 81.8 95.04 83.92 87
//        C 84.24 86.6 84.36 86.16 84.36 85.68
//        V 27.44
//        C 84.36 18.16 71.28 11.2 54 11.2
//        Z
//        M 54 38.08
//        C 42.28 38.08 29.16 33.52 29.16 27.44
//        C 29.16 21.36 42.28 16.8 54 16.8
//        C 65.72 16.8 78.84 21.36 78.84 27.44
//        C 78.84 33.52 65.72 38.08 54 38.08
//        Z
//    `;
//    // Create a single object using fabric.Path to represent the cylinder
//    let cylinder = new fabric.Path(pathData, {
//        fill: 'rgba(0, 0, 255, 0.2)', // Light blue fill for the top and body
//        //fill: 'transparent', // No fill to just create an outline
//        stroke: 'blue', // Border color
//        //stroke: 'black', // Black border color
//        strokeWidth: 1,
//        selectable: true,
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.discardActiveObject();
//    canvas.add(cylinder);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(cylinder);

//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}

//export function addHexagon() {
//    let pathData = `
//        M 77.8716 95.2008
//        H 34.12156
//        C 32.86156 95.2008 31.6978 94.5464 31.07656 93.484
//        L 9.20156 56.084
//        C 8.58908 55.0384 8.58908 53.7632 9.20156 52.7264
//        L 31.07656 15.32636
//        C 31.6978 14.26388 32.86156 13.60936 34.12156 13.60936
//        H 77.8716
//        C 79.1316 13.60936 80.29536 14.26388 80.9166 15.32636
//        L 102.7916 52.7264
//        C 103.40408 53.772 103.40408 55.0464 102.7916 56.084
//        L 80.9166 93.484
//        C 80.29536 94.5464 79.1316 95.2008 77.8716 95.2008
//        Z
//    `;
//    // Create a single hexagon object using fabric.Path
//    let hexagon = new fabric.Path(pathData, {
//        fill: 'lightgray',  // Light gray fill to distinguish the hexagon
//        stroke: 'black',    // Black border color
//        strokeWidth: 2,     // Width of the border line
//        selectable: true,   // Allow interaction with the hexagon
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(hexagon);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(hexagon);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}


//export function addHeart() {
//    // Define the path data for the heart
//    let pathData = `
//        M 8 1.314
//        C 12.438 -3.248 23.534 4.735 8 15
//        C -7.534 4.736 3.562 -3.248 8 1.314
//        Z
//    `;

//    // Create a single heart object using fabric.Path
//    let heart = new fabric.Path(pathData, {
//        fill: 'red',       // Set the fill color of the heart
//        stroke: 'darkred', // Set the stroke color
//        strokeWidth: 1.5,  // Width of the border line
//        selectable: true,  // Allow interaction with the heart
//        scaleX: 8,         // Scale down the heart horizontally
//        scaleY: 8          // Scale down the heart vertically
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(heart);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(heart);

//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}


//export function addMoon() {
//    let pathData = `
//        M 6 0.278
//        A 0.77 0.77 0 0 1 6.08 1.136
//        A 7.2 7.2 0 0 0 5.202 4.718
//        C 5.202 8.739 8.48 11.995 12.52 11.995
//        Q 13.312 11.994 14.053 11.834
//        A 0.79 0.79 0 0 1 14.863 12.15
//        A 0.73 0.73 0 0 1 14.832 13.043
//        A 8.35 8.35 0 0 1 8.344 16
//        C 3.734 16 0 12.286 0 7.71
//        C 0 4.266 2.114 1.312 5.124 0.06
//        A 0.75 0.75 0 0 1 6 0.278
//        Z
//    `;

//    let moon = new fabric.Path(pathData, {
//        fill: 'yellow',     // Set the fill color for the moon
//        stroke: 'goldenrod',// Set the stroke color for the outline
//        strokeWidth: 0.5,   // Width of the border line
//        selectable: true,   // Allow interaction with the moon
//        scaleX: 10,         // Scale the moon horizontally
//        scaleY: 10          // Scale the moon vertically
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(moon);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(moon);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}

//export function addSun() {
//    // Define the path data for the sun based on the provided SVG
//    let pathData = `
//        M 8 12
//        A 4 4 0 1 0 8 4
//        A 4 4 0 0 0 8 12
//        M 8 0
//        A 0.5 0.5 0 0 1 8.5 0.5
//        V 2.5
//        A 0.5 0.5 0 0 1 7.5 2.5
//        V 0.5
//        A 0.5 0.5 0 0 1 8 0
//        M 8 13
//        A 0.5 0.5 0 0 1 8.5 13.5
//        V 15.5
//        A 0.5 0.5 0 0 1 7.5 15.5
//        V 13.5
//        A 0.5 0.5 0 0 1 8 13
//        M 16 8
//        A 0.5 0.5 0 0 1 15.5 8.5
//        H 13.5
//        A 0.5 0.5 0 0 1 13.5 7.5
//        H 15.5
//        A 0.5 0.5 0 0 1 16 8
//        M 3 8
//        A 0.5 0.5 0 0 1 2.5 8.5
//        H 0.5
//        A 0.5 0.5 0 0 1 0.5 7.5
//        H 2.5
//        A 0.5 0.5 0 0 1 3 8
//        M 13.657 2.343
//        A 0.5 0.5 0 0 1 13.657 3.05
//        L 12.243 4.464
//        A 0.5 0.5 0 1 1 11.536 3.757
//        L 12.95 2.343
//        A 0.5 0.5 0 0 1 13.657 2.343
//        M 4.464 11.536
//        A 0.5 0.5 0 0 1 4.464 12.243
//        L 3.05 13.657
//        A 0.5 0.5 0 0 1 2.343 12.95
//        L 3.757 11.536
//        A 0.5 0.5 0 0 1 4.464 11.536
//        M 13.657 13.657
//        A 0.5 0.5 0 0 1 12.95 13.657
//        L 11.536 12.243
//        A 0.5 0.5 0 0 1 12.243 11.536
//        L 13.657 12.95
//        A 0.5 0.5 0 0 1 13.657 13.657
//        M 4.464 4.465
//        A 0.5 0.5 0 0 1 3.757 4.465
//        L 2.343 3.05
//        A 0.5 0.5 0 1 1 3.05 2.343
//        L 4.464 3.757
//        A 0.5 0.5 0 0 1 4.464 4.465
//    `;

//    // Create a single sun object using fabric.Path
//    let sun = new fabric.Path(pathData, {
//        fill: 'yellow',      // Set the fill color for the sun
//        stroke: 'orange',    // Set the stroke color for the sun outline
//        strokeWidth: 0.5,    // Width of the border line
//        selectable: true,    // Allow interaction with the sun
//        scaleX: 15,          // Scale the sun horizontally
//        scaleY: 15           // Scale the sun vertically
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(sun);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(sun);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}


//export function addTrapezoid() {
//    let pathData = `
//        M 23.9695 22.5248
//        H 2.03202
//        C 1.7903 22.5248 1.5628 22.4122 1.40843 22.2188
//        C 1.25406 22.0254 1.19109 21.7683 1.23374 21.5218
//        L 4.07749 5.3718
//        C 4.14859 4.96805 4.48374 4.6748 4.87577 4.6748
//        H 21.1258
//        C 21.5178 4.6748 21.853 4.96805 21.9241 5.3718
//        L 24.7678 21.5218
//        C 24.8125 21.7704 24.7475 22.0254 24.5931 22.2188
//        C 24.4387 22.4122 24.2092 22.5248 23.9695 22.5248
//        Z`;
//    let trapezoid = new fabric.Path(pathData, {
//        fill: 'gray',      // Set the fill color for the trapezoid
//        stroke: 'black',    // Set the stroke color for the outline
//        strokeWidth: 0.5,   // Width of the border line
//        selectable: true,   // Allow interaction with the trapezoid
//        scaleX: 4,          // Scale the trapezoid horizontally
//        scaleY: 4           // Scale the trapezoid vertically
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(trapezoid);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(trapezoid);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}


//export function addParallelogram() {
//    let pathData = `
//        M 22.3588 22.5248
//        H 1.265
//        C 1.00977 22.5248 0.769301 22.4101 0.608988 22.2103
//        C 0.448676 22.0106 0.385394 21.7492 0.438129 21.5006
//        L 3.81524 5.35055
//        C 3.8975 4.95743 4.24133 4.6748 4.64 4.6748
//        H 25.7338
//        C 25.989 4.6748 26.2295 4.78955 26.3898 4.9893
//        C 26.5501 5.18905 26.6134 5.45043 26.5606 5.69905
//        L 23.1856 21.8491
//        C 23.1034 22.2422 22.7595 22.5248 22.3609 22.5248
//        H 22.3588
//        Z`;
//    let parallelogram = new fabric.Path(pathData, {
//        fill: 'blue',       // Set the fill color for the parallelogram
//        stroke: 'black',    // Set the stroke color for the outline
//        strokeWidth: 0.5,   // Width of the border line
//        selectable: true,   // Allow interaction with the parallelogram
//        scaleX: 4,          // Scale the parallelogram horizontally
//        scaleY: 4           // Scale the parallelogram vertically
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(parallelogram);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(parallelogram);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}


//export function addDrop() {
//    // Define the path data for the drop based on the provided SVG
//    let pathData = `
//        M 8 16
//        A 6 6 0 0 0 14 10
//        C 14 8.345 12.878 7.096 11.568 5.638
//        C 10.254 4.176 8.75 2.503 8 0
//        C 8 0 2 5.686 2 10
//        A 6 6 0 0 0 8 16
//        M 6.646 4.646
//        L 7.354 5.354
//        C 7.064 5.644 6.226 6.665 5.447 8.224
//        L 4.553 7.776
//        C 5.373 6.135 6.27 5.023 6.646 4.646
//    `;
//    let drop = new fabric.Path(pathData, {
//        fill: 'blue',       // Set the fill color for the drop
//        stroke: 'black',    // Set the stroke color for the outline
//        strokeWidth: 0.5,   // Width of the border line
//        selectable: true,   // Allow interaction with the drop
//        scaleX: 10,         // Scale the drop horizontally
//        scaleY: 10          // Scale the drop vertically
//    });
//    resetBrushesSelection();
//    canvas.isDrawingMode = false;
//    canvas.add(drop);
//    if (selectableObjectsActive) {
//        canvas.setActiveObject(drop);
//    } else {
//        toggleObjectsSelectable(false);
//    }
//    canvas.renderAll();
//}

