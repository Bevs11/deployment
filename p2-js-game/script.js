const game = document.getElementById('game');
const character = document.getElementById("character");
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
const moonMove = document.getElementById("moon");
// const blockMove = document.querySelector('.block-move');
// const blockMoveRandom = document.querySelector('.moveRandom')
const playAgain = document.getElementById('playAgain');
const startGame = document.getElementById('start');
const movingGround = document.getElementById('moving-ground');
const movingGround2 = document.getElementById('moving-ground2');
const movingBuildings = document.getElementById('buildings');
const movingBuildings2 = document.getElementById('buildings2');
const timer = document.getElementById('timer');
const playerCurrentScore = document.getElementById('currentScore');

// function jump() {

//     if (character.classList != 'animate') {
//         character.classList.add("animate");
//     }

//     setTimeout(function () {
//         character.classList.remove("animate");

//     }, 500)
// }
let jumping = 0;
setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (jumping == 0 && characterTop < 130) {
        character.style.top = (characterTop + 3) + "px";
    }
}, 20);

// function jump() {
//     jumping = 1;
//     let jumpInterval = setInterval(function () {
//         let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));

//         if (jumpCount > 3) {
//             clearInterval(jumpInterval);
//             jumping = 0;
//             jumpCount = 0;
//         }
//         character.style.top = (characterTop - 50) + "px";
//         jumpCount++;
//     }, 300);
// };

// function jump() {
//     jumping = 1;
//     let jumpCount = 0;
//     let jumpInterval = setInterval(function () {
//         let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//         if (jumpCount < 2 && characterTop > 0) {
//             character.style.top = (characterTop - 40) + "px";
//         }
//         if (jumpCount >= 2) {
//             clearInterval(jumpInterval);
//             jumping = 0;
//             jumpCount = 0;
//         }
//         jumpCount++;
//     }, 40);
// }
function jump() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (characterTop >= 130) {
        character.style.top = (characterTop - 80) + "px";

    }
}


const checkHit = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // position of character
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); //position of block
    let blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue("left")); //position of block
    if ((blockLeft < 20 || blockLeft2 < 20) && (blockLeft > 0 || blockLeft2 > 0) && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        block2.style.animation = "none";
        block2.style.display = "none";
        youLose();
    }

}, 10);

let gameOn;

function youLose() {
    const lose = document.querySelector('#youLose');
    lose.classList.remove('youLose');
    moonMove.classList.remove('moonAnimation');
    movingGround.classList.remove('moving-ground');
    movingGround2.classList.remove('moving-ground2');
    movingBuildings.classList.remove('moving-buildings');
    movingBuildings2.classList.remove('moving-buildings2');
    gameOn = 0;

    playerCurrentScore.classList.add('hidden');
}

playAgain.addEventListener('click', function () {
    location.reload(); //refresh
});

startGame.addEventListener('click', function () {
    let seconds = 0;

    moonMove.classList.add('moonAnimation');
    movingGround.classList.add('moving-ground');
    movingGround2.classList.add('moving-ground2');
    movingBuildings.classList.add('moving-buildings');
    movingBuildings2.classList.add('moving-buildings2');
    startGame.classList.add('hidden');
    block.classList.add('block-move');
    block2.classList.add('block-move2');
    gameOn = 1;
    setInterval(function () {
        playerCurrentScore.innerHTML = `Score: ${seconds}`;
        console.log(seconds);
        seconds += 1;
    }, 1000)





});


// let sec = 0;

// function timerFunction() {

//     console.log(sec);
//     playerCurrentScore.innerHTML = `Score: ${sec}`;
//     score.innerText = seconds;
//     sec++;

// } else {
//     clearInterval(timerFunction);

//     return sec;
// }


// timerFunction();

const speed1 = [600, 700, 800, 900, 1000, 1100, 1200, 1300];
const speed2 = [500, 600, 650, 700, 750, 800, 900, 950, 1000];
const speed3 = [400, 450, 500, 600, 700, 800, 900, 950, 1000];
const speed4 = [300, 400, 450, 500, 600, 700, 800, 900, 950];
let speed = 900;

