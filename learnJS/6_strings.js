"use strict";
console.log(`homework started`);
const readline = require('readline-sync');
// let value = readline.question(`Enter value: `);//пример запроса ввода пользователем


// function ucFirst(str){
//   if (!str) return str;//проверяем на пустую строку, т.к. у пустой строки нет метода toUpperCase
//   let newStr = str[0].toUpperCase() + str.slice(1);
//   return newStr;
// }
// let peremennaya = 's';
// console.log(`${peremennaya} => ${ucFirst(peremennaya)}`);


// function checkSpam (str){
//   return (str.toLowerCase().includes(`viagra`) || str.toLowerCase().includes(`xxx`))
// }
// let str1 = 'buy ViAgRA now';
// let str2 = `free xxxxx` ;
// let str3 = `innocent rabbit` ;

// console.log(`checkSpam(str1) = ${checkSpam(str1)}`);
// console.log(`checkSpam(str2) = ${checkSpam(str2)}`);
// console.log(`checkSpam(str3) = ${checkSpam(str3)}`);


// function truncate(str, maxLength){
//   if (maxLength < str.length){
//     return str.slice(0,maxLength-1) + '…';
//   }else{
//     return str;
//   }
// }
// console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
// console.log(truncate("Всем привет!", 20));


function extractCurrencyValue(currency){
  return parseInt(currency.slice(1))
}

console.log(extractCurrencyValue('$120'));