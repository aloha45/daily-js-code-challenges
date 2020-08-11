/*----- constants -----*/

/*----- app's state (variables) -----*/
let answer;
/*----- cached element references -----*/

const display = document.querySelector("h1");

const input = document.getElementById("container");
input.style.borderColor = 'grey';

const plusBtn = document.getElementById("plus");
plusBtn.style.backgroundColor = 'grey';
plusBtn.style.color = 'white';

const minusBtn = document.getElementById("minus");
minusBtn.style.backgroundColor = 'grey';
minusBtn.style.color = 'white';

const resetBtn = document.getElementById("reset");
resetBtn.style.backgroundColor = 'grey';
resetBtn.style.color = 'white';

/*----- event listeners -----*/

plusBtn.addEventListener('click', addition)

minusBtn.addEventListener('click', subtraction)

resetBtn.addEventListener('click', init)

/*----- functions -----*/

init()

function init() {
    answer = 0;
    input.value = 1;
    render();
}

function addition() {
    answer += parseInt(input.value);
    render();
}

function subtraction() {
    answer -= parseInt(input.value);
    render();
}

function render() {
    display.textContent = answer;
    if (answer <= -1){
        display.style.color = 'red'
    }
    if (answer >= 1){
        display.style.color = 'green'
    }
    if (answer === 0) {
        display.style.color = 'black'
    }
}