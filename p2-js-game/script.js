const game = document.getElementById('game');
const character = document.getElementById("character");
const block1 = document.getElementById("block");
const block2 = document.getElementById("block2");
const block3 = document.getElementById("block3");
const moonMove = document.getElementById("moon");
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

let playerStarPoints = 0;
function blockMove3() {
    if (gameOn == 1) {

        let blockLeft3 = parseInt(window.getComputedStyle(block3).getPropertyValue('left'));
        if (blockLeft3 <= -30) {
            block3.style.left = "500px";
            block3.style.visibility = 'visible';
            // playerStarPoints++;
        } else {
            block3.style.left = (blockLeft3 - 3) + "px";
        }
    }

}
function blockMove1() {

    let blockLeft1 = parseInt(window.getComputedStyle(block1).getPropertyValue('left'));
    if (blockLeft1 <= -30) {
        block1.style.left = "500px";
    } else {
        block1.style.left = (blockLeft1 - 3) + "px";
    }
}
function blockMove2() {

    let blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue('left'));
    if (blockLeft2 <= -30) {
        block2.style.left = "500px";
    } else {
        block2.style.left = (blockLeft2 - 3) + "px";
    }


}

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
    if ((blockLeft < 50 || blockLeft2 < 50) && (blockLeft > 30 || blockLeft2 > 30) && characterTop >= 130) {
        block.style.animation = "none";
        block.style.display = "none";
        block2.style.animation = "none";
        block2.style.display = "none";
        youLose();
    }

}, 10);

const starPoints = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // position of character
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left")); //position of block
    let blockLeft3 = parseInt(window.getComputedStyle(block3).getPropertyValue("left")); //position of block
    playerCurrentScore.innerHTML = `Score: ${playerStarPoints}`;
    if (blockLeft3 <= 70 && blockLeft >= 0 && characterTop <= 70) {
        console.log(playerStarPoints + 1);
        playerStarPoints++;
        block3.style.visibility = 'hidden';
    }

}, 120);

let gameOn;

function youLose() {
    const lose = document.querySelector('#youLose');
    lose.classList.remove('youLose');
    moonMove.classList.remove('moonAnimation');
    movingGround.classList.remove('moving-ground');
    movingGround2.classList.remove('moving-ground2');
    movingBuildings.classList.remove('moving-buildings');
    movingBuildings2.classList.remove('moving-buildings2');
    block3.classList.add('hidden');
    block3.style.visibility = 'hidden';
    gameOn = 0;
    score.innerText = `${playerStarPoints}`;
    playerCurrentScore.classList.add('hidden');

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

    setInterval(blockMove3, 18);
    setInterval(blockMove1, 9);
    setInterval(blockMove2, 12);
    gameOn = 1;

});


const speed1 = [600, 700, 800, 900, 1000, 1100, 1200, 1300];
const speed2 = [500, 600, 650, 700, 750, 800, 900, 950, 1000];
const speed3 = [400, 450, 500, 600, 700, 800, 900, 950, 1000];
const speed4 = [300, 400, 450, 500, 600, 700, 800, 900, 950];
let speed = 900;

