document.addEventListener('DOMContentLoaded', () =>  {

const grid = document.querySelector('.grid')
let squares = Array.from(grid.querySelectorAll('div'))
const width = 10
const height = 20  
let currentPosition = 4

  function control(e){
    if(e.keyCode === 39){
        moveRight()
    }   else if (e.keyCode === 38){
        rotate()
    }   else if (e.keyCode === 37){
        moveLeft()
    }   else if (e.keyCode === 40){
        moveDown()
    }
  }
  document.addEventListener('keyup', control)


//The tetrominoes
  const  lTetrominoes = [
    [1, width+1, width*2+1, 2],
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width+1, width*2, width*2+1, width*2+2],
  ]
  const  zTetrominoes = [
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1],
    [0, width, width+1, width*2+1],
    [width+1, width+2, width*2, width*2+1]
  ]
  const  tTetrominoes = [
    [1, width, width+1, width+2],
    [1, width+1, width+2, width*2+1],
    [width, width+1, width+2, width*2+1],
    [1, width, width+1, width*2+1]
  ]
  const  oTetrominoes = [
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1],
    [0, 1, width, width+1]
  ]
  const  iTetrominoes = [
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3],
    [1, width+1, width*2+1, width*3+1],
    [width, width+1, width+2, width+3]
  ]

  const theTetrominoes = [lTetrominoes, zTetrominoes, tTetrominoes, oTetrominoes, iTetrominoes]


//Ramdonly 
let random = Math.floor(Math.random()*theTetrominoes.length)
let currentRotation = 0
let current = theTetrominoes[random][currentRotation]


// draw
function draw() {
    // Draw the current tetromino
    current.forEach(index => (
      squares[currentPosition + index].classList.add('block')
    ));
  
    // Draw the small tetromino for display
    smallTetrominoes[0].forEach(index => (
      squares[displayIndex + index].classList.add('display-block')
    ));
  }
  
  function undraw() {
    current.forEach(index => (
      squares[currentPosition + index].classList.remove('block')
    ));
  
    smallTetrominoes[0].forEach(index => (
      squares[displayIndex + index].classList.remove('display-block')
    ));
  }
  
  function moveDown() {
    undraw()
    currentPosition += height; // Use the height constant instead of width
    draw()
    freeze()
  }
  
// move left  and prevent collisions with shapes moving left
  function moveRight() {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))){
        currentPosition -=1
    }
    draw()
  }

  function moveLeft() {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width ===0)
    if(isAtLeftEdge) currentPosition -=1
    if (current.some(index => squares[currentPosition + index].classList.contains('block2'))){
        currentPosition +=1
    }
    draw()
  }

// rotate
  function rotate(){
    undraw()
    currentRotation ++
    if(currentRotation === current.length){
        currentRotation = 0
    }
    current = theTetrominoes[random][currentRotation]
    draw()
  }


  const displayWidth = 4
  const displayIndex = 0

  const smallTetrominoes = [
    [1, displayWidth + 1]
  ]



}


)