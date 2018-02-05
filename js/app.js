const theCanvas = document.querySelector('.the-canvas');
const palette = document.getElementById('palette');
const wrapper = document.querySelector('.wrapper');
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red', 'black'];
let selectedColor = "rgb(0, 0, 0)";

//create palette on startup
function createPalette() {
  for (let i = 0; i < colors.length; i++) {
    let color = document.createElement('div');
    palette.appendChild(color).classList.add('color-picker', colors[i]);
  }
  theCanvas.style.backgroundColor = selectedColor;
}
createPalette();

//create canvas on startup
function createCanvas() {
  let squareX = 40;
  let squareY = 28;
  theCanvas.style.width = (squareX * 20) + "px";

  for (let i = 0; i < (squareX * squareY); i++) {
    let newSquare = document.createElement('div');
    newSquare.classList.add('square');
    theCanvas.appendChild(newSquare);
  }
}

createCanvas();

//color selector
palette.addEventListener('click', event => {
  const targetStyle = window.getComputedStyle(event.target);
  let color = targetStyle.getPropertyValue("background-color");
  if (color !== 'rgba(0, 0, 0, 0)') {
    selectedColor = color;
    theCanvas.style.backgroundColor = color;
  };
})

//click and color
// Adding a class to sqaures that get colored
theCanvas.addEventListener('click', event => {
  if (event.target.classList.contains('square')) {
    let currentColor = getComputedStyle(event.target).backgroundColor;
    if (currentColor === selectedColor) {
      event.target.style.backgroundColor = "rgb(255, 255, 255)";
    } else {
      event.target.style.backgroundColor = selectedColor;
      event.target.className += " test";
    }
  };
});

function testClear() {
  var collection = Array.from(document.getElementsByClassName('test'));
  for (var i = 0; i < collection.length; i++) {
    (function(i) {
      setTimeout(function() {
        collection[i].style.backgroundColor = 'white';
      }, 500 * i);
    })(i);
  };
}

//color with mouse held down
let mouseIsDown = 0;
theCanvas.addEventListener('mousedown', event => {
  mouseIsDown = 1;
  theCanvas.onmousemove = event => {
    if (mouseIsDown) {
      event.target.style.backgroundColor = selectedColor;
      event.target.className += ' test';
    }
  }
});
theCanvas.addEventListener('mouseup', event => {
  mouseIsDown = 0;
})

//clear the screen
//var squares = Array.from(document.getElementsByClassName('square'));

function clearSquares() {
  testClear();
}

//todo save as jpeg
// function saveJpg() {
//   save to jpeg
//   console.log("saved as jpg");
// }

//todo add sleep function
// function sleep(miliseconds) {
//   do something that waits miliseconds
// }
