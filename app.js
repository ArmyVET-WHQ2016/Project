'use strict'
let userName = prompt("What is your name?");
while (!userName) {
}
userName = prompt("What is your name?")
console.log("Loop has ended");

let veteran = prompt('Did I serve in the Armed Forces?');
if (veteran) {
    let service = prompt("US Army")
    console.log("That's correct!");

    let currentJob = prompt('Do I have experience in federal government?');
    if (currentJob) {
        let employment = prompt("IRS")
        console.log("You got it!");

        let levelOfEducation = prompt("Do you have a in degree in Mathematics?");
        if (levelOfEducation) {
            let goal = prompt("Nurse Pracitational?")
            console.log("Good Answer!");

            let currentLocation = prompt("Do I live in Seattle, WA");
            if (currentLocation) {
                let state = prompt("Georgia")
                console.log("The Peach State");

                let guessTheAnswer = 7
                  // How many colors in a rainbow
                for (let i = 7; i > guessTheAnswer; i++) {
                    alert ("number too low")      
              console.log("Sorry, Try again!");
                } //presumptively this will run as needed

                let guessTheAnswer = 7
                // How many colors in a rainbow
                for (let i = 7; i < guessTheAnswer; i++) {
                    alert ("number too high")      
              console.log("Sorry, Try again!");
            } //presumptively this will run as needed


                let responseAttempt = prompt ("How many attempts are given?")  
              for (let number = 4; number > responseAttempt; number ++) { 
                  alert (number);
                console.log("The loop has run" + (number + 1) + "times");

              }    

            } else {
                alert("Try again!")
                console.log("You can not proceed on");

                let question = [
                    "What are some difficult things you would enjoy learning?"
                ];
                let response = ["Awesome Choice!"]
                console.log(question + response);
                for (let i = 1; i <= 5; i = i = 1) {

                    let response = prompt(question + response);
                    responses.push(responses);
                }
                console.log(response);


            }

        }
    }
}
}

alert "Sorry, Your input was incorrect. Please reread my bio again!"
}else {
alert"Great Job! Welcome to my site!";

}
