let score = 0;
let moleInterval;
const holes = document.querySelectorAll('.hole');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('startButton');

function getRandomHole() {
    const index = Math.floor(Math.random() * holes.length);
    return holes[index];
}

function showMole() {
    const hole = getRandomHole();
    const mole = hole.querySelector('.mole');
    mole.classList.add('show');

    setTimeout(() => {
        mole.classList.remove('show');
    }, 700);
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startButton.disabled = true;
    moleInterval = setInterval(showMole, 900);

    setTimeout(() => {
        clearInterval(moleInterval);
        startButton.disabled = false;
        alert("Time's up! Your final score: " + score);
    }, 15000);
}

holes.forEach(hole => {
    hole.addEventListener('click', (event) => {
        if (event.target.classList.contains('mole')) {
            score++;
            scoreDisplay.textContent = score;
            event.target.classList.remove('show');
        }
    });
});

startButton.addEventListener('click', startGame);
