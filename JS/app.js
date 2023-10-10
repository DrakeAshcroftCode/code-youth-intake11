//Check to see if the two variables are not equal;
let rating1 = 5;
let rating2 = 4;
console.log(rating1 != rating2)
//Write some code to check if the following variable is 5;
let rng = Math.floor(Math.random()*10);
console.log(rng === 5);
// Find the total cost of all the items, then find the cost of tax. Finally display the Total, Tax, and Total + tax as a dollar value;
//Tax formula (total * tax) / 100
let skateboard = 5.99;
let fryingPan = 11.99;
let piano = 12.99;
let table = 199.99;
let notebook = 4.59;
let total = skateboard + fryingPan + piano + table + notebook;
let tax = total * 13 / 100;
let final = total + tax;
console.log(total);
console.log(tax);
console.log(final);

let myNoun =  "platypus";
let myVerb = "sprinted";
let myAdjective = "happy";
let myAdverb = "quickly";
console.log("The", myAdjective, myNoun, myVerb, "over the hill", myAdverb)