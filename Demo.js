const log = console.log;

const fibonacci = (number) => {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
};

// fibonacci(10);  //0, 1, 1, 2, 3, 5, 8, 13, 21, 34

const checkPrime = (number) => {
  let isPrime = true;
  if (number === 1) {
    console.log("1 is neither prime nor composite number.");
  } else if (number > 1) {
    for (let i = 2; i < number; i++) {
      if (number % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      console.log(`${number} is a prime number`);
    } else {
      console.log(`${number} is a not prime number`);
    }
  } else {
    console.log("The number is not a prime number.");
  }
};

// checkPrime(29); //29 is a prime number

const factorial = (number) => {
  if (number < 0) {
    console.log("Error! Factorial for negative number does not exist.");
  } else if (number === 0) {
    console.log(`The factorial of ${number} is 1.`);
  } else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
      fact *= i;
    }
    console.log(`The factorial of ${number} is ${fact}.`);
  }
};

// factorial(5); //The factorial of 5 is 120.

const allPrime = (min, max) => {
  console.log(`The prime numbers between ${min} and ${max} are:`);
  for (let i = min; i <= max; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
      if (i % j == 0) {
        flag = 1;
        break;
      }
    }
    if (i > 1 && flag == 0) {
      console.log(i);
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
    console.log(`${number} is an Armstrong number`);
  } else {
    console.log(`${number} is not an Armstrong number.`);
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
      console.log(i);
    }
  }
};

// allArmstrong(1, 500);

// program to check if the string is palindrome or not

function checkPalindrome(string) {
  const len = string.length;
  for (let i = 0; i < len / 2; i++) {
    if (string[i] !== string[len - 1 - i]) {
      console.log("It is not a palindrome");
      return "It is not a palindrome";
    }
  }
  console.log("It is a palindrome");
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
      console.log(arr[i] + 1);
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
        console.log(arr[i], arr[j]);
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
  console.log(arr);
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
  console.log(nums);
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
  console.log(arr);
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
  console.log(secondLargest);
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
