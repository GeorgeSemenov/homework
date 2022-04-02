console.log('homework is start');

// let polkvnick = {
//   name: "twain",
//   adress: "nowere",
//   status: "nobody"
// };

// let emptyObj = {};


// function isEmpty(obj){
//   let isObjEmpty = true;
//   for (key in obj){
//     console.log(`key = ${key}`);
//     isObjEmpty = false;
//   }
//   return isObjEmpty;
// }

// console.log(`isEmpty(polkvnick) = ${isEmpty(polkvnick)}`);
// console.log(`isEmpty(emptyObj) = ${isEmpty(emptyObj)}`);

//----

// const objJojoba = {karusel : "lolo"};
// let protoPorn = objJojoba;

// protoPorn.karusel = "ne tak";

// console.log(protoPorn.karusel);

//----

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130,
// }

// function toSum (obj){
//   let sum = 0;
//   for (key in obj){
//     sum += (obj[key]);
//   }
//   console.log(`sum = ${sum}`);
// }
// toSum(salaries);

//----
function multiplyNumeric(obj){
  for (klyuch in obj){
    if((typeof obj[klyuch]) == "number"){
      obj[klyuch] *= 2;
    }
  }
}

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(JSON.stringify(menu));