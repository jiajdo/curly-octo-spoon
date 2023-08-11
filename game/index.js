let SNAKE_SPEED = 5
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },

]
let lastRenderTime = 0
let gameBoard
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x:0, y:0 }

document.addEventListener('DOMContentLoaded', function () {
    gameBoard = document.getElementById('game-board')


    function main(currentTime) {
        window.requestAnimationFrame(main)
        const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
        if (secondsSinceLastRender < 1 / SNAKE_SPEED) return


        lastRenderTime = currentTime

        update()
        draw()

    }

   window.requestAnimationFrame(main)
    window.addEventListener('keydown', e => {
        switch (e.key) {
            case 'ArrowUp':
                if (lastInputDirection.y !== 0) break
                inputDirection = { x: 0, y: -1 }
                lastInputDirection = inputDirection
                break
            case 'ArrowDown':
                if (lastInputDirection.y !== 0) break
                inputDirection = { x: 0, y: 1 }
                lastInputDirection = inputDirection
                break
            case 'ArrowLeft':
                if (lastInputDirection.x !== 0) break
                inputDirection = { x: -1, y: 0 }
                lastInputDirection = inputDirection
                break
            case 'ArrowRight':
                if (lastInputDirection.x !== 0) break
                inputDirection = { x: 1, y: 0 }
                lastInputDirection = inputDirection
                break
        }
    })
function getInputDirection(){
  lastInputDirection = inputDirection
    return inputDirection
}
    function update() {
        for (let i = snakeBody.length - 2; i >= 0; i--) {
            snakeBody[i + 1] = { ...snakeBody[i] }
        }
         snakeBody[0].x += inputDirection.x
         snakeBody[0].y += inputDirection.y
    }


    function draw() {
        gameBoard.innerHTML = ''
        snakeBody.forEach(segment => {
            const snakeElement = document.createElement('div')
            snakeElement.style.gridRowStart = segment.y
            snakeElement.style.gridColumnStart = segment.x
            snakeElement.classList.add('snake')
            gameBoard.appendChild(snakeElement)
        })
    }
    draw()
    
})





