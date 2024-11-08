




//pencilActive = false;
//smallBrushActive = false;
//mediumBrushActive = false;
//bigBrushActive = false;
//eraserActive = false;

// toggle ability to select objects on canvas


const brushes = [
    {
        name: 'Pencil',
        type: 'pencil',
        brush: pencil,
        activeStateVar: 'pencilActive',
        width: 1
    },
    {
        name: 'Small',
        type: 'small',
        brush: smallBrush,
        activeStateVar: 'smallBrushActive',
        width: 5
    },
    {
        name: 'Medium',
        type: 'medium',
        brush: mediumBrush,
        activeStateVar: 'mediumBrushActive',
        width: 10
    },
    {
        name: 'Big',
        type: 'big',
        brush: bigBrush,
        activeStateVar: 'bigBrushActive',
        width: 20
    },
    {
        name: 'Eraser',
        type: 'eraser',
        brush: eraserBrush,
        activeStateVar: 'eraserActive',
        width: 15
    }
];









// reset brush selection when shapes are added to the canvas
export function resetBrushesSelection() {
    pencilActive = false;
    smallBrushActive = false;
    mediumBrushActive = false;
    bigBrushActive = false;
    eraserActive = false;
    //console.log(canvas.getObjects());
}
export function isAnyBrushSelected() {
    return pencilActive || smallBrushActive || mediumBrushActive || bigBrushActive || eraserActive;
}
export function getCurrentBrushesSelection() {
    //console.log("pencilActive: ", pencilActive);
    //console.log("smallBrushActive: ", smallBrushActive);
    //console.log("mediumBrushActive: ", mediumBrushActive);
    //console.log("bigBrushActive: ", bigBrushActive);
    //console.log("eraserActive: ", eraserActive);
    return [pencilActive, smallBrushActive, mediumBrushActive, bigBrushActive, eraserActive, selectableObjectsActive];
}







export function toggleBrush(brushType, color = "black") {
    let selectedBrush = brushes.find(b => b.type === brushType);
    // Reset non-selected brushes to inactive
    brushes.forEach(brush => {
        if (brush.activeStateVar !== selectedBrush.activeStateVar) {
            window[brush.activeStateVar] = false;
        }
    });

    let brushNameActive = selectedBrush.activeStateVar;
    window[brushNameActive] = !window[brushNameActive];
    // Toggle the selected brush
    if (window[brushNameActive]) {
        canvas.freeDrawingBrush = selectedBrush.brush;
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = selectedBrush.width;
        console.log("resolveCssVariable(drawState.selectedColor): ", resolveCssVariable(drawState.selectedColor));
        canvas.freeDrawingBrush.color = resolveCssVariable(drawState.selectedColor);
    } else {
        canvas.isDrawingMode = false;
    }
}

export function enableEraser() {

    eraserActive = !eraserActive;
    if (eraserActive) {
        canvas.freeDrawingBrush = eraserBrush;
        canvas.isDrawingMode = true;
        canvas.freeDrawingBrush.width = 10;
        eraserBrush.color = 'rgba(255, 255, 255, 1)'; // White color (assuming a white background)

        pencilActive = false;
        smallBrushActive = false;
        mediumBrushActive = false;
        bigBrushActive = false;
    } else {
        canvas.isDrawingMode = false;
    }
    // Custom behavior to remove objects intersected by the eraser path
    canvas.on('path:created', function (event) {
        if (!eraserActive) return;

        const path = event.path;
        const objectsToErase = [];

        canvas.getObjects().forEach((obj) => {
            if (obj.intersectsWithObject(path)) {
                objectsToErase.push(obj);
            }
        });
        objectsToErase.forEach((obj) => {
            obj.visible = false;      // Hide the object
            obj.selectable = false;   // Make it non-selectable
            obj.evented = false;      // Make it non-interactive
            canvas.remove(obj);

        });
        // Remove the path after it has "erased" objects
        canvas.remove(path);
    });
}






// Function to generate polygon points
export function generatePolygonPoints(sides, centerX, centerY, radius, rotation) {
    let points = [];
    let angle = (2 * Math.PI) / sides;
    for (let i = 0; i < sides; i++) {
        let x = centerX + radius * Math.cos(rotation + i * angle - Math.PI / 2);
        let y = centerY + radius * Math.sin(rotation + i * angle - Math.PI / 2);
        points.push({ x: x, y: y });
    }
    return points;
}


