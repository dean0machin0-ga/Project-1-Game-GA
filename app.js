console.log('js-loaded!')

/*----- constants -----*/
const INIT_STATE = {
    
}




/*----- state variables -----*/





/*----- cached elements  -----*/

const letterBtnEl = document.querySelectorAll("#controller")
const solutionEl = document.querySelectorAll("#solution-display")

const gameRestartEl = document.querySelector("#rocket-message");
/*----- event listeners -----*/

letterBtnEl.forEach(function(btn) {
    btn.addEventListener("click", handleBtnClick)
});


console.log(letterBtnEl)
console.log(solutionEl)
/*----- functions -----*/