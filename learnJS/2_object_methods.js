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

function makeUser() {
  return {
    name: "Джон",
    ref: this
  };
};

// let user = makeUser();
let user = makeUser();

console.log(makeUser().ref.name);
console.log( user.ref.name ); // Каким будет результат?

