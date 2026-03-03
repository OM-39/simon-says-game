let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = document.querySelectorAll(".btn");
let h3 = document.querySelector("h3");
let highScore = 0;

document.addEventListener("keypress",function() {
    if(started == false) {
        started = true;
        levelUp();
    }
})


function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let random = Math.floor(Math.random() * 4) + 1;
    btnFlash(random);
    gameSeq.push(random);
}

for(btn of btns) {
    btn.addEventListener("click",function(event) {
        let id = event.target.id;
        userSeq.push(id);
        btnFlash(id);
        checkAns(userSeq.length-1);
    })
}

function btnFlash(btn) {
    
    let box = document.getElementById(btn);
    let color = box.style.backgroundColor;

    box.style.backgroundColor = "white";
    setTimeout(() => {
        box.style.backgroundColor = color;
    },150);
}


function checkAns(idx) {
    
    if(gameSeq[idx] == userSeq[idx]) {
        if(gameSeq.length == userSeq.length) {
            userSeq = [];
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any to start game.`;
        reset();
    }
}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;

    let body = document.querySelector("body");
    body.style.backgroundColor = "red";
    setTimeout(() => {
        body.style.backgroundColor = "white"
    },250);

    if(highScore < level) {
        h3.innerText = `Your Highest Score : ${level}`;
        highScore = level;
    }
    level = 0;
}
