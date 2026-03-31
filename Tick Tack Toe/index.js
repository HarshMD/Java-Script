
let boxes = document.querySelectorAll(".box");
let gameInfo = document.querySelector(".game-info");

let mewGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

function initiaize() {
    currentPlayer = "X";
    gameGrid = ["", "", "", "", "", "", "", "", ""];

    boxes.forEach((box, index) => {
        box.innerText = "";
        box.style.pointerEvents = "all";
        box.classList = `box box${index + 1}`;
    });

    mewGameBtn.classList.remove("active");
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

initialize();

function swapPlayer() {
    if (currentPlayer === "X") {
        currentPlayer = "O";
    } else {
        currentPlayer = "X";
    }
    gameInfo.innerText = `Current Player - ${currentPlayer}`;
}

let winningPostiton = [
    //Row winning position
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //Column winning position
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //Diagonal winning position
    [0, 4, 8],
    [2, 4, 6],
];

function checkGameOver() { 
    let result = "";

    winningPostiton.forEach((position) => {
        if (
            (gameGrid[position[0]] !== "" ||
                gameGrid[position[1]] !== "" ||
                gameGrid[position[2]] !== "") &&
            gameGrid[position[0]] === gameGrid[position[1]] &&
            gameGrid[position[1]] === gameGrid[position[2]]
        ) {
            if (gameGrid[position[0]] === "X") {
                result = "X";
            } else {
                result = "O";
            }
        

            
    })
}

function handleCLick(index) {
    if (gameGrid[index] == "") {
        boxes[index].innerText = currentPlayer;
        gameGrid[index] = currentPlayer;
        boxes[index].style.pointerEvents = "none";
        swapPlayer();
    }
}
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        handleCLick(index);
    });
});