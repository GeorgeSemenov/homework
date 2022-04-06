"use strict";
console.log(`homework started`);

// let user = {
//   name: "Джон",
//   go: function() { console.log(this.name) }
// };

// (user.go)()

//-----

// let obj, method;

// obj = {
//   go: function() { console.log(this); }
// };

// obj.go();               // (1) [object Object]

// (obj.go)();             // (2) [object Object]

// (method = obj.go)();    // (3) undefined

// (obj.go || obj.stop)(); // (4) undefined

//----

// function makeUser() {
//   return {
//     name: "Джон",
//     ref: this,
//     hren: 23
//   };
// };

// let user = makeUser();
// let user = makeUser();

// console.log(makeUser()); // Происходит вычисление (возвращение функции), а у функции this = undefined
// console.log( user.ref.name ); // Каким будет результат?

//-----

// const readline = require('readline-sync');
// let calculator = {
//   firstOperand: 0,
//   secondOperand: 0,

//   read: function() {
//     this.firstOperand = readline.question(`Enter first operand: `);
//     this.secondOperand = readline.question(`Enter second operand: `);
//   },
//   sum(){
//     console.log(`sum = ${+this.firstOperand + +this.secondOperand}`);
//   },
//   mul(){
//     console.log(`multiplication = ${this.firstOperand * this.secondOperand}`);
//   }
// }

// calculator.read();
// calculator.sum();
// calculator.mul();

//----

let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() { // показывает текущую ступеньку
    console.log( this.step );
    return this;
  }
};

ladder.up().up().down().showStep(); // 1
