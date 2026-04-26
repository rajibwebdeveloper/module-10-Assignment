//----function named calculateDifference returns first and second arguments----

function calculateDifference(a, b) {
  return a - b;
}

console.log(calculateDifference(10, 4));


//function named isOdd and returns true if the number is odd, and false if it is not----

function isOdd(number) {
  return number % 2 !== 0;
}

console.log(isOdd(5));
console.log(isOdd(8));


//function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(numbers) {
  return Math.min(...numbers);
}

console.log(findMin([5, 2, 9, 1, 7]));


//function named filterEvenNumbers that takes an array of numbers and 
// returns a new array containing only the even numbers.

function filterEvenNumbers(numbers) {
  return numbers.filter(number => number % 2 === 0);
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));


//function named sortArrayDescending that takes an array of numbers and 
//returns a new array sorted in descending order.


function sortArrayDescending(numbers) {
  return [...numbers].sort((a, b) => b - a);
}

console.log(sortArrayDescending([5, 2, 9, 1, 7]));


// 6) Write a function named lowercaseFirstLetter that takes a capitalized string and 
// returns the same string with the first letter lowercased. 


function lowercaseFirstLetter(str) {
  return str.charAt(0).toLowerCase() + str.slice(1);
}

console.log(lowercaseFirstLetter("Rajib"));

// 7) Write a function named findAverage that takes an array of numbers and 
// returns the average of all elements.

function findAverage(numbers) {
  let sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

console.log(findAverage([10, 20, 30, 40]));


// 8) Write a function named isLeapYear that takes a year as an argument and 
// returns true if the year is a leap year, and false if it is not.


function isLeapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

console.log(isLeapYear(2024));
console.log(isLeapYear(2023));