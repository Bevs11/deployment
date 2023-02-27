const game = document.getElementById('game');
const difficulty = document.getElementById('difficulty');
const easyBtn = document.getElementById('easy');
const hardBtn = document.getElementById('hard');
const character = document.getElementById("character");
const block1 = document.getElementById("block");
const block2 = document.getElementById("block2");
const star = document.getElementById("star");
const moonMove = document.getElementById("moon");
const playAgain = document.getElementById('playAgain');
const startGame = document.getElementById('start');
const movingGround = document.getElementById('moving-ground');
const movingGround2 = document.getElementById('moving-ground2');
const movingBuildings = document.getElementById('buildings');
const movingBuildings2 = document.getElementById('buildings2');
const timer = document.getElementById('timer');
const playerCurrentScore = document.getElementById('currentScore');

let hard = 0;
easyBtn.addEventListener('click', function () {
    startGame.classList.remove('hidden');
    difficulty.classList.add('hidden');

});
hardBtn.addEventListener('click', function () {
    startGame.classList.remove('hidden');
    difficulty.classList.add('hidden');
    hard = 1;
});


let jumping = 0;
let gravity = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (jumping == 0 && characterTop < 130) {
        character.style.top = (characterTop + 3) + "px";
    }
}, 20);

let playerStarPoints = 0;
function starMove() {
    if (gameOn == 1) {

        let starLeft = parseInt(window.getComputedStyle(star).getPropertyValue('left'));
        if (starLeft <= -30) {
            star.style.left = "500px";
            star.style.visibility = 'visible';
        } else {
            star.style.left = (starLeft - 3) + "px";
        }
    }

}

function blockMove1() {
    if (gameOn == 1) {
        let blockLeft1 = parseInt(window.getComputedStyle(block1).getPropertyValue('left'));
        if (blockLeft1 <= -30) {
            block1.style.left = "500px";
        } else {
            block1.style.left = (blockLeft1 - 3) + "px";
        }
    }
}
function blockMove2() {
    if (gameOn == 1) {

        let blockLeft2 = parseInt(window.getComputedStyle(block2).getPropertyValue('left'));
        if (blockLeft2 <= -30) {

            block2.style.left = "500px";
        } else {
            block2.style.left = (blockLeft2 - 3) + "px";
        }
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
    let starLeft = parseInt(window.getComputedStyle(star).getPropertyValue("left")); //position of star
    if (gameOn == 1) {
        playerCurrentScore.innerHTML = `Score: ${playerStarPoints}`;
    }
    if (starLeft <= 70 && starLeft >= 0 && characterTop <= 70) {
        playerStarPoints++;
        if (hard == 1) {
            playerStarPoints++;
        }
        star.style.visibility = 'hidden';
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
    star.classList.add('hidden');
    star.style.visibility = 'hidden';
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
    gameOn = 1;
    if (hard == 1) {
        setInterval(blockMove2, 12);
    }

});

setInterval(starMove, 18);
setInterval(blockMove1, 9);




