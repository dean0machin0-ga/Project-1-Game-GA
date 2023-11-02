const formLocation = document.querySelector('.form'); 
const solutionEl = document.querySelectorAll('#solution-display');
const gameRestartEl = document.querySelector('#rocket-message');
const solutionDisplayEl = document.querySelector('#solution-display');
// const wordToGuess = ['B', 'E', 'S', 'T']
const wordToGuess = 'BEST';
const spaces = '_'.repeat(wordToGuess.length);
const letterEl = document.createElement('h1');
        letterEl.setAttribute('class', 'underscore');
        letterEl.innerText = spaces
        solutionDisplayEl.append(letterEl)


// for (let i = 0; i < wordToGuess.length; i++) {
//     const underscore = document.createElement('h1')
//     underscore.setAttribute('class', 'underscore')
// underscore.innerText = '?'
//     solutionDisplayEl.append(underscore)
// }

formLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    let userInput = document.querySelector('#userinput')
    if (wordToGuess === userInput.value.toUpperCase()) {
        console.log('correct!!')
        document.querySelector('.underscore').innerText = wordToGuess
        userInput.value = ''
    } else {
        console.log('Try again!')
        userInput.value = ''                              
    } 
})