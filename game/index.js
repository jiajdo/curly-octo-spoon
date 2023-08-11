let SNAKE_SPEED = 2
let snakeBody = [{x:11, y:11}]
let lastRenderTime = 0
let gameBoard 

document.addEventListener('DOMContentLoaded', function(){
    gameBoard = document.getElementById('game-board')


function main(currentTime){
    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return

    
    lastRenderTime = currentTime

    update()
    draw()
    
}

window.requestAnimationFrame(main)

function update(){
 console.log('update snake')
}

draw()

})

function draw(){

    snakeBody.forEach(segment => {
       const snakeElement = document.createElement('div')
       snakeElement.style.gridRowStart = segment.x
       snakeElement.style.gridColumnStart =  segment.y
       snakeElement.classList.add('snake')
       gameBoard.appendChild(snakeElement)
    })
   }



