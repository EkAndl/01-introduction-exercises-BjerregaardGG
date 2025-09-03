// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const twoNumbersFloat = parseFloat(numberOne) + parseFloat(numberTwo);

console.log(twoNumbersFloat);


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

const anotherTwoNumbers = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo);

const result = anotherTwoNumbers.toFixed(2);
console.log(result);

// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const averageSum = (one + two + three) / 3; 

const averageToDecimal = averageSum.toFixed(5);

console.log(averageToDecimal);

// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"

const charC = letters[2];

console.log(charC);


// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript

const capitalizeJS = fact.slice(0, 17) + fact.slice(17, 18).toUpperCase() + fact.slice(18);
const capitalizeJS2 = fact.replace("j", "J")

console.log(capitalizeJS);
console.log(capitalizeJS2)



// --------------------------------------



