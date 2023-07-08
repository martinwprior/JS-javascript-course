'use strict';
/*
let hasDriversLicence = false;
const passTest = true;

if (passTest) hasDriversLicence = true;
if (hasDriversLicence) console.log('I can drive');

// const interface = "Audio";
// const private = 534;
//
function logger() {
    console.log('My name is Martin');
}
logger();  // calling running or invoking function
logger();

logger(); logger(); logger(); logger();
function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);
*/
// function delaration :can be called before declared

/*
function calcAge1(birthYear) {
    return 2037 - birthYear;
}
const age1 = calcAge1(1991);
console.log(age1);

// function expression : cannot be be called before being declared

const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
}
console.log(calcAge2(1991));
*/


// Arrow function
/*
const calcAge3 = birthYear => 2037 - birthYear;
console.log(calcAge3(1991));
//
// Arrow function with more parameters 

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
    return `${firstName} can retire in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991, 'Martin'));
console.log(yearsUntilRetirement(1996, 'Fred'));
*/

/*
function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    console.log(applePieces, orangePieces);
    const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}

console.log(fruitProcessor(2, 1));

*/

function doughWeight(flour, hydration) {
    const salt = (2 / 100) * flour;
    const ferment = (20 / 100) * flour;
    const water = (hydration / 100) * flour;
    console.log(salt, ferment, water);
    return (`You need ${flour} grams flour, ${salt} grams salt ${ferment} grams ferment ${water} grams water`);
}

console.log(doughWeight(1000, 67));