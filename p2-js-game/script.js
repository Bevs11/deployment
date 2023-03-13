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
const audio = new Audio('assets/star.wav');
const bgm = new Audio('assets/bgm.mp3');
const obstruction = [{
    source: 'assets/obstruction1.png',
    speed: 16
}, {
    source: 'assets/obstruction2.png',
    speed: 18
}, {
    source: 'assets/obstruction3.png',
    speed: 10
}, {
    source: 'assets/obstruction4.png',
    speed: 12
}]


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



let gravity = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (characterTop < 130) {
        character.style.top = (characterTop + 3) + "px";
    }
}, 25);

function jump() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if (characterTop >= 70) { //return to 130
        character.style.top = (characterTop - 80) + "px";

    }
}
addEventListener("keyup", jump);

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

let num = 0;
function blockMove1(seconds) {
    if (gameOn == 1) {
        const interval = setInterval(() => {
            let blockLeft1 = parseInt(window.getComputedStyle(block1).getPropertyValue('left'));
            if (blockLeft1 <= -30) {
                block1.style.left = "500px";
                clearInterval(interval);
                gameYes();
                block1.src = obstruction[num].source;
            } else {
                block1.style.left = (blockLeft1 - 3) + "px";
            }
        }, seconds)
    }
}
function gameYes() {
    num = Math.floor(Math.random() * 4);
    blockMove1(obstruction[num].speed);
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

}, 15);

const starPoints = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top")); // position of character
    let starLeft = parseInt(window.getComputedStyle(star).getPropertyValue("left")); //position of star
    if (gameOn == 1) {
        playerCurrentScore.innerHTML = `Score: ${playerStarPoints}`;
    }
    if (starLeft <= 70 && starLeft >= 0 && characterTop <= 70) {
        audio.play();
        playerStarPoints++;
        if (hard == 1) {
            playerStarPoints++;
        }
        star.style.visibility = 'hidden';
    }

}, 100);

let gameOn;

function youLose() {
    bgm.pause();
    const lose = document.querySelector('#youLose');
    lose.classList.remove('hidden');
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
    bgm.play();
    gameOn = 1;
    moonMove.classList.add('moonAnimation');
    movingGround.classList.add('moving-ground');
    movingGround2.classList.add('moving-ground2');
    movingBuildings.classList.add('moving-buildings');
    movingBuildings2.classList.add('moving-buildings2');
    startGame.classList.add('hidden');
    if (hard == 1) {
        setInterval(blockMove2, 12);
    }
    setInterval(starMove, 18);
    blockMove1(12);

});







