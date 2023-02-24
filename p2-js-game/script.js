const game = document.getElementById('game');
const character = document.getElementById("character");
const block = document.getElementById("block");
const moonMove = document.getElementById("moon");
const blockMove = document.querySelector('.block-move');
const blockMoveRandom = document.querySelector('.moveRandom')
const playAgain = document.getElementById('playAgain');
const startGame = document.getElementById('start');
const movingGround = document.getElementById('moving-ground');
const movingGround2 = document.getElementById('moving-ground2');
const movingBuildings = document.getElementById('buildings');
const movingBuildings2 = document.getElementById('buildings2');
const timer = document.getElementById('timer');
let currentSpeed = 0;

function jump() {

    if (character.classList != 'animate') {
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
    moonMove.classList.remove('moonAnimation');
    moonMove.classList.add('hidden');
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

    moonMove.classList.add('moonAnimation');
    movingGround.classList.add('moving-ground');
    movingGround2.classList.add('moving-ground2');
    movingBuildings.classList.add('moving-buildings');
    movingBuildings2.classList.add('moving-buildings2');
    startGame.classList.add('hidden');
    block.classList.add('block-move');
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



const speed1 = [600, 700, 800, 900, 1000, 1100, 1200, 1300];
const speed2 = [500, 600, 650, 700, 750, 800, 900, 950, 1000];
const speed3 = [400, 450, 500, 600, 700, 800, 900, 950, 1000];
const speed4 = [300, 400, 450, 500, 600, 700, 800, 900, 950];


