var user = 0;
var ai = 0;


function set() {
    let u = document.getElementById("pScore");
    let a = document.getElementById("aiScore");


    u.innerHTML = user;
    a.innerHTML = ai;
}

function check() {
    let u = document.querySelector('input[name="run"]:checked').value;
    console.log(u);
    const choises = ["Paper", "Scissors", "Rock"];
    let a = choises[Math.floor(Math.random() * choises.length)];
    console.log(a);

    // let c = document.getElementById("comp");
    // if (a == 0) {
    //     c.innerHTML = "Paper";
    // } else if (a == 1) {
    //     c.innerHTML = "Scissors";
    // } else {
    //     c.innerHTML = "Rock"
    // }

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

set();