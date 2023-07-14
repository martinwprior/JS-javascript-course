// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const measureKelvin = function () {
  const measurement = {
    type: ' temp',
    unit: 'celcius',
    value: Number(prompt('Degrees celcius:')),
  };

  console.table(measurement);
  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin());
*/

// we have an array of forecasted values

// example [17,21,23]

// print it to the console as "... 17C in 1 day ... 21C in 2 days ... 23C in 3 days ..."

// function printForecast (arr);
const arr1 = [17, 21, 23];
const arr2 = [12, 5, -5, 0, 4];

const printForecast = function (arr) {
  let newString = '';
  for (let i = 0; i < arr.length; i++) {
    newString += `... ${arr[i]}C in ${i + 1} days `;
  }
  return (newString += ' ...');
};
console.log(printForecast(arr2));