// Function to generate star points
export function generateStarPoints(spikes, centerX, centerY, outerRadius, innerRadius) {
    let points = [];
    let rot = Math.PI / 2 * 3;
    let step = Math.PI / spikes;

    for (let i = 0; i < spikes; i++) {
        let x = centerX + Math.cos(rot) * outerRadius;
        let y = centerY + Math.sin(rot) * outerRadius;
        points.push({ x: x, y: y });
        rot += step;

        x = centerX + Math.cos(rot) * innerRadius;
        y = centerY + Math.sin(rot) * innerRadius;
        points.push({ x: x, y: y });
        rot += step;
    }

    return points;
}





// Array of shapes containing their properties
const shapes = [
    {
        name: 'Square',
        type: 'Rect',
        options: {
            left: 100,
            top: 100,
            fill: resolveCssVariable(drawState.selectedColor),
            width: 50,
            height: 50,
            erasable: true,
            selectable: true
        }
    },
    {
        name: 'Rectangle',
        type: 'Rect',
        options: {
            left: 200,
            top: 200,
            fill: resolveCssVariable(drawState.selectedColor),
            width: 70,
            height: 50,
            erasable: true,
            selectable: true
        }
    },
    {
        name: 'Circle',
        type: 'Circle',
        options: {
            left: 100,
            top: 100,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'black',
            strokeWidth: 2,
            radius: 50,
            erasable: true,
            selectable: true
        }
    },
    {
        name: 'Triangle',
        type: 'Triangle',
        options: {
            width: 100,
            height: 100,
            fill: resolveCssVariable(drawState.selectedColor),
            left: 150,
            top: 150,
            erasable: true,
            selectable: true
        }
    },
    {
        name: 'Pentagon',
        type: 'Polygon',
        options: {
            points: generatePolygonPoints(5, 200, 200, 80, Math.PI / 5),
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'darkblue',
            strokeWidth: 2,
            erasable: true,
            selectable: true,
        }
    },
    {
        name: 'Star',
        type: 'Polygon',
        options: {
            points: generateStarPoints(5, 250, 250, 100, 50),
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'orange',
            strokeWidth: 2,
            erasable: true,
            selectable: true
        }
    },
    {
        name: 'Cylinder',
        type: 'Path',
        options: {
            pathData: `
                M 54 11.2
                C 36.72 11.2 23.76 18.16 23.76 27.44
                V 85.68
                C 23.76 86.12 24.08 86.92 24.08 86.92
                C 26.12 95 38.48 100.8 54 100.8
                C 69.52 100.8 81.8 95.04 83.92 87
                C 84.24 86.6 84.36 86.16 84.36 85.68
                V 27.44
                C 84.36 18.16 71.28 11.2 54 11.2
                Z
                M 54 38.08
                C 42.28 38.08 29.16 33.52 29.16 27.44
                C 29.16 21.36 42.28 16.8 54 16.8
                C 65.72 16.8 78.84 21.36 78.84 27.44
                C 78.84 33.52 65.72 38.08 54 38.08
                Z
            `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'blue',
            strokeWidth: 1,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Hexagon',
        type: 'Path',
        options: {
            pathData: `
                M 77.8716 95.2008
                H 34.12156
                C 32.86156 95.2008 31.6978 94.5464 31.07656 93.484
                L 9.20156 56.084
                C 8.58908 55.0384 8.58908 53.7632 9.20156 52.7264
                L 31.07656 15.32636
                C 31.6978 14.26388 32.86156 13.60936 34.12156 13.60936
                H 77.8716
                C 79.1316 13.60936 80.29536 14.26388 80.9166 15.32636
                L 102.7916 52.7264
                C 103.40408 53.772 103.40408 55.0464 102.7916 56.084
                L 80.9166 93.484
                C 80.29536 94.5464 79.1316 95.2008 77.8716 95.2008
                Z
            `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'black',
            strokeWidth: 2,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Heart',
        type: 'Path',
        options: {
            pathData: `
            M 8 1.314
            C 12.438 -3.248 23.534 4.735 8 15
            C -7.534 4.736 3.562 -3.248 8 1.314
            Z
        `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'darkred',
            scaleX: 8,
            scaleY: 8,
            strokeWidth: 1.5,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Moon',
        type: 'Path',
        options: {
            pathData: `
            M 6 0.278
            A 0.77 0.77 0 0 1 6.08 1.136
            A 7.2 7.2 0 0 0 5.202 4.718
            C 5.202 8.739 8.48 11.995 12.52 11.995
            Q 13.312 11.994 14.053 11.834
            A 0.79 0.79 0 0 1 14.863 12.15
            A 0.73 0.73 0 0 1 14.832 13.043
            A 8.35 8.35 0 0 1 8.344 16
            C 3.734 16 0 12.286 0 7.71
            C 0 4.266 2.114 1.312 5.124 0.06
            A 0.75 0.75 0 0 1 6 0.278
            Z
        `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'goldenrod',
            strokeWidth: 0.5,
            scaleX: 10,
            scaleY: 10,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Sun',
        type: 'Path',
        options: {
            pathData: `
               M 8 12
               A 4 4 0 1 0 8 4
               A 4 4 0 0 0 8 12
               M 8 0
               A 0.5 0.5 0 0 1 8.5 0.5
               V 2.5
               A 0.5 0.5 0 0 1 7.5 2.5
               V 0.5
               A 0.5 0.5 0 0 1 8 0
               M 8 13
               A 0.5 0.5 0 0 1 8.5 13.5
               V 15.5
               A 0.5 0.5 0 0 1 7.5 15.5
               V 13.5
               A 0.5 0.5 0 0 1 8 13
               M 16 8
               A 0.5 0.5 0 0 1 15.5 8.5
               H 13.5
               A 0.5 0.5 0 0 1 13.5 7.5
               H 15.5
               A 0.5 0.5 0 0 1 16 8
               M 3 8
               A 0.5 0.5 0 0 1 2.5 8.5
               H 0.5
               A 0.5 0.5 0 0 1 0.5 7.5
               H 2.5
               A 0.5 0.5 0 0 1 3 8
               M 13.657 2.343
               A 0.5 0.5 0 0 1 13.657 3.05
               L 12.243 4.464
               A 0.5 0.5 0 1 1 11.536 3.757
               L 12.95 2.343
               A 0.5 0.5 0 0 1 13.657 2.343
               M 4.464 11.536
               A 0.5 0.5 0 0 1 4.464 12.243
               L 3.05 13.657
               A 0.5 0.5 0 0 1 2.343 12.95
               L 3.757 11.536
               A 0.5 0.5 0 0 1 4.464 11.536
               M 13.657 13.657
               A 0.5 0.5 0 0 1 12.95 13.657
               L 11.536 12.243
               A 0.5 0.5 0 0 1 12.243 11.536
               L 13.657 12.95
               A 0.5 0.5 0 0 1 13.657 13.657
               M 4.464 4.465
               A 0.5 0.5 0 0 1 3.757 4.465
               L 2.343 3.05
               A 0.5 0.5 0 1 1 3.05 2.343
               L 4.464 3.757
               A 0.5 0.5 0 0 1 4.464 4.465
           `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'orange',
            strokeWidth: 0.5,
            scaleX: 15,
            scaleY: 15,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Trapezoid',
        type: 'Path',
        options: {
            pathData: `
            M 23.9695 22.5248
            H 2.03202
            C 1.7903 22.5248 1.5628 22.4122 1.40843 22.2188
            C 1.25406 22.0254 1.19109 21.7683 1.23374 21.5218
            L 4.07749 5.3718
            C 4.14859 4.96805 4.48374 4.6748 4.87577 4.6748
            H 21.1258
            C 21.5178 4.6748 21.853 4.96805 21.9241 5.3718
            L 24.7678 21.5218
            C 24.8125 21.7704 24.7475 22.0254 24.5931 22.2188
            C 24.4387 22.4122 24.2092 22.5248 23.9695 22.5248
            Z
        `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'black',
            strokeWidth: 0.5,
            scaleX: 4,
            scaleY: 4,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Parallelogram',
        type: 'Path',
        options: {
            pathData: `
            M 22.3588 22.5248
            H 1.265
            C 1.00977 22.5248 0.769301 22.4101 0.608988 22.2103
            C 0.448676 22.0106 0.385394 21.7492 0.438129 21.5006
            L 3.81524 5.35055
            C 3.8975 4.95743 4.24133 4.6748 4.64 4.6748
            H 25.7338
            C 25.989 4.6748 26.2295 4.78955 26.3898 4.9893
            C 26.5501 5.18905 26.6134 5.45043 26.5606 5.69905
            L 23.1856 21.8491
            C 23.1034 22.2422 22.7595 22.5248 22.3609 22.5248
            H 22.3588
            Z
        `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'black',
            strokeWidth: 0.5,
            scaleX: 4,
            scaleY: 4,
            selectable: true,
            erasable: true
        }
    },
    {
        name: 'Drop',
        type: 'Path',
        options: {
            pathData: `
            M 8 16
            A 6 6 0 0 0 14 10
            C 14 8.345 12.878 7.096 11.568 5.638
            C 10.254 4.176 8.75 2.503 8 0
            C 8 0 2 5.686 2 10
            A 6 6 0 0 0 8 16
            M 6.646 4.646
            L 7.354 5.354
            C 7.064 5.644 6.226 6.665 5.447 8.224
            L 4.553 7.776
            C 5.373 6.135 6.27 5.023 6.646 4.646
        `,
            fill: resolveCssVariable(drawState.selectedColor),
            stroke: 'black',
            strokeWidth: 0.5,
            scaleX: 10,
            scaleY: 10,
            selectable: true,
            erasable: true
        }
    }
];







// General function to add shapes to the canvas with dynamic options
export function addShape(shapeName, customOptions = {}) {
    //console.log("customOptions: ", customOptions);
    console.log("#1 drawState.selectedColor: ", drawState.selectedColor);
    const shape = shapes.find(s => s.name.toLowerCase() === shapeName.toLowerCase());
    if (!shape) {
        console.error('Shape not found:', shapeName);
        return;
    }
    // Merge custom options with default options, keeping only provided custom options dynamic 
    // (overriding defaults with custom values, only when custom values are present)
    //const options = {
    //    ...shape.options,
    //    ...Object.keys(customOptions).reduce((acc, key) => {
    //        if (customOptions[key] !== undefined) {
    //            if (key === 'fill') {
    //                // Resolve CSS variables for the 'fill' property
    //                /*acc[key] = resolveCssVariable(customOptions[key]);*/
    //                acc[key] = resolveCssVariable(drawState.selectedColor);
    //            } else {
    //                acc[key] = customOptions[key];
    //            }
    //        }
    //        return acc;
    //    }, {})
    //};
    const options = {
        ...shape.options,
        ...Object.keys(customOptions).reduce((acc, key) => {
            if (customOptions[key] !== undefined) {
                acc[key] = customOptions[key];
            }
            return acc;
        }, {}),
        fill: resolveCssVariable(drawState.selectedColor), // Ensure the fill is set to selected color
    };
    let fabricShape;

    switch (shape.type) {
        case 'Rect':
            fabricShape = new fabric.Rect(options);
            break;
        case 'Circle':
            fabricShape = new fabric.Circle(options);
            break;
        case 'Triangle':
            fabricShape = new fabric.Triangle(options);
            break;
        case 'Polygon':
            fabricShape = new fabric.Polygon(options.points || shape.options.points, options);
            break;
        case 'Path':
            fabricShape = new fabric.Path(options.pathData, options);
            break;
        case 'Ellipse':
            fabricShape = new fabric.Ellipse(options);
            break;
        case 'Line':
            fabricShape = new fabric.Line(options.points || [0, 0, 100, 100], options);
            break;
        case 'Polyline':
            fabricShape = new fabric.Polyline(options.points || shape.options.points, options);
            break;
        case 'Text':
            fabricShape = new fabric.Text(options.text || 'Default Text', options);
            break;
        case 'IText':
            fabricShape = new fabric.IText(options.text || 'Default Editable Text', options);
            break;
        default:
            console.error('Shape type not recognized:', shape.type);
            return;
    }

    resetBrushesSelection();
    canvas.add(fabricShape);

    if (selectableObjectsActive) {
        canvas.setActiveObject(fabricShape);
    } else {
        toggleObjectsSelectable(false);
    }
    canvas.isDrawingMode = false;
    canvas.renderAll();
}

// Example usage:
// addShape('Square', { left: 300, top: 300, fill: 'green', width: 100, height: 100 });
// addShape('Circle', { left: 400, top: 400, radius: 75, fill: 'purple' });
//addShap('Drop');
//addShape('Square', { fill: 'green' });





function resolveCssVariable(value) {
    if (typeof value === 'string' && value.startsWith('--')) {
        //const rootStyles = getComputedStyle(document.documentElement);
        const resolvedValue = drawState.rootStyles.getPropertyValue(value).trim();
        return resolvedValue || value; // Return the resolved value, or the original if not found
    }
    return value;
}


export function selectColor(newSelected) {
    drawState.selectedColor = newSelected;

    if (canvas.isDrawingMode) {
        canvas.freeDrawingBrush.color = resolveCssVariable(drawState.selectedColor); // update brush color
    }
    const activeObjects = canvas.getActiveObjects();
    if (activeObjects.length > 0) {
        activeObjects.forEach((obj) => {
            // Change the fill color of each selected object
            //if (obj.type !== 'group') {
            //    obj.set('fill', resolveCssVariable(drawState.selectedColor)); // update shapes color
            //}
            switch (obj.type) {

                case 'line':
                case 'path':
                    // Differentiate between brush-created paths and other paths
                    if (obj.stroke && !obj.fill) {
                        // This is likely a brush stroke, just update the stroke color
                        obj.set({
                            stroke: resolveCssVariable(drawState.selectedColor),
                            fill:  null // Ensure fill is not set, to avoid filling the entire area
                        });
                    } else {
                        // For general paths, update both stroke and fill
                        obj.set({
                            fill: resolveCssVariable(drawState.selectedColor),
                            stroke: obj.stroke || null
                        });
                        // Mark the object as dirty so that Fabric.js knows it needs to re-render
                        obj.dirty = true;
                        // Update coordinates to ensure the object reflects the change
                        obj.setCoords();
                    }
                    break;

                //case 'line': // In case it's a free line
                //    obj.set({ // update brush color
                //        stroke: resolveCssVariable(drawState.selectedColor),
                //        fill: obj.fill || 'transparent', // Ensure fill is not set, to avoid filling the entire area
                //    });
                //case 'path':
                //    obj.fill = resolveCssVariable(drawState.selectedColor);
                //    // Mark the object as dirty so that Fabric.js knows it needs to re-render
                //    obj.dirty = true;
                //    // Update coordinates to ensure the object reflects the change
                //    obj.setCoords();
                //    break;
                case 'rect':
                case 'circle':
                case 'polygon':
                case 'triangle':
                    //obj.set('fill', resolveCssVariable(drawState.selectedColor)); // update shapes color
                    obj.set({
                        fill: resolveCssVariable(drawState.selectedColor),
                        stroke: obj.stroke || null // Preserve stroke if it already exists or set to null if not needed
                    });
                    break;
                default:
                    console.log(`Object type ${obj.type} is not handled for color change.`);
                    break;
            }
            // Force recalculation of coordinates
            obj.setCoords();
        });

    } else {
        if (!isAnyBrushSelected()) {
            canvas.backgroundColor = resolveCssVariable(drawState.selectedColor);
        }
        console.log('No objects are currently selected.');
    }
    // Re-render the canvas to reflect the color changes
    canvas.renderAll();
    return drawState.selectedColor;
}






function toggleObjectsSelectable(isSelectable) {
    //console.log("isSelectable: " + isSelectable);
    canvas.getObjects().forEach(function (object) {
        object.selectable = isSelectable;
    });;
}



export function activateAllObjectsSelection() {
    selectableObjectsActive = !selectableObjectsActive;
    toggleObjectsSelectable(selectableObjectsActive);
    if (!selectableObjectsActive) {
        canvas.discardActiveObject();
    }
    canvas.renderAll();
    //return selectableObjectsActive;
}




