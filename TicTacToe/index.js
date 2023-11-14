const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");


let currentPlayer;
let gameGrid;

const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// let's create a function to initialise the game

function initGame() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];
    // UI empty when this function will be called
    boxes.forEach((box, index) => {
        box.innerHTML = "";
        boxes[index].style.pointerEvents = "all";
        // Remove the Green color, initialize boxes with css properties again
        box.classList = `box box-${index+1}`;
        
    })
    newGameBtn.classList.remove("active");
    gameInfo.innerHTML = `Current Player - ${currentPlayer}`;
}

initGame();function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }
}

function swapTurn() {
    if(currentPlayer === "X") {
        currentPlayer = "O";
    }
    else {
        currentPlayer = "X";
    }

    // UI Update
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}



function checkGameOver() {
    let answer = "";
    // all 3 boxes should be non-empty and exactly same in value
    winningPositions.forEach((position) => {
        if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {

            // Check if winner is X
            if(gameGrid[position[0]] === "X") {
                answer = "X";
            } else {
                answer = "O";
            }

            // disable pointer events
            boxes.forEach((box) => {
                box.style.pointerEvents = "none";
            })

            // Now we know X/O is winner

            // Adding Green background
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");

        }
    });

        // it means we have a winner
    if(answer !== "") {
        // show status in paragraph and active the new button
        gameInfo.innerText = `Winner Player - ${answer}`;
        newGameBtn.classList.add("active");
        return;

    }

    // When there is no winner (Tie)
    let fillCount = 0;
    gameGrid.forEach((box) => {
        if(box !== "") {
            fillCount++;
        }
    });

    // Boxes is filled, game is TIE
    if(fillCount === 9) {
        gameInfo.innerText = "Game Tied";
        newGameBtn.classList.add("active");
    }

}





function handleClick(index) {
    if(gameGrid[index] == "") {
        boxes[index].innerText = currentPlayer;  // Ui 
        gameGrid[index] = currentPlayer;   // for logic to check the status

        boxes[index].style.pointerEvents = "none";

        // swap the turn of the player
        swapTurn();
        //Check if any player won or not!!
        checkGameOver();

    }
}

boxes.forEach((box, index) => {
    box.addEventListener("click", () =>{
        handleClick(index);
    })
});

newGameBtn.addEventListener("click", initGame);
