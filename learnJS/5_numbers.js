"use strict";
console.log(`homework started`);
const readline = require('readline-sync');
// let value = readline.question(`Enter value: `);//пример запроса ввода пользователем

// let value1 = +readline.question(`Enter value #1: `);
// let value2 = +readline.question(`Enter value #2: `);

// console.log(`sum = ${value1 + value2}`);

// console.log(1.35.toFixed(1));
// console.log(6.35.toFixed(1));
// console.log(Math.round(6.35*10)/10);


// function readNumber(){
//   let valuev = undefined;
//   do{
//     valuev = readline.question(`Enter value : `);
//   }while(!isFinite(valuev) && (valuev != '') && (valuev != 'null'))
//     return valuev
// }

// console.log(`bombino = ${readNumber()}`);


// let i = 0;
// let k = 0
// while (i != 10 && k < 55) {
//   i += 0.2;
//   ++k;
//   console.log(`i = ${i}`);
// }


// function random(min, max){
//   return (min + Math.random()*(max-min) )
// }

// console.log(random(1,5));
// console.log(random(1,5));
// console.log(random(1,5));


function randomInteger(min, max){
  return Math.round((min + Math.random()*(max-min) ))
}

console.log(randomInteger(1,5));
console.log(randomInteger(1,5));
console.log(randomInteger(1,5));