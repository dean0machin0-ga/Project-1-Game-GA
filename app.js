console.log('js-loaded!')


/*----- state variables -----*/

// const letterBtnEl = document.querySelectorAll("#controller");
const formLocation = document.querySelector('.form'); 
const solutionEl = document.querySelectorAll("#solution-display");
const gameRestartEl = document.querySelector("#rocket-message");
const solutionDisplayEl = document.querySelector('#solution-display');
const wordToGuess = ["B", "E", "S", "T"]
const spaces = ["_", "_", "_", "_"]

/*----- event listeners -----*/

for (let i = 0; i < wordToGuess.length; i++) {
    const underscore = document.createElement('h1')
    underscore.setAttribute('class', 'underscore')
    underscore.innerText = "?"
    // document.body.append(underscore)
    solutionDisplayEl.append(underscore)
}


formLocation.addEventListener('submit', (e) => {
    e.preventDefault()
    const userInput = document.querySelector('#userinput').value
    // look at how to join an array turns it into a string 
    if (wordToGuess.join(userInput.toUpperCase())) {
        const foundIdx = wordToGuess.includes(userInput.toUpperCase())
        console.log(foundIdx)
    } else {
        console.log("Try again!")                              
    } 
})


// OLD CODE

// checkArr(event.currentTarget.input.value)
// const checkArr = (userInput) => {
//     if (wordToGuess.includes(userInput.toUpperCase())) {
//         // console.log("True")
// const index = wordToGuess.indexOf(userInput.toUpperCase())
//         // console.log(index)
//         spaces.splice(1, 1, userInput.toUpperCase())
//     }
// }
