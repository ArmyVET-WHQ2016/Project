'use strict'

let userName = prompt("What is your name?");
while (!userName) {
    userName = prompt("User name is required to enter the site!");
}
alert('Welcome to the site ' + userName);

console.log("Loop has ended");

// let choice = prompt('Did I serve in the Armed Forces?');
// let score = 0;

// if(choice.uppercase() === "US ARMY")
// {
//     console.log("That's correct!");
//     alert("Correct! US Army");
//     score = score + 1;
// }


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

// let veteran = prompt('Did I serve in the Armed Forces?');
// if (veteran) {
//     let service = prompt("US Army")
//     console.log("That's correct!");
//     let currentJob = prompt('Do I have experience in federal government?');
//     if (currentJob) {
//         let employment = prompt("IRS")
//         console.log("You got it!");

//         let levelOfEducation = prompt("Do you have a in degree in Mathematics?");
//         if (levelOfEducation) {
//             let goal = prompt("Nurse Pracitational?")
//             console.log("Good Answer!");

//             let currentLocation = prompt("Do I live in Seattle, WA");
//             if (currentLocation) {
//                 let state = prompt("Georgia")
//                 console.log("The Peach State");


//                 let guessTheAnswer = 7
//                    // How many colors in a rainbow
//                 for (let i = 7; i > guessTheAnswer; i++) {
//                     alert ("number too low")      
//               console.log("Sorry, Try again!");
//                 } //presumptively this will run as needed

//                  guessTheAnswer = 7
//                 // How many colors in a rainbow
//                 for (let i = 7; i < guessTheAnswer; i++) {
//                     alert ("number too high")      
//               console.log("Sorry, Try again!");
//             } //presumptively this will run as needed


//                 let responseAttempt = prompt ("How many attempts are given?")  
//               for (let number = 4; number > responseAttempt; number ++) { 
//                   alert (number);
//                 console.log("The loop has run" + (number + 1) + "times");

//               }    

//             } else {
//                 alert("Try again!")
//                 console.log("You can not proceed on");

//                 let question = ["What are some difficult things you would enjoy learning?"];
//                 let response = ["Awesome Choice!"]
//                 console.log(question + response);
//                 for (let i = 1; i <= 5; i = i = 1) {

//                     let response = prompt(question + response);
//                     responses.push(responses);
//                 }
//                 console.log(response);


//             }

//         }
//     }
// }


alert("Sorry, Your input was incorrect. Please reread my bio again!");

alert('You got ' + score + ' correct');
alert("Great Job! Welcome to my site!");

