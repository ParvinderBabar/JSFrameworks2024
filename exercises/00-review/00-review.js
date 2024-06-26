import greet from "./greet.js";
/**
 * Solve this problem using ES modules (ESM).
 * ES modules allow you break up your code into multiple files (or modules), and then share code between different files.
 * To learn about ES modules:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#default_exports_versus_named_exports
 *
 * 1. Create a new file in the same folder as this file called "greet.js". (NOTE that you will need to include the extension ".js" in order for this to work)
 * 2. Copy the "greet" function below and paste it into the new file "greet.js"

const greet = (name) => {
  return `Hello ${name}!`;
};

 * 3. Export the "greet" function from "greet.js"
 * 4. Import the function at the top of this file using the name "greet"
 * 
 * If you see "Error [ERR_MODULE_NOT_FOUND]:", then your export or import is not correct.
 *
 * ES6 Modules Reference:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * @see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */

/**
 *  Return the highest number in the array
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/

const highestNumber = (array) => {
  // Write your answer here


let highnumber = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > highnumber) {
      highnumber = array[i];
    }
  }
  return highnumber;
};
console.log(highestNumber[10, 2, 5, 7, 9]);
/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

const combineArray = (array1, array2) => {
  // Write your answer here
  return [...array1, ...array2];//one way
 
};
console.log(combineArray(['japan', 'china'], ['usa','uk']));

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

const combineObject = (obj1, obj2) => {
  // Write your answer here
  const array1 = Object.entries(obj1);// from object to array
  const array2 = Object.entries(obj2);
  const combineArray = array1.concat(array2);
  combineObject = Object.fromEntries(combineArray);//array to object
return combineObject;
};

// Example usage
console.log(combineObject({ country1: 'Japan' }, { country2: 'USA' }));

/**
 * Please use the higher order function map to solve this problem.
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

// const doubleValues = (arr) => {
//   // Write your answer here
//   let newnumbers = [];
//   for (let i = 0; i < arr.length; i++)
//   {
//     newnumbers[i] = 2 * arr[i];

//   }
//   return newnumbers;
// };

const doubleValues = (arr) => {
  return arr.map(number => number * 2);
}

console.log(doubleValues([1, 4, 6]));

/**
 * * Please use the higher order function filter to solve this problem.
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
const onlyEvenValues = (arr) => {
  // Write your answer here
  return arr.filter(number => number % 2 == 0);
};
console.log(onlyEvenValues([1, 2, 3, 4, 5]));

/**
 * Create a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercase and lowercase) removed.
 * Every character in the new string should be lowercase.
 * @example
 * removeVowels('Elie') // ('l')
 * removeVowels('TIM') // ('tm')
 * removeVowels('ZZZZZZ') // ('zzzzzz')
 */
const removeVowels = (str) => {
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  let result = "";
  if (!vowels.includes(str[i])) {
    result += str[i];

  }
  return result.toLowerCase();

};
console.log(removeVowels('ELIE'));




/**
 * Solve this problem using the ternary operator.
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * @returns {string}
 */

const getIsHungryText = () => {
  //don't change this variable
  let isStomachEmpty = false;
  /* convert this if else statement into a ternary expression */

  // let isHungry;
  // if (isStomachEmpty) {
  //   isHungry = "Go eat something.";
  // } else {
  //   isHungry = "Keep coding!";
  // }
  let isHungry= isStomachEmpty?'Go eat something':'Keep coding!'

  return isHungry;
};
console.log(getIsHungryText());

/**
 * Refactor this to use destructuring. For an example of destructuring,
 * @see https://dmitripavlutin.com/javascript-object-destructuring/
 * @return Function should return tomorrow's temperature
 */

const getTempOfTomorrow = () => {
  // Do not change me
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
  };

  // Start of what you should change
  // const today = AVG_TEMPERATURES.today;
  // const tomorrow = AVG_TEMPERATURES.tomorrow;
  const { today, tomorrow } = AVG_TEMPERATURES;
  // End of what you should change
  return `Today's temperature is ${today}.\nTomorrow's temperature is ${tomorrow}`;
};

/**
 * Please use the high order function reduce to solve this problem. For an example of reduce,
 * @see https://www.airpair.com/javascript/javascript-array-reduce
 *
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
const addItems = (arr) => {
  // Write your answer here
  let sum = 0;
  arr.forEach(number => {
    
  
    sum = sum + number;
  })
  return sum;
};
console.log(addItems[1, 5, 6]);
/**
 * Remove duplicate values from an array.
 * @example
 * [1,1,2,2,3,3] // [1,2,3]
 * @param {array} arr
 * remove duplicates elements from an array
 *  hint you can use sets (optional) as a way to solve this problem.
 * @return {array}
 *
 */

const removeDuplicates = (array) => {
  // Write your answer here
  // Return an array of unique values
  let newArray = [];
  array.forEach((number, index) => {
    if (index === 0 || index[i - 1] !== number) {
      newArray.push(number);
    }
  });
  return newArray;
};
console.log(removeDuplicates([1, 1, 2, 2, 3, 3]));

/**
 * Ignore this. It is for the tests.
 */

let greeter;
try {
  greeter = greet;
} catch (e) {
  // Normally it is bad practice to not handle the error.
  // However, I am just using try ... catch to get the unit test to work
}
export {
  greeter,
  highestNumber,
  combineArray,
  combineObject,
  doubleValues,
  onlyEvenValues,
  removeVowels,
  getIsHungryText,
  getTempOfTomorrow,
  addItems,
  removeDuplicates,
};
