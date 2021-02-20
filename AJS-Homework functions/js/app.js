//Write a function that takes an array of numbers The function should
//return a new array where each element is multiplied by 10.
// Bonus: Add a second input parameter which is a number. 
//Make the new array elements multiplied by that number instead of 10.

let numArr = [32, 66, 68, 89, 90, 93, 221, 2022];

let numArrMapped = numArr.map((number) => number * 10);
console.log(numArrMapped);


//BONUS

let newNumArr = [1, 2, 3, 4, 5, 6, 7, 9, 8, 12];
let someNum = parseInt(prompt(`Please enter number of choise!`));

let newArrMapped = newNumArr.map((number) => number * someNum);
console.log(newArrMapped);



/*Write a function that takes two input parameters.
 The first input parameter should be an array of numbers,
 and the second input parameter should be a number.
  The function should filter the input array and return
   a new array that consists only of numbers that are
   divisible by the second input parameter.
Bonus: Sort the resulting array in an ascending order */

let arrNums = [5, 6, 14, 2, 58595, 58546, 25, 3, 996, 46, 87, 39, 669, 99, 126, 15];
let filteredArrNums = [];
b = parseInt(prompt(`Please enter number!`));


for (const num of arrNums) {
    if (num % b === 0) {
        filteredArrNums.push(num);
    }
}
console.log(filteredArrNums);


//BONUS
filteredArrNums.sort((a, b) => a - b);
console.log(filteredArrNums);