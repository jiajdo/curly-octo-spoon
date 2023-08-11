let SNAKE_SPEED = 5
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },

]
let lastRenderTime = 0
let gameBoard
let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }
let food = [{ x: 18, y: 10 }]
const expansion_rate = 1
let newSegments = 0
let gameOver = false

document.addEventListener('DOMContentLoaded', function () {
    gameBoard = document.getElementById('game-board')
    main()
})

function main(currentTime) {
    window.requestAnimationFrame(main)
    if (gameOver) {
        return alert('you lose')
    }
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
function getInputDirection() {
    lastInputDirection = inputDirection
    return inputDirection
}
function update() {
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y

    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] });
    }
    newSegments = 0;

    if (onSnake(food[0])) {
        expandSnake(expansion_rate)
        let newFoodPosition
        while (true) {
            newFoodPosition = {
                x: Math.floor(Math.random() * 22),
                y: Math.floor(Math.random() * 22)
            }
            if (!onSnake(newFoodPosition)) {
                food[0].x = newFoodPosition.x;
                food[0].y = newFoodPosition.y;
                break;
            }

        }

    }
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
    food.forEach(food => {
        const foodElement = document.createElement('div')
        foodElement.style.gridRowStart = food.y
        foodElement.style.gridColumnStart = food.x
        foodElement.classList.add('food')
        gameBoard.appendChild(foodElement)
    })
}
// draw()

function expandSnake(amount) {
    newSegments += amount
}

function onSnake(position) {
    return snakeBody.some(segment => {
        return equalPositions(segment, position)
    })
}

function equalPositions(pos1, pos2) {
    return pos1.x === pos2.x && pos1.y === pos2.y

function outsideGrid(position){
    return (
        position.x < 1 || position.x > 21 ||
        position.y < 1 || position.y > 21
    )
}

function checkDeath(){
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}
}



