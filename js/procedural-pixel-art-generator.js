//=include libraries/jscolor.js 

var examples = {
  sword: {"layers":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAXUlEQVRIie2PSwrAIBBD52hztNw8XfSD0XZVtRbyQIYQmDdGGGOMMcasC5nHRPPKfoAY17wXo6csz4VkpFYPeT9GurdHQLOK+/5YF1eiRqx5GLV4GhZP8zLwifi3bB8lRgc/vMVJAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAdklEQVRIie3VMQ6AIBBE0X+0PRo342hjIQ2aqIm4kwjTUFA8drMArDyMoDjUEFRQZMNVIFDNhtVgZaKlh1UycUvFcag4MnFDxQv+PzzfVNteLlur54HFNXC3P+YQbaCU+SXuYHTrymextdo2XJB0fU6os+KX2QCxLpL3243HNgAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAMElEQVRIie3OwQ0AIAwDsY7G/kuFFfhAi2RLeV+qAACYIcnxnpxpISx8LZqsvviPNr8QPgOTsW6cAAAAAElFTkSuQmCC"],"palette":["#ECF0D3","#9F9CAE","#5C5980","#734C3D","#A0694B","#FAC800","#101820"],"mirrorDrawingX":false,"mirrorDrawingY":false,"centerPixel":true,"mirrorGenerationX":true,"mirrorGenerationY":false,"variations":"6","drawOutline":true,"removeSinglePixels":true},
  shield: {"layers":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGklEQVRIie3BMQEAAADCoPVP7W8GoAAAAOANDi4AAUcnKGwAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAZ0lEQVRIie2UOw7AIAxDfXRu7g5dUtPP5IAqPwkxBOnZGQBCCEshBwAQ590iexy3hGjho+n03NZcgnhEVUIOPcT1eMLoyq3Nt2hc5SWUSj0sF9+s2ivWEO2Uxj2yt/F//urdyGpDUA4XM44P+pVcnQAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAXElEQVRIie3VOwpAIQxE0ex/07ExjKjp8gGdKwHlFcdGnghj7L9U1cY2NaBgcMi6wAaeMC6QjvofonDC78MTx+vF7Cv+SbXBDp6PtsIXvAa94HXogtvfqQ5ljDkN4Otbsz3rIakAAAAASUVORK5CYII="],"palette":["#B32424","#244294","#2085C8","#CAC3C3","#878787","#E9463A","#101820"],"mirrorDrawingX":false,"mirrorDrawingY":false,"centerPixel":true,"mirrorGenerationX":true,"mirrorGenerationY":false,"variations":"6","drawOutline":true,"removeSinglePixels":true},
  alien: {"layers":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAKElEQVRIie3NoQEAMAzDsJy2/59KadFgkUQMnQBcavN2L8fdBQDgawC2RAp3wuiloAAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAbklEQVRIie3TMQ7AMAgDQD+dn5OJyvKQDVO1WIqadDmICLDZ/D4JxO3cChfGewuaQNKy4anLgWq3T9cTeD8qBfRfMWEzV11dUgHB/7vQuMFtXY/BWoB9qrlb+3Ni2IYWzN9vwzLd/uGyw5vN63MAGO2RgSXzvmcAAAAASUVORK5CYII=","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAGklEQVRIie3BMQEAAADCoPVP7W8GoAAAAOANDi4AAUcnKGwAAAAASUVORK5CYII="],"palette":["#34A453","#10C840","#00A0C8","#736464","#A0694B","#FAC800","#101820"],"mirrorDrawingX":true,"mirrorDrawingY":false,"centerPixel":true,"mirrorGenerationX":true,"mirrorGenerationY":false,"variations":"4","drawOutline":true,"removeSinglePixels":true},
  spaceship: {"layers":["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAANElEQVRIie3RQREAQAjDwEpDGs7LEwd0bi5rII9IAP5lVSZq9W18o76Nx8Ibr8xnAADwvAHMWxfuIyEXCgAAAABJRU5ErkJggg==","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAZklEQVRIie3TMQ7AIAxDUR/dNzcDQYqAjk4H8qVIZXoUBNB1XSSAf8GqxBijCUuAOMcPa4NlhwO/wIWojqUH5H7MJ2y46/fgL9yOZji+EwzY33L669iEaEffTgLXvAEvvBztuu7WAFQop+3ZImmWAAAAAElFTkSuQmCC","data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAQ0lEQVRIie3OsQnAMAwF0T+aR9PmlyYGo8KlQ8w9EAI1p0SSJEk7BOZ8Ej0WJwxCtXARxr3hd894rff7wu2JOhbTLz3B8FgvCFUiSwAAAABJRU5ErkJggg=="],"palette":["#D2CECE","#4C58D4","#858585","#736464","#E67C1B","#FAC800","#101820"],"mirrorDrawingX":false,"mirrorDrawingY":false,"centerPixel":true,"mirrorGenerationX":true,"mirrorGenerationY":false,"variations":"4","drawOutline":true,"removeSinglePixels":true},
};

document.getElementById('examples').addEventListener('click', function (e) {
  if (e.target.tagName == 'IMG') {
    if (confirm('Loading this example will erase all current settings, are you sure?'))
      loadPreset(examples[e.target.title]);
  }
});

//variables
var width = 30;
var height = 30;
var zoom = 10;
var colors = [
  [255,0,0],
  [0,255,0],
  [0,0,255],
  [0,255,255],
  [255,0,255],
  [255,255,0],
  [0,0,0],
];

var dragging = false;
var lastPos = [0,0];
var linesDrawn = 0;
var colorsChanged = 0;


var demoContainer = document.querySelector("#pixel-demo");
var canvasContainer = document.querySelector("#main-canvas");
//var canvas = canvasContainer.querySelector("canvas");
var canvasHolder = canvasContainer.querySelector(".canvas-holder");
var canvases = canvasHolder.querySelectorAll('canvas');

//set canvases native dimentions and stacking order
canvases.forEach(function (c, i) {
  c.width = width;
  c.height = height;
  c.style.zIndex = 100 - 10*i;
});

//settings
var mirrorDrawingX = document.getElementById('checkbox-mirror-drawing-x');
var mirrorDrawingY = document.getElementById('checkbox-mirror-drawing-y');
var centerPixel = document.getElementById('checkbox-center-pixel');

var mirrorGenerationX = document.getElementById('checkbox-mirror-generation-x');
var mirrorGenerationY = document.getElementById('checkbox-mirror-generation-y');
var variations = document.getElementById('text-variations');
var drawOutline = document.getElementById('checkbox-draw-outline');
var removeSinglePixels = document.getElementById('checkbox-remove-single-pixels');

var paletteSelection = document.querySelector('.color-selection .selection');


var importButton = document.querySelector('.import');
var exportButton = document.querySelector('.export');
var exportHolder = document.querySelector('.export-holder');
var importHolder = document.querySelector('.import-holder');

var colorButtons = document.querySelectorAll(".color-selection .color .palette-color");

var eraserButton = document.querySelector('button.eraser');

eraserButton.addEventListener('click', function () {
  selectedCtx.fillStyle = 'rgba(0,0,0,0)';
  document.querySelector('#pixel-demo').classList.add('eraser');
  document.querySelector('.palette-color.current-color').classList.remove('current-color');

});

exportButton.addEventListener('click', function () {
  
  var customColors = document.querySelectorAll(".color-selection .color .jscolor");
  
  var settingsObject = {
    layers: [
      canvases[0].toDataURL('image/png'),
      canvases[1].toDataURL('image/png'),
      canvases[2].toDataURL('image/png'),
    ],
    palette: [
      customColors[0].jscolor.toHEXString(),
      customColors[1].jscolor.toHEXString(),
      customColors[2].jscolor.toHEXString(),
      customColors[3].jscolor.toHEXString(),
      customColors[4].jscolor.toHEXString(),
      customColors[5].jscolor.toHEXString(),
      customColors[6].jscolor.toHEXString(),
    ],
    mirrorDrawingX: mirrorDrawingX.checked,
    mirrorDrawingY: mirrorDrawingY.checked,
    centerPixel: centerPixel.checked,
    mirrorGenerationX: mirrorGenerationX.checked,
    mirrorGenerationY: mirrorGenerationY.checked,
    variations: variations.value,
    drawOutline: drawOutline.checked,
    removeSinglePixels: removeSinglePixels.checked,
  };

  exportHolder.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(JSON.stringify(settingsObject)));
  exportHolder.click();
  
  console.log(JSON.stringify(settingsObject));
});

//import
importButton.addEventListener('click', function () {
  importHolder.click();
});
importHolder.addEventListener('change', function () {
  //if file was chosen correctly
	if (this.files && this.files[0] && this.files[0].type == 'application/json') {
	  
	  //load file
	  var fileReader = new FileReader();
	  fileReader.onload = function(e) {
      //load onto editor
      loadPreset(JSON.parse(this.result))
	  }
	  fileReader.onerror = alert;
	  fileReader.readAsText(this.files[0]);
	}
	
	else 
	  alert('There was an problem loading your settings.')
});
  
function loadPreset (settingsObject) {
        
  //reset generated sprites
  output.innerHTML = '';
  
  //layers
  canvases[0].getContext('2d').clearRect(0,0,width,height);
  var layer1 = new Image;
  layer1.onload = function(){ canvases[0].getContext('2d').drawImage(layer1,0,0); };
  layer1.src = settingsObject.layers[0];
  
  canvases[1].getContext('2d').clearRect(0,0,width,height);
  var layer2 = new Image;
  layer2.onload = function(){ canvases[1].getContext('2d').drawImage(layer2,0,0); };
  layer2.src = settingsObject.layers[1];
  
  canvases[2].getContext('2d').clearRect(0,0,width,height);
  var layer3 = new Image;
  layer3.onload = function(){ canvases[2].getContext('2d').drawImage(layer3,0,0); };
  layer3.src = settingsObject.layers[2];
  
  console.log(layer1)
  //canvases[0].toDataURL('image/png');
  //canvases[1].toDataURL('image/png');
  //canvases[2].toDataURL('image/png');
  
  //colors
  var customColors = document.querySelectorAll(".color-selection .color .jscolor");
  customColors[0].jscolor.fromString(settingsObject.palette[0]),
  customColors[1].jscolor.fromString(settingsObject.palette[1]),
  customColors[2].jscolor.fromString(settingsObject.palette[2]),
  customColors[3].jscolor.fromString(settingsObject.palette[3]),
  customColors[4].jscolor.fromString(settingsObject.palette[4]),
  customColors[5].jscolor.fromString(settingsObject.palette[5]),
  customColors[6].jscolor.fromString(settingsObject.palette[6]),
  
  //settings
  mirrorDrawingX.checked = settingsObject.mirrorDrawingX;
  mirrorDrawingY.checked = settingsObject.mirrorDrawingY;
  centerPixel.checked = settingsObject.centerPixel;
  mirrorGenerationX.checked = settingsObject.mirrorGenerationX;
  mirrorGenerationY.checked = settingsObject.mirrorGenerationY;
  variations.value = settingsObject.variations;
  drawOutline.checked = settingsObject.drawOutline;
  removeSinglePixels.checked = settingsObject.removeSinglePixels;

}  

var selectedLayer, selectedCtx;
changeSelectedLayer();

document.querySelector('#layer-selected').addEventListener('change', changeSelectedLayer);

function changeSelectedLayer () {
  
  var layerIndex = document.querySelector('#layer-selected input:checked').value;
  var fillStyle = selectedCtx ? selectedCtx.fillStyle : 'black';
  selectedLayer = canvases[layerIndex-1];
  selectedCtx = selectedLayer.getContext("2d");
  selectedCtx.fillStyle = fillStyle;
  
  
  //remove selection from canvas
  document.querySelector('.canvas-holder canvas.selected').classList.remove('selected');
  selectedLayer.classList.add('selected');
  
  console.log('new layer selected',layerIndex);
}

//toggle onion skin
document.querySelector('#checkbox-onion-skin').addEventListener('change', function () {
  
  if (this.checked)
    document.querySelector('.canvas-holder').classList.add('onion');
  else
    document.querySelector('.canvas-holder').classList.remove('onion');
});
  
window.addEventListener("resize", resizeCanvas);
function resizeCanvas () {
  
  //calculate zoom
  var canvasContainerWidth = demoContainer.offsetWidth - parseFloat(getComputedStyle(canvasContainer).paddingLeft)*2;
  zoom = Math.floor(canvasContainerWidth / width);
  
  //max zoom level
  zoom = Math.min(zoom, 18);
  
  //make sure the height doesnt take up the whole screen
  if (zoom * height > window.innerHeight * 0.5)
    zoom = Math.floor(window.innerHeight * 0.5 / height);

  //resize canvas holder
  canvasHolder.style.width = width*zoom+'px';
  canvasHolder.style.height = height*zoom+'px';

  //resize canvases
  canvases.forEach(function (c) {
    c.style.width = (width*zoom)+'px';
    c.style.height = (height*zoom)+'px';
  });

}
resizeCanvas();

//set brush to 2nd color
selectedCtx.fillStyle = color(colors[0]);

//setup color buttons

for (var i = 0; i < colorButtons.length; i++) {
  
  var button = colorButtons[i];
  
  if (!button) {
    console.error('there is no colorButton',i+1);
    continue;
  }
  

  //button.style.backgroundColor = color(colors[i]);
  //button.style.opacity = colors[i][3] / 255;
  button.dataset.color = colors[i].toString();
  
  button.addEventListener('click', function (colorClicked) {
    
    console.log('clicked color',colorClicked);
    
    //deselect eraser
    document.querySelector('#pixel-demo').classList.remove('eraser');
    
    //remove current color
    var currentColor = document.querySelector('.color-selection .color .palette-color.current-color');
    if (currentColor)
      currentColor.classList.remove('current-color');
    
    //save current color
    this.classList.add('current-color');
    var id = Array.from(colorClicked.target.parentNode.parentNode.children).indexOf(colorClicked.target.parentNode);
    console.log(id);
    paletteSelection.style.top = 3*id + 'em';
    var chance = document.querySelector(".chance-selection .current-selection").dataset.alpha;
    selectedCtx.fillStyle = 'rgba(' + this.dataset.color + ',' + chance +')';
  });
}


//setup chance to generate buttons

var chanceButtons = document.querySelectorAll(".chance-selection");
for (var i = 0; i < chanceButtons.length; i++) {
  var button = chanceButtons[i];
  
  button.addEventListener('click', function (chanceClicked) {
    document.querySelector('.chance-selection .current-selection').classList.remove('current-selection');
    chanceClicked.target.classList.add('current-selection');
    
    //set new color
    var color = document.querySelector('.color-selection .color .palette-color.current-color').dataset.color;
    var alpha = chanceClicked.target.dataset.alpha;
    selectedCtx.fillStyle = 'rgba(' + color + ',' + alpha +')';
  });
}

//draw a line between two points on canvas
function line(x0,y0,x1,y1) {
	
	var dx = Math.abs(x1-x0);
	var dy = Math.abs(y1-y0);
	var sx = (x0 < x1 ? 1 : -1);
	var sy = (y0 < y1 ? 1 : -1);
	var err = dx-dy;

	while (true) {
	  //clear pixel then set pixel color
		selectedCtx.clearRect(x0, y0, 1, 1);
		selectedCtx.fillRect(x0, y0, 1, 1);
		
		var cp = centerPixel.checked ? 1 : 0;
		
		//if horizontal mirroring is enabled
		if (mirrorDrawingX.checked) {
		  console.log(width,x0,cp,width-x0-cp)
		  //clear pixel then set pixel color
		  selectedCtx.clearRect(width-1-x0-cp, y0, 1, 1);
		  selectedCtx.fillRect(width-1-x0-cp, y0, 1, 1);
		}
		
		//if vertical mirroring is enabled
		if (mirrorDrawingY.checked) {
		  //clear pixel then set pixel color
		  selectedCtx.clearRect(x0, height-1-y0-cp, 1, 1);
		  selectedCtx.fillRect(x0, height-1-y0-cp, 1, 1);
		}
		
		//if vertical mirroring is enabled
		if (mirrorDrawingX.checked && mirrorDrawingY.checked) {
		  //clear pixel then set pixel color
		  selectedCtx.clearRect(width-1-x0-cp, height-1-y0-cp, 1, 1);
		  selectedCtx.fillRect(width-1-x0-cp, height-1-y0-cp, 1, 1);
		}
		
		//if we've reached the end goal, exit the loop
		if ((x0==x1) && (y0==y1)) break;
		var e2 = 2*err;
		if (e2 >-dy) {err -=dy; x0+=sx;}
		if (e2 < dx) {err +=dx; y0+=sy;}
	}

}

//get cursor position relative to canvas
function getCursorPosition(inputEvent) {
  var x;
	var y;
	var canvasX = canvasHolder.getBoundingClientRect().left;
	var canvasY = canvasHolder.getBoundingClientRect().top + document.documentElement.scrollTop;
	
	if (inputEvent.touches) { //mobile
	  x = inputEvent.touches[0].clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
	  y = inputEvent.touches[0].clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	else { //desktop
		x = inputEvent.pageX || inputEvent.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
		y = inputEvent.pageY || inputEvent.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}

	x -= canvasX;
	y -= canvasY;

	return [x,y];
}

//mousedown - start drawing
canvasHolder.addEventListener("mousedown", mousedown, false);
canvasHolder.addEventListener("touchstart", mousedown, false);
function mousedown (mouseEvent) {
	lastPos = getCursorPosition(mouseEvent);

	dragging = true;
	//left or right click
	if (mouseEvent.which == 1) 
		draw(mouseEvent);
  
  //if (mouseEvent.target == canvas) 
  mouseEvent.preventDefault();
	return false;
}

//mouseup - end drawing
window.addEventListener("mouseup", mouseup, false);
window.addEventListener("touchend", mouseup, false);
function mouseup (mouseEvent) {

  dragging = false;
  
  if (mouseEvent.target == canvasHolder) 
    mouseEvent.preventDefault();
}


//mouse is moving on canvas		
canvasHolder.addEventListener("mousemove", draw, false);
canvasHolder.addEventListener("touchmove", draw, false);
function draw (mouseEvent) {
	var cursorLocation = getCursorPosition(mouseEvent);

	//draw line to current pixel
	if (dragging && mouseEvent.target == canvasHolder) {
		line(Math.floor(lastPos[0]/zoom),Math.floor(lastPos[1]/zoom),Math.floor(cursorLocation[0]/zoom),Math.floor(cursorLocation[1]/zoom));
		lastPos = cursorLocation;
	}

	//if (mouseEvent.target == canvas) 
	mouseEvent.preventDefault();
}


//clear canvas button
document.querySelector('#clear-canvas').addEventListener('click', function () {
  if (confirm('Are you sure you want to clear the current layer?'))
    return selectedCtx.clearRect(0,0,width,height); 
    
    canvases.forEach(function (canvas,i) {
      var context = canvas.getContext('2d');
      context.clearRect(0,0,width,height);  
    });
});


var output = document.querySelector('#output');
//generate 
document.querySelector('button.generate').addEventListener('click', function () {
  console.log('generating',variations.value,'variations');
  
  //make sure they aren't trying to generate too many
  if (variations.value > 64 && !confirm('Woah, that\'s a lot of variations. You sure you want to generate '+variations.value+' sprites? It might make your computer sad.')) 
    return;
  
  output.innerHTML = '';
  
  var cp = centerPixel.checked ? 1 : 0;
  
  //create a new sprite as many times as the variations value
  for (var v = 0; v < variations.value; v++) {
    console.log('generating variation',v)

    var outputCanvas = document.createElement("canvas");
    
    outputCanvas.width = width+2;
    outputCanvas.height = height+2;
    outputCanvas.style.width = ((width+2)*4)+'px';
    outputCanvas.style.height = ((height+2)*4)+'px';
    output.appendChild(outputCanvas);
    outputCanvas.title = "click to download"
    
    var outputContext = outputCanvas.getContext("2d");
    
    
    const outputImageData = new Uint8ClampedArray(width*height*4);

    var layerList = canvasHolder.querySelectorAll('canvas');
    console.log('layerlist',layerList.length-1,layerList)
    
    //loop through layers backwards (to draw the bottom one first)
    for (var j = layerList.length-1; j >= 0; j--) {

      console.log('getting layer',j, layerList[j])
    //canvasList.forEach(function (c) {
      
      var ctx = layerList[j].getContext('2d');
      var canvas = ctx.getImageData(0,0,width,height);
      
      // Iterate through every pixel
      for (let p = 0; p < outputImageData.length; p += 4) {
        
        //skip rendering for mirrored areas
        if (mirrorGenerationX.checked && p/4 % width > width/2 - 1) continue;
        if (mirrorGenerationY.checked && Math.floor(p/4 / width) > height/2 - 1) continue;
        
        //set variables
        var thisPixel = [canvas.data[p + 0],canvas.data[p + 1],canvas.data[p + 2]];
        var x = p/4%width;
        var y = Math.floor(p/4 / width);
        
        //mirror horizontally
        var pX = p + ((width/2-x) *2 - 1 - cp)*4;
        var xPixel = [canvas.data[pX + 0],canvas.data[pX + 1],canvas.data[pX + 2]];
        
        //mirror verticaly
        var pY = p + ((height/2-y) *2 - 1 - cp)*width*4;
        var yPixel = [canvas.data[pY + 0],canvas.data[pY + 1],canvas.data[pY + 2]];
        
        //mirror verticaly and horizontally
        var pXY = p + ((width/2-x) *2 - 1 - cp)*4 + ((height/2-y) *2 - 1 - cp)*width*4;
        var xyPixel = [canvas.data[pXY + 0],canvas.data[pXY + 1],canvas.data[pXY + 2]];

        //roll the chance that the pixel gets generated
        var chance = roll();
        
        //loop through colors and see if there's a match
        for (var c = 0; c < colors.length; ++c) {
          var col = colors[c];
          //if this pixel matches this color
          var realColor = document.querySelectorAll('.color-selection .color .jscolor')[c].jscolor.rgb;
          
          //if color matches
          if (thisPixel.equals(col)) {
            //if passed chance
            if (canvas.data[p+3] == 255 || chance < canvas.data[p+3]) {
              console.log(chance,'>',canvas.data[p+3])
              outputImageData[p + 0] = realColor[0];    // R value
              outputImageData[p + 1] = realColor[1];    // G value
              outputImageData[p + 2] = realColor[2];    // B value
              outputImageData[p + 3] = 255;             // A value
            }
          }
          
          //mirror horizontally
          if (mirrorGenerationX.checked) {
            
            //find mirror X pixel
            if (p < 500) console.log('xpixel','x:',x,', flipX:',x+(width/2-x)*2)
            
            //if it's not empty
            if (canvas.data[pX+3] != 0) {
              //if color matches
              if (xPixel.equals(col)) {
                //if passes chance 
                if (canvas.data[pX+3] == 255 || chance < canvas.data[pX+3]) {
                  outputImageData[pX + 0] = realColor[0];    // R value
                  outputImageData[pX + 1] = realColor[1];    // G value
                  outputImageData[pX + 2] = realColor[2];    // B value
                  outputImageData[pX + 3] = 255;    // A value
                }
              }
            } 
          }
          
          //mirror vertically
          if (mirrorGenerationY.checked) {

            //if it's not empty
            if (canvas.data[pY+3] != 0) {
              //if color matches
              if (yPixel.equals(col)) {
                //if passes chance 
                if (canvas.data[pY+3] == 255 || chance < canvas.data[pY+3]) {
                  outputImageData[pY + 0] = realColor[0];    // R value
                  outputImageData[pY + 1] = realColor[1];    // G value
                  outputImageData[pY + 2] = realColor[2];    // B value
                  outputImageData[pY + 3] = 255;    // A value
                }
              }
            } 
          }
          
          //mirror vertically and horizontally
          if (mirrorGenerationX.checked && mirrorGenerationY.checked) {

            //if it's not empty
            if (canvas.data[pXY+3] != 0) {
              //if color matches
              if (xyPixel.equals(col)) {
                //if passes chance 
                if (canvas.data[pXY+3] == 255 || chance < canvas.data[pXY+3]) {
                  outputImageData[pXY + 0] = realColor[0];    // R value
                  outputImageData[pXY + 1] = realColor[1];    // G value
                  outputImageData[pXY + 2] = realColor[2];    // B value
                  outputImageData[pXY + 3] = 255;    // A value
                }
              }
            }
          }
          
        }
    
      }
  
      console.log(outputImageData)
      
      //outputContext.clearRect(0,0,width+2,height+2);
      
      // Draw image data to the canvas
      

  

    } 
    
    let outputImage = new ImageData(outputImageData, width);
    outputContext.putImageData(outputImage, 1, 1);
		
  //Mirror Horizontally
  	if (mirrorGenerationX.checked) {

  	  //erase right half of image
  	  //outputContext.clearRect(width/2+1,0,width/2+1,height+2);
  	  
  	  //draw the image revered
  	  outputContext.save();
        outputContext.translate(width, 0);
        outputContext.scale(-1, 1);
        //outputContext.drawImage(outputContext.canvas, 0, 0, width/2+1, height+2, width/2, 0,-width/2-1, height+2);
		  outputContext.restore();
		}
		
	//remove single pixels
  	if (removeSinglePixels.checked) {
  	  //get sprite data
      var outputSprite = outputContext.getImageData(0,0,width+2,height+2);
      var outputData = outputSprite.data;
      
      //loop through pixels
      for (let i = 0; i < outputData.length; i += 4) {
        var o = {
          l: i - 4, //left
          r: i + 4, //right
          u: i - (width+2)*4, //up
          ul: i - (width+2)*4 - 4, //up-left
          ur: i - (width+2)*4 + 4, //up-right
          d: i + (width+2)*4, //down
          dl: i + (width+2)*4 - 4, //down-left
          dr: i + (width+2)*4 + 4, //down-right
        };
        
        //if the surrounding pixels are all transparent
        if (
          outputData[o.l+3] == 0 &&
          outputData[o.r+3] == 0 &&
          outputData[o.u+3] == 0 &&
          outputData[o.ul+3] == 0 &&
          outputData[o.ur+3] == 0 &&
          outputData[o.d+3] == 0 &&
          outputData[o.dl+3] == 0 &&
          outputData[o.dr+3] == 0
          )
            outputData[i+3]=0;
      }
      
  	  //redraw the sprite
      outputContext.clearRect(0,0,width+2,height+2);
      outputContext.putImageData(outputSprite, 0, 0);
		}
		
	//DRAW OUTLINE ===============================================================
	  
  	 if (drawOutline.checked) {
      var outputData = outputContext.getImageData(0,0,width+2,height+2).data;
      //let outlinedSprite = new ImageData(shapeData, width+2);
      let outlinedSprite = outputData.slice(0);
      
      var outlineColor = document.querySelector('.color-selection .color:nth-child(7) .jscolor').jscolor.rgb;
      
      //loop through pixels
      for (let i = 0; i < outputData.length; i += 4) {

        //if this pixel is transparent
        if (outputData[i + 3] == 0) {
          
          //offsets for pixel to the left, right, up, down
          var o = {
            l: i - 4,
            r: i + 4,
            u: i - (width+2)*4,
            d: i + (width+2)*4,
          };
          
          //rgb array for each pixel
          var p = {
            l: [outputData[o.l], outputData[o.l+1], outputData[o.l+2]],
            r: [outputData[o.r], outputData[o.r+1], outputData[o.r+2]],
            u: [outputData[o.u], outputData[o.u+1], outputData[o.u+2]],
            d: [outputData[o.d], outputData[o.d+1], outputData[o.d+2]],
          };
          
          //if any of the surrounding pixels is not transparent OR the background color
          if (
            (outputData[o.l+3] == 255 && !p.l.equals(outlineColor) ) || //left
            (outputData[o.r+3] == 255 && !p.r.equals(outlineColor) ) || //right
            (outputData[o.u+3] == 255 && !p.u.equals(outlineColor) ) || //up
            (outputData[o.d+3] == 255 && !p.d.equals(outlineColor) )    //down
            ) {

                outlinedSprite[i + 0] = outlineColor[0];    // R value
                outlinedSprite[i + 1] = outlineColor[1];  // G value
                outlinedSprite[i + 2] = outlineColor[2];    // B value
                outlinedSprite[i + 3] = 255;  // A value
          }
        } 
    
      }
    
      let outLined = new ImageData(outlinedSprite, width+2);
      outputContext.clearRect(0,0,width+2,height+2);
      outputContext.putImageData(outLined, 0, 0);
  	}
    //redraw canvas

  }
});

//download individual sprite
var downloadHolder = document.querySelector('#download-holder');
output.addEventListener('click', function (e) {
  
  //if canvas, download the image
  if (e.target.tagName == 'CANVAS') {
    downloadHolder.href = e.target.toDataURL();
    downloadHolder.click();
  }
});

//download sprite sheet
document.querySelector('#download-sprite-sheet').addEventListener('click', function () {
  var sprites = output.querySelectorAll('canvas');
  
  //create image to hold it
  var spritesheet = document.createElement("canvas");
  var spriteSheetCtx = spritesheet.getContext('2d');
  var spritesacross = Math.ceil(Math.sqrt(sprites.length));
  spritesheet.width = spritesacross*(width+2);
  spritesheet.height = sprites.length/spritesacross*(width+2);
  
  console.log(spritesheet);
  
  //loop through all
  sprites.forEach(function (c, i) {
    spriteSheetCtx.drawImage(c, i%spritesacross * (width+2), Math.floor(i/spritesacross) * (width+2) );
  }); 
  
  downloadHolder.href = spritesheet.toDataURL();
  downloadHolder.click();
});

/*global ImageData*/
/*global ga*/

//takes a number 0-255 which represents the chance of being true
//255=true
//128=50%
//0=false
function roll () {
  return Math.random() * 255; 
}

//color(Array )
function color (rgb) {
  var alpha = rgb[3] || 255;
  console.log('creating color',rgb,alpha)
  return 'rgba('+rgb[0]+','+rgb[1]+','+rgb[2]+','+alpha+')';
}

//ARRAY COMPARISON
// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});