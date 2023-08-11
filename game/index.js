let SNAKE_SPEED = 2
const snakeBody = [
    {x:10, y:11},
    {x:11, y:11},

]
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
 for (let i = snakeBody.length - 2; i >=0; i--){
    snakeBody[i + 1] = {...snakeBody[i]}
 }
 snakeBody[0].x += 1
 snakeBody[0].y += 0
}


function draw(){
    gameBoard.innerHTML = ''
    snakeBody.forEach(segment => {
       const snakeElement = document.createElement('div')
       snakeElement.style.gridRowStart = segment.y
       snakeElement.style.gridColumnStart =  segment.x
       snakeElement.classList.add('snake')
       gameBoard.appendChild(snakeElement)
    })
   }
   draw()
})





