const theCanvas = document.querySelector('.the-canvas')
const pallette = document.getElementById('pallette')
const wrapper = document.querySelector('.wrapper')
const colors = ['violet', 'indigo', 'blue', 'green', 'yellow', 'orange', 'red']
let selectedColor = "rgb(238, 130, 238)"

//create pallette on startup
function createPalette() {
  for (let i = 0; i < colors.length; i++) {
    let color = document.createElement('div')
    pallette.appendChild(color).classList.add('color-picker', colors[i])
  }
  theCanvas.style.backgroundColor = selectedColor
}
createPalette()

//create canvas on startup
function createCanvas() {
  let squareX = 40
  let squareY = 28
  theCanvas.style.width = (squareX * 20) + "px"

  for (let i = 0; i < (squareX * squareY); i++) {
    let newSquare = document.createElement('div')
    newSquare.classList.add('square')
    theCanvas.appendChild(newSquare)
  }
}
createCanvas()

//color selector
pallette.addEventListener('click', event => {
  const targetStyle = window.getComputedStyle(event.target)
  let color = targetStyle.getPropertyValue("background-color")
  if (color !== 'rgba(0, 0, 0, 0)') {
    selectedColor = color
    theCanvas.style.backgroundColor = color
  }
})

//click and color
theCanvas.addEventListener('click', event => {
  if (event.target.classList.contains('square')) {
    let currentColor = getComputedStyle(event.target).backgroundColor
    if (currentColor === selectedColor) {
      event.target.style.backgroundColor = "rgb(255, 255, 255)"
    } else {
      event.target.style.backgroundColor = selectedColor;
    }
  }
})

//color with mouse held down
let mouseIsDown = 0
theCanvas.addEventListener('mousedown', event => {
  mouseIsDown = 1
  theCanvas.onmousemove = event => {
    if (mouseIsDown) {
      event.target.style.backgroundColor = selectedColor
    }
  }
})
theCanvas.addEventListener('mouseup', event => {
  mouseIsDown = 0
})

//clear the screen
var squares = document.getElementsByClassName('square')
function clearSquares() {
  for (var i = 0; i < squares.length; i++ ) {
    squares[i].style.backgroundColor = "rgb(255, 255, 255)"
    //todo pause, wait, or sleep  for about 20ms
    //sleep(20)
  }
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
