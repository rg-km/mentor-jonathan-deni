let turn = "X";
const SIZE = 3;

let winningCount = {
    "X": 0,
    "O": 0
}

//render scoreboard on x-wins and o-wins <label/>
function renderScore() {
    // TODO: answer here
    let scoreX = document.getElementById('x-wins');
    let scoreO = document.getElementById('o-wins');

    scoreX.innerHTML = winningCount.X;
    scoreO.innerHTML = winningCount.O;
}

//check who the winner is, add the score to the scoreboard, and render the scoreboard
function checkWinner() {
    //Let's make it simple, just hardcode the winning combinations
    let getValue = (y, x) => document.getElementById(y + "-" + x).textContent;
    let winner = ""

    //horizontal
    if (getValue(0, 0) != "" && getValue(0, 0) === getValue(0, 1) && getValue(0, 0) === getValue(0, 2)) {
        winner = getValue(0, 0);
    }
    if (getValue(1, 0) != "" && getValue(1, 0) === getValue(1, 1) && getValue(1, 0) === getValue(1, 2)) {
        winner = getValue(1, 0);
    }
    if (getValue(2, 0) != "" && getValue(2, 0) === getValue(2, 1) && getValue(2, 0) === getValue(2, 2)) {
        winner = getValue(2, 0);
    }
    
    //vertical
    if (getValue(0, 0) != "" && getValue(0, 0) === getValue(1, 0) && getValue(0, 0) === getValue(2, 0)) {
        winner = getValue(0, 0);
    }
    if (getValue(0, 1) != "" && getValue(0, 1) === getValue(1, 1) && getValue(0, 1) === getValue(2, 1)) {
        winner = getValue(0, 1);
    }
    if (getValue(0, 2) != "" && getValue(0, 2) === getValue(1, 2) && getValue(0, 2) === getValue(2, 2)) {
        winner = getValue(0, 2);
    }

    //diagonal
    if (getValue(0, 0) != "" && getValue(0, 0) === getValue(1, 1) && getValue(0, 0) === getValue(2, 2)) {
        winner = getValue(0, 0);
    }
    if (getValue(0, 2) != "" && getValue(0, 2) === getValue(1, 1) && getValue(0, 2) === getValue(2, 0)) {
        winner = getValue(0, 2);
    }

    checkNoWinner();
    
    if (winner != "") {
        winningCount[winner]++;
        renderScore();
        generate();
    }
}

function checkNoWinner() {
    // TODO: answer here
    let getValue = (y, x) => document.getElementById(y + "-" + x).textContent;
    if (
        getValue(0, 0) != "" && getValue(0, 1) != "" && getValue(0, 2) != "" &&
        getValue(1, 0) != "" && getValue(1, 1) != "" && getValue(1, 2) != "" &&
        getValue(2, 0) != "" && getValue(2, 1) != "" && getValue(2, 2) != ""
    ) {
        renderScore();
        generate();
    };
}

//handle click event, don't forget to disable the button so that it can't be clicked again
function click(event, id) {
    // TODO: answer here
    console.log('button clicked', id, winningCount, Object.keys(winningCount), Object.values(winningCount))
    let clickedButton = document.getElementById(id);
    if (turn == 'X') {
        clickedButton.innerHTML = 'X';
        clickedButton.disabled = true;
        turn = 'O'
    } else {
        clickedButton.innerHTML = 'O';
        clickedButton.disabled = true;
        turn = 'X'
    }
    checkWinner()
}

//generate the tictactoe board. It is just a 3x3 table with <button/> inside <td/>
function generate() {
    const BUTTON_SIZE = "60px"

    let board = document.getElementById("board");
    board.replaceChildren();
    let table = document.createElement("table");
    board.appendChild(table);

    for (let i = 0; i<SIZE; i++) {
        let tr = document.createElement("tr");
        table.appendChild(tr);
        // TODO: answer here
        for (let j = 0; j < SIZE; j++) {
            let td = document.createElement("td");
            let button = document.createElement("BUTTON");
            button.style.height = BUTTON_SIZE
            button.style.width = BUTTON_SIZE
            button.id = `${i}-${j}`
            button.onclick = event => click(event, button.id)
            
            tr.appendChild(td);
            td.appendChild(button);
        }
    }

    renderScore();
}