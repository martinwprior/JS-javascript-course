'use strict';
/*
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return (0.15 * bill);
    } else {
        return (0.20 * bill);
    }
}

//console.log(calcTip(100));

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const totals = [];
const tips = [];
let i = 0;
for (i = 0; i <= bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
    console.log(tips[i], bills[i], totals[i]);
}



// objects
const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 23,
    job: 'teacher',
    friends: ['Michael', 'David', 'Melvin']
}
const interestedIn = prompt('What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends');

if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log('Wrong request! Choose between firstName, lastName, age, job, and friends');
}

console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`)

const jonas = {
    firstName: 'Jonas',
    lastName: 'Smith',
    age: 23,
    birthYear: 1991,
    job: 'teacher',
    friends: ['Michael', 'David', 'Melvin'],
    hasDriversLicence: true,
    calcAge: function () {
        console.log(this);
        this.age = 2037 - this.birthYear;
        return this.age;
    },
    getSummary: function () {
        return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'} drivers's Licence `
    }

};
console.log(jonas.getSummary());


const mark = {
    fullName: 'Mark Miller',
    weight: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    },
};


const john = {
    fullName: 'John Smith',
    weight: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.weight / (this.height * this.height);
        return this.BMI;
    },

};

john.calcBMI();
mark.calcBMI();
console.log(john.BMI, mark.BMI);


if (john.BMI > mark.BMI) {
    console.log(`${john.fullName}'s BMI (${john.BMI}) is higher than ${mark.fullName}'s ${mark.BMI}`)
} else if (mark.BMI > john.BMI) {
    console.log(`${mark.fullName}'s BMI (${mark.BMI}) is higher than (${john.fullName})'s (${john.BMI})`)
};
// console.log(getSummary());

// getSummary: function () {
//    return `${this.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicence ? 'a' : 'no'}drivers's Licence `
// }

for (let rep = 1; rep <= 10; rep++) {
    console.log(`lifting weight repitition : ${rep} `);
}

const jonas = [
    "Jonas",
    "Schedtmann",
    2037 - 1991,
    "Teacher",
    ["Michael", "Peter", "Steven"]
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);

}
*/

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const totals = [];
const tips = [];
const arr = [];
let i = 0;
for (i = 0; i < bills.length; i++) {
    tips[i] = calcTip(bills[i]);
    totals[i] = tips[i] + bills[i];
    arr.push(totals[i]);
    console.log(tips[i], bills[i], totals[i]);

};
console.log(arr);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    };
    //    console.log(`total = ${sum}`);
    let average = 0;
    return average = sum / i;
};

console.log(calcAverage(arr));