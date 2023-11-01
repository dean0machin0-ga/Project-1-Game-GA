const formLocation = document.querySelector('.form'); 
const solutionEl = document.querySelectorAll("#solution-display");
const gameRestartEl = document.querySelector("#rocket-message");
const solutionDisplayEl = document.querySelector('#solution-display');
const wordToGuess = ["B", "E", "S", "T"]
const spaces = ["_", "_", "_", "_"]

for (let i = 0; i < wordToGuess.length; i++) {
    const underscore = document.createElement('h1')
    underscore.setAttribute('class', 'underscore')
    underscore.innerText = "?"
    solutionDisplayEl.append(underscore)
}

formLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    let userInput = document.querySelector('#userinput')
    if (wordToGuess.join('') === userInput.value.toUpperCase()) {
        console.log('correct!!')
        userInput.value = ''
    } else {
        console.log("Try again!")
        userInput.value = ''                              
    } 
})