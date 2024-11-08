

var canvas;
var activeObject;


//----------------------------------------------------------------------------------
//------------------------------------- BRUSHES ------------------------------------
//----------------------------------------------------------------------------------
var eraserBrush;
var eraserActive = false;

var pencil;
var pencilActive = false;

var smallBrushActive = false;
var smallBrush;

var mediumBrushActive = false;
var mediumBrush;

var bigBrushActive = false;
var bigBrush;

//var circleBrush;
//var circleBrushActive = false;

var sprayBrush;
var sprayBrushActive = false;

var patternBrush;



var selectableObjectsActive;



// Get computed color values for css variable names
//var rootStyles = getComputedStyle(document.documentElement);

const drawState = {
    selectedColor: "--mem-color-plum-grey",
    rootStyles: getComputedStyle(document.documentElement),
    //eraserBrush: null,
    //eraserActive: false,
    //pencil: null,
    //pencilActive: false,
    //smallBrush: null,
    //smallBrushActive: false,
    //mediumBrush: null,
    //mediumBrushActive: false,
    //bigBrush: null,
    //bigBrushActive: false,
    //sprayBrush: null,
    //sprayBrushActive: false,
    //patternBrush: null,
    //patternBrushActive: false,
    //selectableObjectsActive: false
};



var selectedColor = "--mem-color-plum-grey";


//var memColorPlumGrey = "#432B4E";
//var memColorRaspberryMagenta = "#9D1885";
//var memColorFuchsiaRose = "#D74CAB";
//var memColorBerryPink = "#B3408D";
//var memColorBubblegumPink = "#FF74B1";
//var memColorCrimsonRed = "#FF0100";
//var memColorSunsetCoral = "#FD6254";
//var memColorFlameOrange = "#FD610B";
//var memColorTangerine = "#FD9405";
//var memColorMarigoldYellow = "#FFB409";
//var memColorAmberOrange = "#CE6F00";
//var memColorCitrusLime = "#D6E100";
//var memColorLemonGlow = "#FFE10E";
//var memColorDijonMustard = "#C9A506";
//var memColorFreshLime = "#9AD804";
//var memColorSpringGreen = "#B6C522";
//var memColorMossOlive = "#6D8512";
//var memColorMeadowGreen = "#19AA17";
//var memColorWoodlandGreen = "#2B6E20";
//var memColorDeeptealGreen = "#1C5B50";
//var memColorArcticBlue = "#85D9F5";
//var memColorSapphireBlue = "#1446E7";
//var memColorCornflowerBlue = "#5D5EB8";
//var memColorMidnightBlue = "#323C84";
//var memColorVelvetIndigo = "#2B2797";
//var memColorOnyxBlack = "#111212";
//var memColorGraphiteGrey = "#363636";
//var memColorAshGrey = "#8F8F8F";
//var memColorSilverMist = "#CFCFCF";
//var memColorSnowWhite = "#FFFFFF";


//fabric.Object.prototype.erasable = true;



// public string MemColorPlumGrey = "#432B4E";
// public string MemColorRaspberryMagenta = "#9D1885";
// public string MemColorFuchsiaRose = "#D74CAB";
// public string MemColorBerryPink = "#B3408D";
// public string MemColorBubblegumPink = "#FF74B1";
// public string MemColorCrimsonRed = "#FF0100";
// public string MemColorSunsetCoral = "#FD6254";
// public string MemColorFlameOrange = "#FD610B";
// public string MemColorTangerine = "#FD9405";
// public string MemColorMarigoldYellow = "#FFB409";
// public string MemColorAmberOrange = "#CE6F00";
// public string MemColorCitrusLime = "#D6E100";
// public string MemColorLemonGlow = "#FFE10E";
// public string MemColorDijonMustard = "#C9A506";
// public string MemColorFreshLime = "#9AD804";
// public string MemColorSpringGreen = "#B6C522";
// public string MemColorMossOlive = "#6D8512";
// public string MemColorMeadowGreen = "#19AA17";
// public string MemColorWoodlandGreen = "#2B6E20";
// public string MemColorDeeptealGreen = "#1C5B50";
// public string MemColorArcticBlue = "#85D9F5";
// public string MemColorSapphireBlue = "#1446E7";
// public string MemColorCornflowerBlue = "#5D5EB8";
// public string MemColorMidnightBlue = "#323C84";
// public string MemColorVelvetIndigo = "#2B2797";
// public string MemColorOnyxBlack = "#111212";
// public string MemColorGraphiteGrey = "#363636";
// public string MemColorAshGrey = "#8F8F8F";
// public string MemColorSilverMist = "#CFCFCF";
// public string MemColorSnowWhite = "#FFFFFF";