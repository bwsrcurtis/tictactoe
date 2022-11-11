moveArray = ['X', '', '', '', '', '', '', '', '',]
const squares = document.querySelectorAll('.moves');
// const moves = document.querySelectorAll('.moves')



function drawArray() {
    squares.forEach((square, index) => {
        square.textContent = moveArray[index];
    })
}


function makeMove(marker) {
    squares.forEach((square, index) => {
        square.addEventListener('click', () => {
            if (moveArray[index] != marker) {
                moveArray[index] = marker;
                console.log(moveArray);
            }
            else if (moveArray[index] == marker) {
                moveArray[index] = '';
                console.log(moveArray)
            }
            drawArray();
        })

    })
}

makeMove('X')
drawArray();