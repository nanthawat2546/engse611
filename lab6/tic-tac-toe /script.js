let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let xScore = 0;
let oScore = 0;
const cells = document.querySelectorAll(".cell");
const scoreX = document.getElementById("score-x");
const scoreO = document.getElementById("score-o");
const resetButton = document.getElementById("reset-button");

function handleClick(index) {
    if (board[index] === "") {
        board[index] = currentPlayer;
        cells[index].textContent = currentPlayer;
        cells[index].classList.add(currentPlayer.toLowerCase());

        if (checkWinner()) {
            alert(`${currentPlayer} wins!`);
            updateScore();
            resetBoard();
        } else if (board.every(cell => cell !== "")) {
            alert("It's a draw!");
            resetBoard();
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], 
        [0, 3, 6], [1, 4, 7], [2, 5, 8], 
        [0, 4, 8], [2, 4, 6]             
    ];

    return winPatterns.some(pattern => {
        const [a, b, c] = pattern;
        return board[a] && board[a] === board[b] && board[a] === board[c];
    });
}

function updateScore() {
    if (currentPlayer === "X") {
        xScore++;
        scoreX.textContent = `X: ${xScore}`;
    } else {
        oScore++;
        scoreO.textContent = `O: ${oScore}`;
    }
}

function resetBoard() {
    board = ["", "", "", "", "", "", "", "", ""];
    cells.forEach(cell => {
        cell.textContent = "";
        cell.classList.remove("x", "o");
    });
    currentPlayer = "X";
}

cells.forEach((cell, index) => {
    cell.addEventListener("click", () => handleClick(index));
});

resetButton.addEventListener("click", resetBoard);
