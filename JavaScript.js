let log = console.log;

/**
    "Mutable" means "changeable". If something is "immutable", it can never be changed.
    JavaScript objects and arrays are all mutable by default. 
    -----> If I create an object, I can change the contents of its fields. 
    -----> If I create an array, I can change the contents as well:
 **/

/**
    Inside of a regular function, this value (aka the execution context) is dynamic.
    The dynamic context means that the value of this depends on how the function is invoked. 
    In JavaScript, there are 4 ways you can invoke a regular function. 
 **/

// The arrow function doesn’t define its own execution context.
// unlike Regular functions, arrow function does not have their own "this" keyword.

// The value of this inside an arrow function remains the same throughout the lifecycle of the function
// and is always bound to the value of this in the closest non-arrow parent function.

function regFun() {
  log(this); //global
}

// regFun();

function myFunction() {
  log(this);
}

// Simple invocation
// myFunction(); // logs global object (window)

const myObject = {
  method() {
    log(this);
  },
};
// Method invocation
// myObject.method(); // { method: [Function: method] }

// Object with Regular function.
let getData = {
  // Regular function
  showArg: function () {
    log(arguments);
  },
};
// getData.showArg(1, 2, 3, 4, 5); // output { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

// Object with Arrow function.
let getArrowData = {
  // Arrow function
  showArg: () => log(arguments),
};
// getArrowData.showArg(1, 2, 3); // Uncaught ReferenceError: arguments is not defined

let name = {
  fullName: "Vandna Kapoor",
  printInRegular: function () {
    console.log(`My Name is ${this.fullName}`);
  },
  printInArrow: () => console.log(`My Name is ${this.fullName}`),
  printInArrow1: () => {
    log(this); //{}
    // console.log(`My Name is ${fullName}`); //ReferenceError: fullName is not defined
  },
};

// name.printInRegular(); //My Name is Vandna Kapoor
// name.printInArrow(); //My Name is undefined
// name.printInArrow1();

let empty = "";
// log(empty ? "Hello" : "Hi"); //Hi

let space = " ";
// log(space ? "Hello" : "Hi"); //Hello

// console.log(counter); // undefined
// var counter = 1;

// console.log(counter1);   //ReferenceError: Cannot access 'counter1' before initialization
// let counter1 = 2;

// log(counter3); //undefined

var counter3;
counter3 = 3;

counter4 = 4;
// log(counter4); //4

var counter4;

function Person() {
  (this.name = "John"), (this.age = 23);
}

const person = new Person();
// log(person); //Person { name: 'John', age: 23 }
// log(Person); //[Function: Person]

// log(Person.prototype); //Person {}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = "male";

// prototype value of Person
// log(Person.prototype); //Person { gender: 'male' }

// inheriting the property from prototype
// log(person1.gender); //male
// log(person2.gender); // male

// log(Object); //[Function: Object]
// log(Object.prototype);  //{}

function Student() {
  this.name = "John";
  this.gender = "Male";
}

var studObj1 = new Student();
studObj1.age = 15;
// log(studObj1.age); // 15

var studObj2 = new Student();
// log(studObj2.age); // undefined

function Student1() {
  this.name = "John";
  this.gender = "M";
}

Student1.prototype.age = 15;

var studObj1 = new Student1();
// log(studObj1.age); // 15

var studObj2 = new Student1();
// log(studObj2.age); // 15

function StudentX() {
  this.name = "Sumant";
  this.age = 27;
}

StudentX.prototype.gender = "Male";

let studentx = new StudentX();
log(studentx); //Student2 { name: 'Sumant', age: 27 }
