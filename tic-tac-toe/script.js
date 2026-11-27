let currentPlayer = "Player-1";

let box1 = document.getElementById("box1");
let box2 = document.getElementById("box2");
let box3 = document.getElementById("box3");

let box4 = document.getElementById("box4");
let box5 = document.getElementById("box5");
let box6 = document.getElementById("box6");

let box7 = document.getElementById("box7");
let box8 = document.getElementById("box8");
let box9 = document.getElementById("box9");

let message = document.getElementById("message");

function play(box) {
    if (box.innerHTML == "") {
        if (currentPlayer == "Player-1") {
            box.innerHTML = "X";
            currentPlayer = "Player-2";
            message.innerHTML = "Player-2's Turn (O)";
        }
        else {
            box.innerHTML = "O";
            currentPlayer = "Player-1";
            message.innerHTML = "Player-1's Turn (X)";
        }
        checkWinner();
    }
}

function checkWinner() {
    let winner = "";

    if (box1.innerHTML == "X" && box2.innerHTML == "X" && box3.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box4.innerHTML == "X" && box5.innerHTML == "X" && box6.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box7.innerHTML == "X" && box8.innerHTML == "X" && box9.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box1.innerHTML == "X" && box4.innerHTML == "X" && box7.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box2.innerHTML == "X" && box5.innerHTML == "X" && box8.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box3.innerHTML == "X" && box6.innerHTML == "X" && box9.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box1.innerHTML == "X" && box5.innerHTML == "X" && box9.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box3.innerHTML == "X" && box5.innerHTML == "X" && box7.innerHTML == "X") {
        winner = "Player-1";
    }
    else if (box1.innerHTML == "O" && box2.innerHTML == "O" && box3.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box4.innerHTML == "O" && box5.innerHTML == "O" && box6.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box7.innerHTML == "O" && box8.innerHTML == "O" && box9.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box1.innerHTML == "O" && box4.innerHTML == "O" && box7.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box2.innerHTML == "O" && box5.innerHTML == "O" && box8.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box3.innerHTML == "O" && box6.innerHTML == "O" && box9.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box1.innerHTML == "O" && box5.innerHTML == "O" && box9.innerHTML == "O") {
        winner = "Player-2";
    }
    else if (box3.innerHTML == "O" && box5.innerHTML == "O" && box7.innerHTML == "O") {
        winner = "Player-2";
    }

    if (winner != "") {
        message.innerHTML = winner + " Wins!";

        box1.disabled = true;
        box2.disabled = true;
        box3.disabled = true;
        box4.disabled = true;
        box5.disabled = true;
        box6.disabled = true;
        box7.disabled = true;
        box8.disabled = true;
        box9.disabled = true;
    }
    else if (
        box1.innerHTML != "" &&
        box2.innerHTML != "" &&
        box3.innerHTML != "" &&
        box4.innerHTML != "" &&
        box5.innerHTML != "" &&
        box6.innerHTML != "" &&
        box7.innerHTML != "" &&
        box8.innerHTML != "" &&
        box9.innerHTML != ""
    ) {
        message.innerHTML = "Game Draw!";
    }
}

function resetGame() {
    box1.innerHTML = "";
    box2.innerHTML = "";
    box3.innerHTML = "";

    box4.innerHTML = "";
    box5.innerHTML = "";
    box6.innerHTML = "";

    box7.innerHTML = "";
    box8.innerHTML = "";
    box9.innerHTML = "";

    box1.disabled = false;
    box2.disabled = false;
    box3.disabled = false;
    box4.disabled = false;
    box5.disabled = false;
    box6.disabled = false;
    box7.disabled = false;
    box8.disabled = false;
    box9.disabled = false;

    currentPlayer = "Player-1";
    message.innerHTML = "Player-1's Turn (X)";
}