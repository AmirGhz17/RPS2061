var user = 0;
var ai = 0;

function set() {
    let u = document.getElementById("playerScore");
    let a = document.getElementById("aiPlyer");

    u.innerHTML = user;
    a.innerHTML = ai;
}

function click() {
    let u = document.querySelector('input[name="run"]:checked').value;
    const choises = ["paper", "scisssors", "rock"];
    let a = choises[Math, floor(Math.random() * choises.length)];

    let c = document.getElementById("comp");
    if (a == 0) {
        c.innerHTML = "Paper";
    } else if (a == 1) {
        c.innerHTML = "Scssors";
    } else {
        c.innerHTML = "Rock"
    }

    if (u == a) {
        r = 0;
    } else if (
        (u == 0 && a == 2) ||
        (u == 1 && a == 0) ||
        (u == 2 && a == 1)) {
        user;
        r(1);
    } else {
        ai++;
        r(-1);
    }
}

function r(s) {
    let t = document.getElementById("one");
    if (s == -1) {
        t.innerHTML = "You Lost!";
        t.style.color = "red";
    } else if (s == 1) {
        t.innerHTML = "You Won!";
        t.style.color = "green";
    } else {
        t.innerHTML = "DRAW!";
    }

}