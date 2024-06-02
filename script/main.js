var intro = true;
var single = false;
var multiple = false;
var back = false;

let Intro = document.getElementById("Intro");
let Single = document.getElementById("Single");
let Multiple = document.getElementById("Multiple");
let Back = document.getElementById("Back");

Single.style.display = "none";
Multiple.style.display = "none";
Back.style.display = "none";

var pScore = 0;
var aiScore = 0;
var player1Score = 0;
var player2Score = 0;

let one = document.getElementById("one");
let two = document.getElementById("pScore");
let three = document.getElementById("aiScore");
let comp = document.getElementById("comp");

let one1 = document.getElementById("one1");
let player1 = document.getElementById("player1");
let player2 = document.getElementById("player2");
let two1 = document.getElementById("two1");

let p1 = null;
let p2 = null;


function menu() {
    single = false;
    multiple = false;
    intro = true;
    Intro.style.display = "block";
    Single.style.display = "none";
    Multiple.style.display = "none";
    Back.style.display = "none";
    pScore = 0;
    aiScore = 0;
    one1.innerHTML = "Rock Paper Scissors";
    one1.style.color = "white";
    player1Score = 0;
    player2Score = 0;
    player1.innerHTML = player1Score;
    player2.innerHTML = player2Score;
}



function check1() {
    intro = false;
    Intro.style.display = "none";
    back = true;
    Single.style.display = "block";
    Back.style.display = "block";
    Single.style.display = "block";
    one.innerHTML = "Rock Paper Scissors";
    one.style.color = "black";
    two.innerHTML = "0";
    three.innerHTML = "0";
}

function check2() {
    intro = false;
    Intro.style.display = "none";
    back = true;
    multiple = true;
    Multiple.style.display = "block";
    Back.style.display = "block";
    Multiple.style.display = "block";
    one1.innerHTML = "Rock Paper Scissors";
    player1.innerHTML = "0"
    player1.innerHTML = "0";
    two1.innerHTML = "START";
}

function checking() {
    let bSingle = document.getElementById("bSingle");
    bSingle.innerHTML = "Play Again!";
    let player = document.querySelector('input[name="run"]:checked').value;
    console.log(player);
    const choises = ["Paper", "Scissors", "Rock"];
    let ai = choises[Math.floor(Math.random() * choises.length)];
    console.log(ai);

    if (player == ai) {
        r1(0, ai);
    } else if (
        (player == "Paper" && ai == "Scissors") ||
        (player == "Scissors" && ai == "Rock") ||
        (player == "Rock" && ai == "Paper")) {
        aiScore++;
        r1(-1, ai);
    } else {
        pScore++;
        r1(1, ai);
    }
}

function r1(s, u) {
    if (s == -1) {
        one.innerHTML = "You Lost!";
        one.style.color = "red";
    } else if (s == 1) {
        one.innerHTML = "You Won!";
        one.style.color = "green";
    } else {
        one.innerHTML = "DRAW!";
        one.style.color = "white";
    }
    two.innerHTML = pScore;
    three.innerHTML = aiScore;
    comp.innerHTML = u;
}

document.onkeydown = function(event) {
    if (multiple) {

        if (two1.innerHTML == "START") {
            keyPressedChecker(event);
        } else if (event.key == " ") {
            one1.innerHTML = "Rock Paper Scissors";
            one1.style.color = "white";
            two1.innerHTML = "START";

        }
    }
}

function keyPressedChecker(event) {
    let key = event.key;

    if (key == 'A' || key == "a") {
        p1 = "Paper";
    } else if (key == 'S' || key == "s") {
        p1 = "Scissors";
    } else if (key == 'D' || key == "d") {
        p1 = "Rock";
    }

    if (key == "ArrowLeft") {
        p2 = "Paper";
    } else if (key == "ArrowUp") {
        p2 = "Scissors";
    } else if (key == "ArrowRight") {
        p2 = "Rock";
    }
    if ((p1 != null) && (p2 != null)) {
        checking1(p1, p2);
        p1 = null;
        p2 = null;
    }


}

function checking1(playerOne, playerTwo) {
    if (playerOne == playerTwo) {
        one1.innerHTML = "DRAW";
        one1.style.color = "white";
    } else if (playerOne == "Rock" && playerTwo == "Paper") {
        one1.innerHTML = "Player 2 Wins!";
        one1.style.color = "red";
        player2Score++;
    } else if (playerOne == "Rock" && playerTwo == "Scissors") {
        one1.innerHTML = "Player 1 Wins!";
        one1.style.color = "green";
        player1Score++;
    } else if (playerOne == "Paper" && playerTwo == "Rock") {
        one1.innerHTML = "Player 1 Wins!";
        one1.style.color = "green";
        player1Score++;
    } else if (playerOne == "Paper" && playerTwo == "Scissors") {
        one1.innerHTML = "Player 2 Wins!";
        one1.style.color = "red";
        player2Score++;
    } else if (playerOne == "Scissors" && playerTwo == "Paper") {
        one1.innerHTML = "Player 1 Wins!";
        one1.style.color = "red";
        player1Score++;
    } else if (playerOne == "Scissors" && playerTwo == "Rock") {
        one1.innerHTML = "Player 2 Wins!";
        one1.style.color = "red";
        player2Score++;
    }

    two1.innerHTML = "PRESS \"SPACE\" KEY TO PLAY AGAIN";
    player1.innerHTML = player1Score;
    player2.innerHTML = player2Score;
}