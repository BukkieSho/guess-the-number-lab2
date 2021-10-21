const secretNum = Math.floor(Math.random() * 100) + 1
console.log('Random Number', secretNum)

function checkGuess() {
    let userGuess = guess.value
    if (userGuess === secretNum) {
        feedback.textContent = "You got it right!"
    } else if (userGuess > secretNum) {
        feedback.textContent = "Your guess was " + userGuess + ". That's too high. Try Again!"
    } else if (userGuess < secretNum) {
    feedback.textContent = "Your guess was " + userGuess + ". That's too low. Try Again!"
    }
}
submitGuess.addEventListener('click', checkGuess)
