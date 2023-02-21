const game = document.getElementById('game');
const character = document.getElementById("character");
const block = document.getElementById("block");
const playAgain = document.getElementById('playAgain');
const startGame = document.getElementById('start');

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

function youLose() {
    const lose = document.querySelector('#youLose');
    lose.classList.remove('youLose');
}

playAgain.addEventListener('click', function () {
    location.reload(); //refresh
});

startGame.addEventListener('click', function () {
    block.classList.add('block-move');
    startGame.classList.add('hidden');
});