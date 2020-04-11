const square = document.querySelectorAll('.square');
const mole = document.querySelectorAll('.mole');
const timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');
let result = 0;
let currentTime = timeLeft.textContent
let hitPosition;

function randomSquare() {
    //iterates all square elements and removes the mole attribute from its classlist
    square.forEach(element => {
        element.classList.remove('mole')
    });

    let randomPosition = square[Math.floor(Math.random() * 9)];
    randomPosition.classList.add('mole');

    // assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPosition.id;
}

square.forEach(element => {
  element.addEventListener('mouseup', () => {
      if (element.id === hitPosition) {
        result++ 
        score.textContent = result;
      }
  })  
})

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 750)
}

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        alert('GAME OVER! Your final score is' + result)
    }
}

let timerId = setInterval(countDown, 1000);

moveMole();
