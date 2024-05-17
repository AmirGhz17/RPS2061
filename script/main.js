var user = 0;
var ai = 0;

set();

function set() {
    let u = document.getElementById("pScore");
    let a = document.getElementById("aiScore");

    u.innerHTML = user;
    a.innerHTML = ai;
}

function check() {
    let o = document.querySelector('input[name="run"]:checked').value;
    console.log(u);
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

    if (o == a) {
        r = 0;
    } else if (
        (o == 0 && a == 2) ||
        (o == 1 && a == 0) ||
        (o == 2 && a == 1)) {
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