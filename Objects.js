let log = console.log;

let object1 = {
  id: "xyz",
  product: "AAAAAA",
  type: {
    id: "dsjhj1",
    name: "Hdjhjshj",
  },
};

// let object2 = object1;

// log("Obj1", object1); //{
//     id: 'xyz',
//     product: 'AAAAAA',
//     type: { id: 'dsjhj1', name: 'Hdjhjshj' }

//   }
// log("Obj2", object2); //{
//     id: 'xyz',
//     product: 'AAAAAA',
//     type: { id: 'dsjhj1', name: 'Hdjhjshj' }
//   }

// object2.name = "Hii";

// log("Obj1", object1);//{
//     id: 'xyz',
//     product: 'AAAAAA',
//     type: { id: 'dsjhj1', name: 'Hdjhjshj' },
// name: 'Hii'
//   }
// log("Obj2", object2);//{
//     id: 'xyz',
//     product: 'AAAAAA',
//     type: { id: 'dsjhj1', name: 'Hdjhjshj' },
// name: 'Hii'
//   }

let object2 = { ...object1 };

// object2.name = "Hii";
// log("Obj1", object1);  //Object1 will not modify
// log("Obj2", object2);

// log(Object.keys(object1)); //[ 'id', 'product', 'type' ]
// log(Object.values(object1)); //[ 'xyz', 'AAAAAA', { id: 'dsjhj1', name: 'Hdjhjshj' } ]
// log(Object.entries(object1)); //[
//     [ 'id', 'xyz' ],
//     [ 'product', 'AAAAAA' ],
//     [ 'type', { id: 'dsjhj1', name: 'Hdjhjshj' } ]
//   ]

// log(Object.is(object1, object2)); // false
