const log = console.log;

const fibonacci = (number) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= number; i++) {
    log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

// fibonacci(10);  //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const checkPrime = (number) => {
  let isPrime = true;
  if (number === 1) {
    log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      log(`${number} is a prime number`);
    } else {
      log(`${number} is a not prime number`);
    }
  } else {
    log("The number is not a prime number.");
  }
};

// checkPrime(29); //29 is a prime number

const factorial = (number) => {
  if (number < 0) {
    log("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    log(`The factorial of ${number} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    log(`The factorial of ${number} is ${fact}.`);
  }
};

// factorial(5); //The factorial of 5 is 120.

const allPrime = (min, max) => {
  log(`The prime numbers between ${min} and ${max} are:`);
  for (let i = min; i <= max; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      log(i);
    }
  }
};

// allPrime(2, 100);

// A positive integer is called an Armstrong number (of order n) if
const armstrong = (number) => {
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder * remainder * remainder;
    temp = parseInt(temp / 10);
  }
  if (sum == number) {
    log(`${number} is an Armstrong number`);
  } else {
    log(`${number} is not an Armstrong number.`);
  }
};

// armstrong(153); //153 is an Armstrong number

const allArmstrong = (min, max) => {
  for (let i = min; i <= max; i++) {
    let numberOfDigits = i.toString().length;
    let sum = 0;
    let temp = i;
    while (temp > 0) {
      let remainder = temp % 10;
      sum += remainder ** numberOfDigits;
      temp = parseInt(temp / 10);
    }

    if (sum == i) {
      log(i);
    }
  }
};

// allArmstrong(1, 500);

// program to check if the string is palindrome or not

function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      log("It is not a palindrome");
      return "It is not a palindrome";
    }
  }
  log("It is a palindrome");
  return "It is a palindrome";
}

// checkPalindrome("abcba");// It is a palindrome

// program to count the number of vowels in a string

function countVowel(str) {
  const count = str.match(/[aeiou]/gi).length;
  return count;
}

const result = countVowel("abcdef");

// console.log(result);

let arr1 = [11, 12, 13, 14, 15, 16, 17, 18, 20, 21];
let arr2 = [11, 12, 13, 14, 15, 16, 17, 18, 20, 21, 23];

function findMissing(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] - arr[i] !== 1) {
      log(arr[i] + 1);
    }
  }
}

// findMissing(arr1); //19
// findMissing(arr2);

let arr3 = [7, 8, 10, 12, 13, 11, 5, 14, 2, 3, 6];

function findPair(arr) {
  let constant = 17;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === constant) {
        log(arr[i], arr[j]);
      }
    }
  }
}

// findPair(arr3);

// console.log(null == undefined); //true
// console.log(null === undefined); //false

let unsortedArray = [10, 2, 15, 50, 15, 13, 1, 326, 100, 99, 6];

function sortArray(arr) {
  let temp;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  log(arr);
}

// sortArray(unsortedArray);

const insertionSort = (nums) => {
  for (let i = 1; i < nums.length; i++) {
    let j = i - 1;
    let temp = nums[i];
    while (j >= 0 && nums[j] > temp) {
      nums[j + 1] = nums[j];
      j--;
    }
    nums[j + 1] = temp;
  }
  log(nums);
  return nums;
};

//   insertionSort(unsortedArray);

let selectionSort = (arr) => {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let min = i;
    for (let j = i + 1; j < len; j++) {
      if (arr[min] > arr[j]) {
        min = j;
      }
    }
    if (min !== i) {
      let tmp = arr[i];
      arr[i] = arr[min];
      arr[min] = tmp;
    }
  }
  log(arr);
  return arr;
};

// selectionSort(unsortedArray);

function secondLargest(arr) {
  let largest = arr[0];
  let secondLargest = arr[1];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest) {
      secondLargest = arr[i];
    }
  }
  log(secondLargest);
  return secondLargest;
}

// secondLargest([3,10,8,37,22,35,5]);

//find duplicate values in a array.
function findDuplicate(array) {
  var object = {};
  var result = [];

  array.forEach(function (item) {
    if (!object[item]) object[item] = 0;
    object[item] += 1;
  });

  for (var item in object) {
    if (object[item] >= 2) {
      result.push(item);
    }
  }
  log(object);
  return result;
}

// findDuplicate([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]);  //[ '4', '7' ]

/*
find a pair of elements (indices of the two numbers) from an given array whose sum equals a specific target number.
Input: numbers= [10,20,10,40,50,60,70], target=50
Output: 2, 3
*/

function twoSum(nums, target_num) {
  var map = [];
  var indexnum = [];

  for (var x = 0; x < nums.length; x++) {
    if (map[nums[x]] != null) {
      var index = map[nums[x]];
      indexnum[0] = index;
      indexnum[1] = x;
      break;
    } else {
      map[target_num - nums[x]] = x;
    }
  }
  log(indexnum);
  return indexnum;
}

