var user = 0;
var ai = 0;
var player1 = 0;
var player2 = 0;

let q = document.getElementById("single");
let w = document.getElementById("multiple");

w.style.display = "none";

var x = 0;

function change() {
    let a = document.getElementById("b2");
    if (x % 2 == 0) {
        q.style.display = "none";
        w.style.display = "block";
        a.innerHTML = "Single";
    } else {
        q.style.display = "block";
        w.style.display = "none";
        a.innerHTML = "Multiple";
    }
    x++;
    player1 = 0;
    player2 = 0;
    user = 0;
    ai = 0;
}

function check() {
    let b = document.getElementById("b");
    b.innerHTML = "Play Again!";
    let u = document.querySelector('input[name="run"]:checked').value;
    console.log(u);
    const choises = ["Paper", "Scissors", "Rock"];
    let a = choises[Math.floor(Math.random() * choises.length)];
    console.log(a);

    if (u == a) {
        r(0, a);
    } else if (
        (u == "Paper" && a == "Scissors") ||
        (u == "Scissors" && a == "Rock") ||
        (u == "Rock" && a == "Paper")) {
        ai++;
        r(-1, a);
    } else {
        user++;
        r(1, a);
    }
}

function r(s, u) {
    let t = document.getElementById("one");
    let y = document.getElementById("pScore");
    let x = document.getElementById("aiScore");
    let e = document.getElementById("comp");
    if (s == -1) {
        t.innerHTML = "You Lost!";
        t.style.color = "red";
    } else if (s == 1) {
        t.innerHTML = "You Won!";
        t.style.color = "green";
    } else {
        t.innerHTML = "DRAW!";
        t.style.color = "white";
    }
    y.innerHTML = user;
    x.innerHTML = ai;
    e.innerHTML = u;
}

function check_multiple() {
    let b = document.getElementById("b1");
    b.innerHTML = "Play Again!";
    let u = document.querySelector('input[name="run1"]:checked').value;
    console.log(u);

    let o = document.querySelector('input[name="run2"]:checked').value;
    console.log(o);

    if (u == o) {
        r1(0)
    } else if (
        (u == "Paper" && o == "Scissors") ||
        (u == "Scissors" && o == "Rock") ||
        (u == "Rock" && o == "Paper")) {
        player1++;
        r1(1);
    } else {
        player2++;
        r1(-1);
    }
}

function r1(a) {
    let t = document.getElementById("one1");
    let y = document.getElementById("player1");
    let x = document.getElementById("player2");
    if (a == -1) {
        t.innerHTML = "Player2 Won!";
    } else if (a == 1) {
        t.innerHTML = "Player1 Won!";
    } else {
        t.innerHTML = "DRAW!";
    }
    y.innerHTML = player1;
    x.innerHTML = player2;
}