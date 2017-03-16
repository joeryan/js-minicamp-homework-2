//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x >= y) {
    return x;
  } else {
    return y;
  }
}

function greeting(language) {
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
  var greet = 'Hello!';
  switch(language) {
    case 'German':
      greet = 'Guten Tag!';
      break;
    case 'English':
      greet = 'Hello!';
      break;
    case 'Spanish':
      greet = 'Hola!';
  }
  return greet;
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  if (num == 10 || num == 5) {
    return true;
  }
  return false;
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
  if (num < 50 && num > 20) {
    return true;
  }
  return false;
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  if (Math.floor(num) === num) {
    return true;
  }
  return false;
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  var result = '';
  if (num % 3 == 0) {
    result += 'fizz';
  }
  if (num % 5 == 0) {
    result += 'buzz';
  }
  if (result == '') {
    return num;
  } else {
    return result;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
  var prime = true;
  if (num <= 1) {
    prime = false;
  } else {
    for (var i = 2; i < num; i++) {
      if (num % i == 0) {
        prime = false;
        break;
      }
    }
  }
  return prime;
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  return arr.pop();
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;

}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
  var new_arr = [];
  for (var i = 0; i < arr.length; i++) {
    new_arr.push(arr[i]+1);
  }
  return new_arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr[arr.length] = item;
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  arr.unshift(item);
  return arr;
  //hint: use the array method .unshift
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var sentence = words.join(' ');
  return sentence;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
  var present = false;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      present = true;
      break;
    }
  }
  return present;
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  return numbers.reduce(function (total, num) {
    return total + num;
  });
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var total = testScores.reduce(function(total, num){
    return total + num;
  });
  return total / testScores.length;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  numbers.sort(function(a,b){return a-b;});
  return numbers.pop();
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