// twoSum([10,20,10,50,60,70,40],50); //[2,6]

/*
  merge two arrays and removes all duplicates elements.
  Test data:
  var array1 = [1, 2, 3];
  var array2 = [2, 30, 1];
  merge_array(array1, array2);
  [3, 2, 30, 1]
  */

function merge_array(array1, array2) {
  var result_array = [];
  var arr = array1.concat(array2);
  var len = arr.length;
  var assoc = {};

  while (len--) {
    var item = arr[len];

    if (!assoc[item]) {
      result_array.unshift(item);
      assoc[item] = true;
    }
  }
  log(result_array);
  return result_array;
}

var array1 = [1, 2, 3];
var array2 = [2, 30, 1];

// merge_array(array1, array2);

const check_miss = (n) => {
  let temp = Array(Math.max(...n)).fill(0);

  n.forEach((item) => (temp[item] = 1));

  const missing_items = temp
    .map((item, index) => (item === 0 ? index : -1))
    .filter((item) => item !== -1);

  console.log(missing_items);
};

n = [5, 4, 2, 1, 10, 20, 0];
// check_miss(n);       //[ 3,  6,  7,  8,  9, 11,12, 13, 14, 15, 16, 17,18, 19]

function findMissingNumbers(arr) {
  var sparse = arr.reduce((sparse, i) => ((sparse[i] = 1), sparse), []);
  return [...sparse.keys()].filter((i) => i && !sparse[i]);
}

var someArr = [2, 5, 3, 1, 4, 7, 10, 15];
var sResult = findMissingNumbers(someArr);
// console.log(sResult);      //[
//   6,  8,  9, 11,
//  12, 13, 14
// ]

const countOcurence = (str) => {
  let obj = {};
  for (let s of str) {
    if (!obj[s]) {
      obj[s] = 1;
    } else {
      obj[s] = obj[s] + 1;
    }
  }
  return obj;
};

let Occurence = countOcurence("my name is atul kumar srivastava");
// log("Occurence", Occurence);

const arr = [4, 2, -1, 0, 3, 9, 1, -5, 10, -20, 5];
const findSmallestMissing = (arr = []) => {
  let count = 1;
  if (!arr.length) {
    return count;
  }
  while (arr.indexOf(count) !== -1) {
    count++;
  }
  return count;
};
// log(findSmallestMissing(arr));

function getCommonItems(array1, array2) {
  var common = []; // Initialize array to contain common items

  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++) {
      if (array1[i] == array2[j]) {
        // If item is present in both arrays
        common.push(array1[i]); // Push to common array
      }
    }
  }

  return common; // Return the common items
}

var array1 = [1, 4, 5, 6, 8];
var array2 = [1, 2, 3, 8, 9];

// Get common items of array1, array2
var commonItemList = getCommonItems(array1, array2);

// console.log(commonItemList);

const removeDuplicateItem = (arr) => {
  // let unique = [...new Map(arr.map((item) => [item.itemName, item])).values()];
  // return unique;
  let array = {};
  let unique = [];
  arr.forEach((item) => {
    if (!array[item.itemName]) {
      array[item.itemName] = true;
      unique.push(item);
    }
  });
  log(array);
  return unique;
};

let originalItems = [
  {
    id: 1,
    itemName: "AAAAAAAAAA",
    quantity: 20,
  },
  {
    id: 2,
    itemName: "AAAAAAAAAA",
    quantity: 20,
  },
  {
    id: 3,
    itemName: "BBBBBBBBBB",
    quantity: 20,
  },
  {
    id: 4,
    itemName: "CCCCCCCCCCC",
    quantity: 20,
  },
  {
    id: 5,
    itemName: "BBBBBBBBBB",
    quantity: 20,
  },
  {
    id: 6,
    itemName: "BBBBBBBBBB",
    quantity: 20,
  },
  {
    id: 7,
    itemName: "AAAAAAAAAA",
    quantity: 30,
  },
];

// let uniqueItems = removeDuplicateItem(originalItems);
// log("uniqueItems", uniqueItems);

const removeDuplicateItemUsingFilter = (arr) => {
  let array = {};
  let unique = arr.filter((item) => {
    if (!array[item.itemName]) {
      array[item.itemName] = true;
      return item;
    }
  });
  return unique;
};

// let uniqueObj = removeDuplicateItemUsingFilter(originalItems);
// log(uniqueObj);

const firstMissingPositive = function (nums) {
  if (nums.length < 1) {
    return 1;
  }
  let obj = {};
  for (let num of nums) {
    if (num > 0) obj[num] = true;
  }
  let missing = 1;
  for (missing; missing <= nums.length; missing++) {
    if (!obj[missing]) {
      return missing;
    }
  }
  return missing;
};

let mixedNum = [10, -2, 6, 1, 9, -20, 30, 8, 2, 3, 15, 4, 5];
let firstMissingPositiveRes = firstMissingPositive(mixedNum);
log(firstMissingPositiveRes);
