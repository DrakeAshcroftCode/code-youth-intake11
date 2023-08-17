//1 Write an if statement to check if the following variable is true. if it is true console.log "myBoolean is true", if it is false console.log "myBoolean is false";

let myBoolean = true;
if(myBoolean=true){
    console.log("true");
}else if(myboolean=false){
    console.log("false");
}
//2 Write an if statement that changes the lamp to on or off based on if the switch is true or false.
let lightSwitch = false;
let lamp;
if(lightswitch=false){
    lamp = "off";
}else if(lightSwitch=true){
    lamp = "on";
}
/* Write the if statement here */
console.log(lamp)
//3 Write an if statement to check if this number is possitive, negative or zero
let num = -4;
//4 Write an if statement to check if this number is even or odd. (Remember remainder)
let myNum = 5;
if(num >= -1){
    console.log("Number is negative")
}else if(num => 1){
    console.log("Number is positive")
}

//4 Write an if statement to check if this number is even or odd. (Remember remainder)
if (myNum % 2 === 0) {
    console.log(`${myNum} is even.`);
} else {
    console.log(`${myNum} is odd.`);
}

let grade = Math.floor(Math.random() * 100); 
if (grade < 50) {
    console.log("F");
} else if (grade >= 50 && grade < 60) {
    console.log("D");
} else if (grade >= 60 && grade < 70) {
    console.log("C");
} else if (grade >= 70 && grade < 80) {
    console.log("B");
} else {
    console.log("A");
}

let num1 = 10;
let num2 = 7;
let operator = "+";

function add(num1, num2) {
    console.log(num1 + num2);
}

function sub(num1, num2) {
    console.log(num1 - num2);
}

if (operator === "+") {
    add(num1, num2);
} else if (operator === "-") {
    sub(num1, num2);
} else {
    console.log("Error");
}
///Calculator Assignment
// function calculator() {
//     let operation = prompt("Enter operation (+, -, *, /):");
//     let num1 = parseFloat(prompt("Enter the first number:"));
//     let num2 = parseFloat(prompt("Enter the second number:"));

//     if (isNaN(num1) || isNaN(num2)) {
//         console.log("That aint a number");
//         return;
//     }

//     let result;

//     if (operation === "+") {
//         result = num1 + num2;
//     } else if (operation === "-") {
//         result = num1 - num2;
//     } else if (operation === "*") {
//         result = num1 * num2;
//     } else if (operation === "/") {
//         if (num2 !== 0) {
//             result = num1 / num2;
//         } else {
//             console.log("Dividing by zero is unadvisable.");
//             return;
//         }
//     } else {
//         console.log("No way Jose.");
//         return;
//     }

//     // Display the result
//     console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
   
//     document.getElementById("result").innerHTML = result;

// }
// calculator();

// Assignment 1
console.log("Task 1");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// Assignment 2
console.log("Task 2");
for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Assignment 3
console.log("Task 3:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// Assignment 4
console.log("Task 4");
for (let i = 0; i <= 50; i += 2) {
  console.log(i);
}

// Assignment 5
console.log("Task 5");
let randomNum = Math.floor(Math.random() * 101);
console.log("Random number:", randomNum);
for (let i = 0; i <= 100; i++) {
  if (i === randomNum) {
    console.log("Found the random number:", i);
    break;
  }
}
//assignment 1

let word="Howdy";

for (let i = 0; i < word.length; i++) {
    console.log(word[i]);
}
//assignment 2

for (let aye = 0; aye < 10; aye++){
for (let i = 0; i < 11; i++){console.log(i)}
}

//assignment 1

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0) {
        console.log(i + " is a multiple of 3");
    }
}

//assignment 2

let example = "example";

for (let i = 0; i < example.length; i++) {
    const letter = example[i].toLowerCase();
    
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
        console.log(`${letter} is a vowel`);
    } else {
        console.log(`${letter} is not a vowel`);
    }
}
//assignment 3

let reverserino = "Howdy";
let reversed = "";

for (let i = reverserino.length - 1; i >= 0; i--) {
    reversed += reverserino[i];
}

console.log(reversed);