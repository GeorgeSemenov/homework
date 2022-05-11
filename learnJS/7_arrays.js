"use strict";
console.log(`homework started`);
const readline = require('readline-sync');
// let value = readline.question(`Enter value: `);//пример запроса ввода пользователем


// let styles = ['Джаз','Блюз'];
// console.log(styles);
// styles.push('Рок-н-ролл');
// console.log(styles);
// styles[(Math.floor(styles.length/2))] = 'Классика';
// console.log(styles);
// styles.shift();
// console.log(styles);
// styles.unshift('Рэп','Рэгги');
// console.log(styles);

// let arr = ["a", "b"];
// arr.push(function() {
//   console.log( this );
// });
// arr[2](); // ?


// function sumInput(){
//   let arr = [];
//   let value;
//   let sum=0;
//   do{
//     value = readline.question(`Enter value: `);
//     if (isFinite(value) && value != ''){
//       arr.push(value);
//     }else break
//   }while (true)
//   for (let item of arr){
//     sum += +item;
//   }
//   console.log(`sum = ${sum}`);
// }
// sumInput();


let arr1 = [-1, 2, 3, -9];
let arr2 = [2, -1, 2, 3, -9];
let arr3 = [-1, 2, 3, -9, 11];
let arr4 = [-2, -1, 1, 2];
let arr5 = [100, -9, 2, -3, 5];
let arr6 = [1, 2, 3];
function getMaxSubSum(arr){
  let sum = 0;
  let results = [];
  let iterations = arr.length;
  let max = 0;
  for (let i = 0; i < iterations; i++) {
    // console.log(`i = ${i}`);
    for (let item of arr){  
      sum += +item;  
      results.push(sum);
      // console.log(`     item = ${+item}   sum = ${sum}`);  
    }
    sum = 0;
    arr.shift();
  }
  for (let k = 1; k <= results.length; k++) {
    max = Math.max(max, results[k-1]);
  }
  return max;
}

console.log(`getMaxSubSum(${arr1}) = ${getMaxSubSum(arr1)}`);
console.log(`getMaxSubSum(${arr2}) = ${getMaxSubSum(arr2)}`);
console.log(`getMaxSubSum(${arr3}) = ${getMaxSubSum(arr3)}`);
console.log(`getMaxSubSum(${arr4}) = ${getMaxSubSum(arr4)}`);
console.log(`getMaxSubSum(${arr5}) = ${getMaxSubSum(arr5)}`);
console.log(`getMaxSubSum(${arr5}) = ${getMaxSubSum(arr5)}`);
console.log(`getMaxSubSum(${arr6}) = ${getMaxSubSum(arr6)}`);