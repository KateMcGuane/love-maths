// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    // Return all elements found as an array - can now iterate through
    let buttons = document.getElementsByTagName("button");

    // Goes through buttons array & return each element in array
    // Each element will be stored in variable button on each iteration (avoid index notation)
    for (let button of buttons) {
        button.addEventListener("click", function() {  /* This code runs when button is clicked */
            if (this.getAttribute("data-type") === "submit") { /* this = button just clicked */
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});

    // Same as set i to 0; is i less than length of buttons array; increment by 1 on iteration
    // For (let i = 0; i < buttons.length; i++) {}

function runGame() {

}

function checkAnswer() {

}

function calculateCorrectAnswer() {  /* helper function */
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {  /* Incremented when user gets answer wrong */
    
}

// Functions to display questions
function displayAdditionQuestion() {
    
}

function displaySubtractionQuestion() {
    
}

function displayMultiplyQuestion() {
    
}

function displayDivideQuestion() {
    
}