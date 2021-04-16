const log = console.log;
// console.log("This in global", this); //This in global {}
// console.log("this", this === global); //this false    but in node true

function f1() {
  return this;
}

// log(f1() === globalThis); // true;

function checkThis() {
  log("this inside normal function", this); //global: [Circular]
}
// checkThis();

const checkThisWithArrow = () => {
  log("this inside arrow function", this); //this inside arrow function {}
};

// checkThisWithArrow();

this.table = "This is a table";
let Table = "This is another table";

// Public method
this.person = {
  personName: "Sumant",
  personAge: 27,
  returPerson() {
    log(this.personName, this.personAge);
  },
};
// this.person.returPerson(); //Sumant 27
// log(this); // { table: 'This is a table' }
// log(this.person); //{ personName: 'Sumant', personAge: 27 }
// log(this.person.personName); //Sumant

let privatePerson = {
  personName: "Sumant",
  returName() {
    log(personName);
  },
};

// privatePerson.returName(); //ReferenceError: personName is not defined

let privatePerson1 = {
  personName: "Sumant",
  returName() {
    log(this.personName);
  },
};

// privatePerson1.returName();  //Sumant

const cleanTable = function (extra) {
  //   log(`Cleaning ${Table}`); //Cleaning This is another table
  log(`Cleaning ${this.table} with ${extra}`); //Cleaning undefined
  //   log(`Cleaning ${table}`); //ReferenceError: table is not defined
};

// cleanTable();

// cleanTable.call(); //Cleaning undefined
// cleanTable.call(this); //Cleaning This is a table
// cleanTable.call(this, "sope"); //Cleaning This is a table with sope
// cleanTable.apply(); //Cleaning undefined
// cleanTable.apply(this); //Cleaning This is a table
// cleanTable.bind(this); //Cleaning This is a table with undefined

function tableCleaning() {
  //   log(`Cleaning ${Table}`); //Cleaning This is another table
  //   log(`Cleaning ${this.table}`); //Cleaning undefined
  //   log(`Cleaning ${table}`); //ReferenceError: table is not defined
}

// tableCleaning();

const arrowTableCleaning = () => {
  //   log(`Cleaning ${Table}`); //Cleaning This is another table
  //   log(`Cleaning ${this.table}`); //Cleaning This is a table   ----> here this is accessible
  //   log(`Cleaning ${table}`); //ReferenceError: table is not defined
};

// arrowTableCleaning();

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
  this.gender = "Male";
}

Student1.gender = "male";

Student1.prototype.age = 15;

var studObj3 = new Student1();
// log(studObj3.age); // 15

var studObj4 = new Student1();
// log(studObj4.age); // 15

// log(studObj4.gender); //Male

const numbers = [5, 4, 3, 2, 1];

// log(numbers.map((element) => element * element)); //[ 25, 16, 9, 4, 1 ]

// log(numbers.forEach((element) => element * element)); //undefined

const myAwesomeArray = [1, 2, 3, 4, 5];
//let total = myAwesomeArray.forEach((x) => x * x).reduce((total, value) => total + value); //TypeError: Cannot read property 'reduce' of undefined

// log(myAwesomeArray);

let total = myAwesomeArray
  .map((x) => x * x)
  .reduce((total, value) => total + value); //55
// log(total);
