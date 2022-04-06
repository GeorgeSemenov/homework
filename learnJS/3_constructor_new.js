"use strict";
console.log(`homework started`);

const readline = require('readline-sync');
function Calculator(){
  this.firstOperand= 0;
  this.secondOperand= 0;

  this.read= function() {
    this.firstOperand = readline.question(`Enter first operand: `);
    this.secondOperand = readline.question(`Enter second operand: `);
  };
  this.sum = function(){
    console.log(`sum = ${+this.firstOperand + +this.secondOperand}`);
  };
  this.mul = function(){
    console.log(`multiplication = ${this.firstOperand * this.secondOperand}`);
  };
}

let cal = new Calculator();
cal.read();
cal.sum();
cal.mul();