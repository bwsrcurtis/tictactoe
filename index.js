moveArray = ['', '', '', '', '', '', '', '', '',]
const title = document.querySelector('.header > h1');
const squares = document.querySelectorAll('.moves');

const makeBoard = () => {
    let i = 1
    const drawArray = () => {
        squares.forEach((square, index) => {
            square.textContent = moveArray[index];
        })
    }

    const checkWinner = () => {
        drawArray()
        let gameOver = false
        if (moveArray[0] == 'X' & moveArray[1] == 'X' & moveArray[2] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[3] == 'X' & moveArray[4] == 'X' & moveArray[5] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[6] == 'X' & moveArray[7] == 'X' & moveArray[8] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[0] == 'X' & moveArray[3] == 'X' & moveArray[6] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[1] == 'X' & moveArray[4] == 'X' & moveArray[7] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[2] == 'X' & moveArray[5] == 'X' & moveArray[8] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[0] == 'X' & moveArray[4] == 'X' & moveArray[8] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[2] == 'X' & moveArray[4] == 'X' & moveArray[6] == 'X') {
            alert('Player 1 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[0] == 'O' & moveArray[1] == 'O' & moveArray[2] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[3] == 'O' & moveArray[4] == 'O' & moveArray[5] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[6] == 'O' & moveArray[7] == 'O' & moveArray[8] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[0] == 'O' & moveArray[3] == 'O' & moveArray[6] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[1] == 'O' & moveArray[4] == 'O' & moveArray[7] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[2] == 'O' & moveArray[5] == 'O' & moveArray[8] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (moveArray[0] == 'O' & moveArray[4] == 'O' & moveArray[8] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
            i = 1
        }
        else if (moveArray[2] == 'O' & moveArray[4] == 'O' & moveArray[6] == 'O') {
            alert('Player 2 Wins!')
            gameOver = true
            clearBoard()
        }
        else if (i == 9) {
            alert("The game was a tie!")
            gameOver = true
            clearBoard()
        }
    }

    const makeMove = (markerPlayerOne, markerPlayerTwo) => {
        squares.forEach((square, index) => {
            square.addEventListener('click', () => {
                if (moveArray[index] == '') {
                    console.log(i)
                    if (i % 2 != 0) {
                        moveArray[index] = markerPlayerOne;
                        drawArray()
                        checkWinner()
                        i++
                    }
                    else {
                        moveArray[index] = markerPlayerTwo;
                        drawArray()
                        checkWinner()
                        i++
                    }
                }
            }
            )
        })
    }

    const clearBoard = () => {
        for (let e in moveArray) {
            moveArray[e] = ''
        }
        i = 0
        drawArray()
    }
    return { drawArray, makeMove, clearBoard }
}



const board = makeBoard();

board.drawArray();
board.makeMove('X', 'O')

title.addEventListener('click', board.clearBoard)