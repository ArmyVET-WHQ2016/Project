'use strict'

let userName = prompt("What is your name?");
while (!userName) {
    userName = prompt("User name is required to enter the site!");
}
alert('Welcome to the site ' + userName);

console.log("Loop has ended");

// let btn = document.getElementById("myButton");
// btn.addEventListener("click",quiz,true);


let score = 0;


score += askQuestion('Did I serve in the Armed Forces?', 'yes');

alert('I was in the US Army!');

score += askQuestion('Do I have experience in federal government?', 'yes');

score += askQuestion('Do you have a in degree in Mathematics?', 'no');

score += askQuestion('Do I live in Seattle, WA', 'no');


score += guessTheAnswer();

score += thingsToLearnQs();
console.log(score);

function askQuestion(question, answer) {
    let useranswer = prompt(question);
    if (useranswer.toLowerCase() == answer) {
        return 1;
    }
    else {
        return 0;
    }
}

function guessTheAnswer() {
    let answerNum = 7;
    let userInput = 0;

    for (let i = 0; i < 4; i++) {
        userInput = prompt('How many colors in the rainbow?');
        if (userInput == answerNum) {
            return 1;
        }
    }
}

function thingsToLearnQs() {

    let thingsToLearn = ["coding", "music", "rollerskating", "swimming", "piloting"];
    let foundCorrectAns = false;
    let useranswer;
    let allowedTries = 6;

    for (let i = 0; i < allowedTries; i++) {
        useranswer = prompt("What are some difficult things you would enjoy learning?");
        for (let k = 0; k < thingsToLearn.length; k++) {
            if (useranswer.toLowerCase() === thingsToLearn[k]) {
                alert('Correct!');
                return 1;
            }
        }
    }
}

alert("Sorry, Your input was incorrect. Please reread my bio again!");

alert('You got ' + score + ' correct');
alert("Great Job! Welcome to my site!");


