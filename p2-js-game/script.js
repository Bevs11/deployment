const game = document.getElementById('game');
const character = document.getElementById("character");
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const playAgain = document.getElementById('playAgain');
const startGame = document.getElementById('start');
const movingGround = document.getElementById('moving-ground');
const movingGround2 = document.getElementById('moving-ground2');
const movingBuildings = document.getElementById('buildings');
const movingBuildings2 = document.getElementById('buildings2');
const timer = document.getElementById('timer');

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 500)
}


const checkHit = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // position of character
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); //position of block

    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        youLose();
    }
}, 10);

let gameOn;
function youLose() {
    const lose = document.querySelector('#youLose');
    lose.classList.remove('youLose');
    // block2.classList.remove('block-move2');
    movingGround.classList.remove('moving-ground');
    movingGround2.classList.remove('moving-ground2');
    movingBuildings.classList.remove('moving-buildings');
    movingBuildings2.classList.remove('moving-buildings2');
    gameOn = 0;
    console.log(`points: ${sec}`);
    score.innerText = sec;
}

playAgain.addEventListener('click', function () {
    location.reload(); //refresh
});

startGame.addEventListener('click', function () {
    block.classList.add('block-move');
    // block2.classList.add('block-move2');
    movingGround.classList.add('moving-ground');
    movingGround2.classList.add('moving-ground2');
    movingBuildings.classList.add('moving-buildings');
    movingBuildings2.classList.add('moving-buildings2');
    startGame.classList.add('hidden');
    gameOn = 1;
    setInterval(timerFunction, 1000);
});


let sec = 0;

function timerFunction() {
    if (gameOn == 1) {
        console.log(sec);
        sec++;
    } else {
        clearInterval(timerFunction);
        return sec;
    }
}

