const game = document.getElementById('game');
const character = document.getElementById("character");
const block = document.getElementById("block");
const playAgain = document.getElementById('playAgain');

function jump() {
    if (character.classList != "animate") {
        character.classList.add("animate");
    }

    setTimeout(function () {
        character.classList.remove("animate");
    }, 500)
}

const checkHit = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

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
    location.reload();
})