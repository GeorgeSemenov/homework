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

function sumInput(){
  let arr = [];
  let value;
  let sum=0;
  do{
    value = readline.question(`Enter value: `);
    if (isFinite(value) && value != ''){
      arr.push(value);
    }else break
  }while (true)
  for (let item of arr){
    sum += +item;
  }
  console.log(`sum = ${sum}`);
}
sumInput();