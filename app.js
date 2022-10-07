
// Declaration of Variables
let randomNumber1 = Math.ceil(Math.random() * 6);
let randomNumber2 = Math.ceil(Math.random() * 6);

// setting image attribute
document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");


// Declaring winner
function rollDice() {
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "Player 1 Wins";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins";
    }
    else {
        document.querySelector("h1").innerHTML = " It's a Draw";
    }
}

//event Listener
document.addEventListener('keydown', (event)=>{
    rollDice();
});