// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName = last;
//   this.name = this.firstName + " " + this.lastName;
// }

function NameMe(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.name = first + " " + last;
}

const n = new NameMe("Pit", "Moor");
// console.log(n.lastName, ",", n.name);

{
  // We want to create a constructor function 'NameMe', which takes first name and last name as parameters.
  //  The function combines the first and last names and saves the value in "name" property.

  /*We already implemented that function, but when we actually run the code, 
the "name" property is accessible, but the "firstName" and "lastName" is
 not accessible. All the properties should be accessible.
  Can you find what's wrong with it? A test fixture is also available */

  let v1 = 50,
    v2 = 100,
    v3 = 150,
    v4 = 200,
    v5 = 2,
    v6 = 250;

  function equal1() {
    let a = v1,
      b = v1;
    return a + b;
  }

  //Please refer to the example above to complete the following functions
  function equal2() {
    let a = v3, //set number value to a
      b = v1; //set number value to b
    return a - b;
  }

  function equal3() {
    let a = v5, //set number value to a
      b = v1; //set number value to b
    return a * b;
  }

  function equal4() {
    let a = v4, //set number value to a
      b = v5; //set number value to b
    return a / b;
  }

  function equal5() {
    let a = v6, //set number value to a
      b = v3; //set number value to b
    return a % b;
  }
}

{
  /*  Task;
 I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.
  
      1. getLength(arr)    should return length of arr
      2. getFirst(arr)     should return the first element of arr
      3. getLast(arr)      should return the last element of arr
      4. pushElement(arr)  should push an element to arr, and then return arr
      5. popElement(arr)   should pop an element from arr, and then return arr
  When you have finish*/

  // function getLength(arr) {
  //   return arr.length;
  // }
  // function getFirst(arr) {
  //   return arr[0];
  // }
  // function getLast(arr) {
  //   return arr[arr.length - 1];
  // }
  // function pushElement(arr) {
  //   const el = 1;
  //   arr.push(el);
  //   return arr;
  // }
  // function popElement(arr) {
  //   arr.pop();
  //   return arr;
  // }

  const getLength = (arr) => arr.length;

  const getFirst = (arr) => arr[0];

  const getLast = (arr) => arr[arr.length - 1];

  const pushElement = (arr) => {
    const el = 1;
    arr.push(el);
    return arr;
  };
  const popElement = (arr) => {
    arr.pop();
    return arr;
  };
}
{
  // function calculate(string) {
  //   const numbers = string.replace(/[a-z]/gi, "").trim().split(" ");
  //   return string.includes("loses")
  //     ? +numbers[0] - +numbers[numbers.length - 1]
  //     : +numbers[0] + +numbers[numbers.length - 1];
  // }

  // function calculate(string) {
  //   const numbers = string
  //     .replace(/[a-z]/gi, "")
  //     .trim()
  //     .split(" ")
  //     .map((e) => Number(e));

  //   return string.includes("loses")
  //     ? numbers.reduce((res, e) => res - e)
  //     : numbers.reduce((res, e) => res + e);
  // }

  const calculate = (string) =>
    /loses/.test(string)
      ? string.match(/\d+/g).reduce((res, e) => res - +e)
      : string.match(/\d+/g).reduce((res, e) => +res + +e);

  // const calculate = (string) =>
  //   eval(
  //     string.replace("gains", "+").replace("loses", "-").replace(/[a-z]/gi, "")
  //   );

  // console.log(calculate("Panda has 48 apples and loses 4"));
}

{
  /** 7 kyu
Name Array Capping
751691% of 6864,052 of 8,099ogryzek1 Issue Reported
 JavaScript
Node v18.x
VIM
EMACS
Instructions
Output
Create a function that accepts an array of names, and returns an array of each name with its first letter capitalized and the remainder in lowercase.

Examples
['jo', 'nelson', 'jurie'] -->  ['Jo', 'Nelson', 'Jurie']
['KARLY', 'DANIEL', 'KELSEY'] --> ['Karly', 'Daniel', 'Kelsey']   */

  // function capMe(names) {
  //   return names.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase());
  // }

  // const capMe = (names) =>
  //   names.map((e) => e[0].toUpperCase() + e.slice(1).toLowerCase());

  // const capMe = (names) =>
  //   names.map((e) => e.toLowerCase().replace(/\w/, (w) => w.toUpperCase()));

  const capMe = (names) =>
    names.map((e) => e.toLowerCase().replace(/./, (w) => w.toUpperCase()));

  // console.log(capMe(["RALPH", "GEORGIA", "CHRISTINA", "po"]));
}

{
  /** Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:

{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:

Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) sho */

  // const countGrade = (scores) => {
  //   const keys = ["S", "A", "B", "C", "D", "X"];
  //   let obj = {};
  //   keys.map((e) => {
  //     if (e === "S")
  //       obj = { ...obj, S: scores.filter((sc) => sc === 100).length };
  //     if (e === "A")
  //       obj = {
  //         ...obj,
  //         A: scores.filter((sc) => sc >= 90 && sc < 100).length,
  //       };
  //     if (e === "B")
  //       obj = { ...obj, B: scores.filter((sc) => sc >= 80 && sc < 90).length };
  //     if (e === "C")
  //       obj = { ...obj, C: scores.filter((sc) => sc >= 60 && sc < 80).length };
  //     if (e === "D")
  //       obj = { ...obj, D: scores.filter((sc) => sc >= 0 && sc < 60).length };
  //     if (e === "X")
  //       obj = { ...obj, X: scores.filter((sc) => sc === -1).length };
  //   });

  //   return obj;
  // };

  const countGrade = (scores) => ({
    S: scores.filter((sc) => sc === 100).length,
    A: scores.filter((sc) => sc >= 90 && sc < 100).length,
    B: scores.filter((sc) => sc >= 80 && sc < 90).length,
    C: scores.filter((sc) => sc >= 60 && sc < 80).length,
    D: scores.filter((sc) => sc >= 0 && sc < 60).length,
    X: scores.filter((sc) => sc === -1).length,
  });

  // console.log(countGrade([50, 60, 70, 80, 90, 100]));
}

{
  /** Improving Math.round(x)
  Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:
  But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places?
   While some languages (such as PHP) has a round() function that supports rounding to a specified
    number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. 
    as specified)  ?>), Javascript does not!
  
  Task
  Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places. */

  // Math.roundTo = function (number, precision) {
  //   return Number(number.toFixed(precision));
  // };

  Math.roundTo = (number, precision) => Number(number.toFixed(precision));

  // console.log(Math.roundTo(3.1415926535, 4));

  // function sumSquares(array) {
  //   return array.reduce((sum, e) => sum + e * e, 0);
  // }

  const sumSquares = (array) => array.reduce((sum, e) => sum + e * e, 0);

  // console.log(sumSquares([11, 13, 15, 18, 2]));

  /** 7 kyu  Sum - Square Even, Root Odd
   * Complete the function that takes a list of numbers (nums), as the only argument
   *  to the function. Take each number in the list and square it if it is even,
   *  or square root the number if it is odd. Take this new list and return the sum 
   * of it, rounded to two decimal places.

The list will never be empty and will only contain values that are greater
 than or equal to zero.   */

  // const sumSquareEvenRootOdd = (ns) => {
  //   let sum = 0;
  //   for (let i = 0; i < ns.length; i++) {
  //     const element = ns[i];
  //     if (element % 2) {
  //       sum += element ** (1 / 2);
  //       continue;
  //     }
  //     sum += element ** 2;
  //   }
  //   return Math.round(sum * 100) / 100;
  // };

  // const sumSquareEvenRootOdd = (ns) => {
  //   return (
  //     Math.round(
  //       ns.reduce(
  //         (sum, element) =>
  //           element % 2 ? sum + element ** (1 / 2) : sum + element ** 2,
  //         0
  //       ) * 100
  //     ) / 100
  //   );
  // };

  // const sumSquareEvenRootOdd = (ns) =>
  //   Math.round(
  //     ns.reduce(
  //       (sum, element) =>
  //         element % 2 ? sum + element ** (1 / 2) : sum + element ** 2,
  //       0
  //     ) * 100
  //   ) / 100;

  const sumSquareEvenRootOdd = (ns) =>
    +ns
      .reduce(
        (sum, element) =>
          element % 2 ? sum + element ** (1 / 2) : sum + element ** 2,
        0
      )
      .toFixed(2);

  // console.log(sumSquareEvenRootOdd([4, 5, 7, 8, 1, 2, 3, 0]));

  const remove = (string) => string.replace(/!+(\s*)(\w)/g, "$1$2");
  // console.log(remove("Hi! Hi!"));
  // console.log(remove("!Hi!"));
}

{
  /** Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

  If arr is not an array, function should return:
  
  "It's a fake array"
  If arr contains elements 5 and 13, function should return:
  
  "It's a black array"
  If arr contains neither 5 nor 13, function should return:
  
  "It's a white array"
  Examples
  blackAndWhite(5,13) should return "It's a fake array"
  blackAndWhite([5,13]) should return "It's a black array"
  blackAndWhite([5,12]) should return " */

  // function blackAndWhite(arr) {
  //   if (!Array.isArray(arr)) {
  //     return "It's a fake array";
  //   }
  //   if (arr.includes(5) && arr.includes(13)) {
  //     return "It's a black array";
  //   }
  //   return "It's a white array";
  // }

  // function blackAndWhite(arr) {
  //   return !Array.isArray(arr)
  //     ? "It's a fake array"
  //     : arr.includes(5) && arr.includes(13)
  //     ? "It's a black array"
  //     : "It's a white array";
  // }

  // const blackAndWhite = (arr) =>
  //   !Array.isArray(arr)
  //     ? "It's a fake array"
  //     : arr.includes(5) && arr.includes(13)
  //     ? "It's a black array"
  //     : "It's a white array";

  // const blackAndWhite = (arr) =>
  //   `It's a ${
  //     !Array.isArray(arr)
  //       ? `fake`
  //       : arr.includes(5) && arr.includes(13)
  //       ? `black`
  //       : `white`
  //   } array`;

  const blackAndWhite = (arr) =>
    "It's a " +
    (!Array.isArray(arr)
      ? "fake"
      : arr.includes(5) && arr.includes(13)
      ? `black`
      : `white`) +
    " array";

  // console.log(blackAndWhite([5, 13]));
}
{
  /**  8 kyu  Simple Comparison?
Write a function that will compare two values, one will be a number and one will be
 a string. Return true if they are the same character (regardless of their different
  data types) and return false if they are not.

To make this challange harder and to promp the challenger to read up about coercion
 I have disabled some of the built in methods including .toString(), .join(), .split(),
  parseInt and .Number().*/

  // function add(a, b) {
  //   return +a === +b;
  // }

  // const add = (a, b) => a == b;

  const add = (a, b) => +a === +b;

  /**  7 kyu  Can Santa save Christmas?
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents 
on his own.
But he has only 24 hours left. Can he do it?

 Task:
You will get an array as input with time durations as string in the following format:
 HH:MM:SS. Each duration represents the time taken by Santa to deliver a present.
  Determine whether he can do it in 24 hours or not. In case the time required 
  to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) . */

  // function determineTime(durations) {
  //   return (
  //     durations
  //       .map((e) => e.split(":").reverse())
  //       .reduce(
  //         (total, el) => total + (+el[0] + el[1] * 60 + el[2] * 3600),
  //         0
  //       ) /
  //       24 /
  //       3600 <=
  //     1
  //   );
  // }

  // function determineTime(durations) {
  //   return (
  //     durations
  //       .map((e) => e.split(":"))
  //       .reduce(
  //         (total, el) => total + (el[0] * 3600 + el[1] * 60 + +el[2]),
  //         0
  //       ) /
  //       24 /
  //       3600 <=
  //     1
  //   );
  // }

  // const determineTime = (durations) =>
  //   durations
  //     .map((e) => e.split(":"))
  //     .reduce((total, el) => total + (el[0] * 3600 + el[1] * 60 + +el[2]), 0) /
  //     24 /
  //     3600 <=
  //   1;

  const determineTime = (durations) =>
    durations
      .map((e) => e.split(":"))
      .reduce((total, el) => total + (el[0] * 3600 + el[1] * 60 + +el[2]), 0) <=
    24 * 3600;

  // console.log(determineTime(["04:30:00", "02:00:00", "01:30:00", "16:00:00"]));
}

{
  /**   You get a list of integers, and you have to write a function mirror that returns the "mirror" (or symmetric) version of this list: i.e. the middle element is the greatest, then the next greatest on both sides, then the next greatest, and so on...
  
  The list will always consist of integers in range -1000..1000 and will vary in size between 0 and 10000. Your function should not mutate the input array, and this will be tested (where applicable). Notice that the returned list will always be of odd size, since there will always be a definitive middle element.
  Examples
  
  []  -->  []
  [1]  -->  [1]
  [2, 1]  -->  [1, 2, 1]
  [1, 3, 2]  -->  [1, 2, 3, 2, 1]
  [-8, 42, 18, 0, -16]  -->  [-16, -8, 0, 18, 42, 18, 0, -8, -16]
  [-3, 15, 8, -1, 7, -1] --> [-3, -1, -1, 7, 8, 15, 8, 7, -1, -1, -3]
  [-5, 10, 8, 10, 2, -3, 10] --> [-5, -3, 2, 8, 10, 10, 10, 10, 10, 8, 2, -3, -5]   */

  /** Test failed: Expected values to be loosely deep-equal: */

  function mirror(data) {
    const length = data.length;

    if (!length) return [];

    let max = Math.max(...data);
    let arr = [...data];
    let newArr = [];
    for (let index = 0; index < length; index++) {
      max = Math.max(...arr);
      newArr = [max, ...newArr, max];
      arr = arr.filter((e) => e - max);
    }
    newArr.splice(length - 1, 1);
    return newArr;
  }
  // console.log(mirror([-8, 42, 18, 0, -16]));
}

{
  /**  
  8 kyu   isReallyNaN
  I've hit a few bugs in my Java/Type/Coffee-script code recently, and I've traced the problem back to the global isNaN function I was using. I had expected it to be more discerning, but it's returning true for undefined right now.
  
  Write a function isReallyNaN that returns true only if passed in an argument that evalutes to NaN, and returns false otherwise.
  
  Any solution is acceptable!   */

  // const isReallyNaN = (val) => {
  //   return Number.isNaN(val);
  // };

  // const isReallyNaN = (val) => Number.isNaN(val);

  const isReallyNaN = Number.isNaN;

  // const isReallyNaN = (val) => val !== val;

  // console.log(isReallyNaN(undefined));
}
{
  /** 
7 kyu
Geometric Progression Sequence
In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.

Result should be separated by comma and space.
Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162'    */

  // function geometricSequenceElements(a, r, n) {
  //   const res = [a];

  //   for (let index = 0; index < n - 1; index++) {
  //     res.push((a *= r));
  //   }

  //   return res.join(", ");
  // }

  // function geometricSequenceElements(a, r, n) {
  //   return [
  //     a,
  //     ...Array(n - 1)
  //       .fill(a)
  //       .map((e, i, arr) => (arr[0] *= r)),
  //   ].join(", ");
  // }

  // const geometricSequenceElements = (a, r, n) =>
  //   [
  //     a,
  //     ...Array(n - 1)
  //       .fill(a)
  //       .map((e, i, arr) => (arr[0] *= r)),
  //   ].join(", ");

  const geometricSequenceElements = (a, r, n) =>
    Array.from({ length: n }, (e = a, i) => e * r ** i).join(", ");

  // console.log(geometricSequenceElements(2, 3, 5));
}

{
  // function pendulum(values) {
  //   const arr = [];
  //   values
  //     .sort((a, b) => a - b)
  //     .map((e, i, ar) => (!(i % 2) ? arr.unshift(e) : arr.push(e)));

  //   return arr;
  // }

  // function pendulum(values, arr = []) {
  //   values
  //     .sort((a, b) => a - b)
  //     .map((e, i, ar) => (!(i % 2) ? arr.unshift(e) : arr.push(e)));

  //   return arr;
  // }

  const pendulum = (values) =>
    values
      .sort((a, b) => a - b)
      .reduce(
        (arr, e) => (arr.length % 2 ? [...arr, e] : [e, ...arr]),
        []
      ); /** Execution Timed Out (12000 ms) */

  // console.log(pendulum([-9, -2, 8, -10, -6]));
}

{
  /**  
7 kyu
99 Problems, #1: last in list
Write a function last that accepts a list and returns the last element in the list.

If the list is empty:

In languages that have a built-in option or result type (like OCaml or Haskell), return an empty option

In languages that do not have an empty option, just return null
 */
  // const last = (xs) => (xs.length ? [...xs].slice(-1)[0] : null);

  // const last = (xs) => (xs.length ? xs[xs.length - 1] : null);

  // const last = (xs) => (xs.length ? xs.pop() : null);

  const last = (xs) => [null, ...xs].pop();

  // console.log(last([3, 8, 16, 47, 30, 30, 46]));
}

{
  /**  
8 kyu
Mr. Freeze
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it.
 */
  const MrFreeze = {};
  Object.freeze(MrFreeze);
}

{
  /** 7 kyu
Making Copies
 Write a function that takes a list (in Python) or array (in other languages) of numbers, and makes a copy of it.

Note that you may have troubles if you do not return an actual copy, item by item, just a pointer or an alias for an existing list or array.

If not a list or array is given as a parameter in interpreted languages, the function should raise an error.

Examples:

t = [1, 2, 3, 4]
tCopy = copyList(t)
t[1] += 5
t = [1, 7, 3, 4]
tCopy = [1, 2, 3, 4]
 */

  // function copyList(l) {
  //   return [...l];
  // }

  // const copyList = (l) => [...l];

  // const copyList = (l) => l.slice();

  const copyList = (l) => JSON.parse(JSON.stringify(l));
}

{
  /**  
7 kyu
Number to digit tiers
Create a function that takes a number and returns an array of strings containing the number cut off at each digit.
Examples

    420 should return ["4", "42", "420"]
    2017 should return ["2", "20", "201", "2017"]
    2010 should return ["2", "20", "201", "2010"]
    4020 should return ["4", "40", "402", "4020"]
    80200 should return ["8", "80", "802", "8020", "80200"]

PS: The input is guaranteed to be an integer in the range [0, 1000000]
 */
  // function createArrayOfTiers(num) {
  //   return [...(num + "")].map((e, i) => (num + "").slice(0, i + 1));
  // }

  // const createArrayOfTiers = (num) => [...(num + "")].map((e, i) => (num + "").slice(0, i + 1));

  // const createArrayOfTiers = (num, s = "") => [...(num + s)].map((e) => (s += e));

  const createArrayOfTiers = (num) =>
    Array((num + "").split(""))[0].map((e, i) => (num + "").slice(0, i + 1));

  // console.log(createArrayOfTiers(768));
}

{
  /**  7 kyu    Unpacking Arguments
 
You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

eg:

spread(someFunction, [1, true, "Foo", "bar"] ) 
// is the same as...
someFunction(1, true, "Foo", "bar")    */
  // function spread(func, args) {
  //   return func(...args);
  // }

  const spread = (func, args) => func(...args);
}

{
  /**  8 kyu  Training JS #21: Methods of String object--trim() and the string template
This is the last lesson about the string object, we will learn the two knowledge used to format the string.

The first is a simple method: trim(). Usage is very simple:

stringObject.trim()

Its role is very simple too: remove the whitespace at the edge of the string. example:

var str="             abc                ";
console.log(str.trim());
str="\n\n\n\nabc\t\t\t"
console.log(str.trim());
//output:
abc
abc

Various non visible characters such as space tab are called whitespace. more detailed information please refer to:whitespace

trim() only remove whitespace at edge of string, whitespace in the middle of the string will not be removed.

var str="  a b c  ";
console.log(str.trim());

//output:
a b c

Next we will learn a new member of the ES6: string template, We look at the following code:

var s1="My name is John.";
var s2='My name is John.';
var s3=`My name is John.`;

Are their values equal? Yes, they are equal. Do you see the difference in s2 and s3? Bingo! single quotes ' and backtick ` are different. Of course, this is not the biggest difference between them. Using double quotes " or single quotes ', we get a fixed string value. Use the backtick `, we are defining a string template.

We can use ${variable} insert a variable into string template. like this:

var a=1,b=2;
console.log(`${a} + ${b} = ${a+b}`);

//output:
1 + 2 = 3

Or we can write this:

function plus(a,b){
  console.log(`${a} + ${b} = ${a+b}`);
}
plus(1,2);
plus(3,4);

//output:
1 + 2 = 3
3 + 4 = 7

Isn't it interesting? There are more interesting things to happen. When the string template appears in the back of a function, It will be used as a parameter. Look at the following example:

function repeatIt(s){
  console.log(`${s} ${s} ${s}`);
}
repeatIt `a`;
repeatIt `ab`;

//output:
a a a
ab ab ab

Ok, lesson is over. let's do some task.
Task

Coding in function fiveLine, function accept 1 parameter:s. s is a string.

Please return a string of 5 lines(newline symbol is \n). The first line has one s; Second line have two s; and so on..Fifth line have five s;

Note1: The two sides of the parameter s may contain some whitespace, please clear them before using s.

Note2: Using a string template can make your job easier.

Example:

fiveLine("  a") should return "a\naa\naaa\naaaa\naaaaa"
a
aa
aaa
aaaa
aaaaa       <---The effect when you console.log it
fiveLine("  xy ") 
should return "xy\nxyxy\nxyxyxy\nxyxyxyxy\nxyxyxyxyxy"
xy
xyxy
xyxyxy
xyxyxyxy
xyxyxyxyxy  <---The effect when you console.log it
 */

  // function fiveLine(s) {
  //   return `${s.trim().repeat(1)}\n${s.trim().repeat(2)}\n${s
  //     .trim()
  //     .repeat(3)}\n${s.trim().repeat(4)}\n${s.trim().repeat(5)}`;
  // }

  // function fiveLine(s) {
  //   s = s.trim();
  //   return `${s}\n${s.repeat(2)}\n${s.repeat(3)}\n${s.repeat(4)}\n${s.repeat(
  //     5
  //   )}`;
  // }

  // function fiveLine(s) {
  //   s = s.trim();
  //   return [1, 1, 1, 1, 1].map((e, i) => s.repeat(i + 1)).join("\n");
  // }

  // function fiveLine(s) {
  //   return [1, 1, 1, 1, 1].map((e, i) => s.trim().repeat(i + 1)).join("\n");
  // }

  // const fiveLine = (s) =>
  //   [1, 1, 1, 1, 1].map((e, i) => s.trim().repeat(i + 1)).join("\n");

  const fiveLine = (s) => {
    s = s.trim();
    let str = s;

    return [s, (str += s), (str += s), (str += s), (str += s)].join("\n");
  };

  // console.log(fiveLine("   xy "));
}

{
  /**  
7 kyu
Reverser
Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

// Please do not use
const forbidden = "
                  '
                  `
                  string
                  fixed
                  precision
                  .keys       */

  // function reverse(n) {
  //   const arr = [];

  //   for (let i = 0; n > 0; i++) {
  //     const element = n - (n % 10);
  //     arr.push(n % 10);
  //     if (element) {
  //       n = element / 10;
  //       console.log(element, n);
  //     } else {
  //       return arr.reverse().reduce((res, e, i, ar) => res + e * 10 ** i, 0);
  //     }
  //   }
  // }

  // function reverse(n) {
  //   let res = 0;
  //   while (n) {
  //     res *= 10;
  //     res += n % 10;
  //     n = Math.trunc(n / 10);
  //   }
  //   return res;
  // }

  // function reverse(n) {
  //   let res = 0;
  //   while (n) {
  //     res *= 10;
  //     res += n % 10;
  //     n = (n / 10) ^ 0;
  //   }
  //   return res;
  // }

  const reverse = (n, res = 0) => {
    while (n) {
      res = res * 10 + (n % 10);
      n = Math.floor(n / 10);
    }
    return res;
  };

  // console.log(reverse(1234));
}
{
  /**  7 kyu    Scrabble Score
Write a program that, given a word, computes the scrabble score for that word.
Letter Values

You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.
Examples

"cabbage" --> 14

"cabbage" should be scored as worth 14 points:

    3 points for C
    1 point for A, twice
    3 points for B, twice
    2 points for G
    1 point for E

And to total:

3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 +
7 kyu
Scrabble Score
711891% of 6532,055 of 4,834noku1 Issue Reported

    JavaScript
    Node v18.x

        VIM
        EMACS

Instructions
Output
Past Solutions

Write a program that, given a word, computes the scrabble score for that word.
Letter Values

You'll need these:

Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10

There will be a preloaded hashtable $dict with all these values: $dict["E"] == 1.
Examples

"cabbage" --> 14

"cabbage" should be scored as worth 14 points:

    3 points for C
    1 point for A, twice
    3 points for B, twice
    2 points for G
    1 point for E

And to total:

3 + 2*1 + 2*3 + 2 + 1 = 3 + 2 + 6 + 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14

 3 = 14

Empty string should return 0. The string can contain spaces and letters (upper and lower case), you should calculate the scrabble score only of the letters in that string.

""           --> 0
"STREET"    --> 6
"st re et"    --> 6
"ca bba g  e" --> 14 */

  const dict = {
    1: "AEIOULNRST",
    2: "DG",
    3: "BCMP",
    4: "FHVWY",
    5: "K",
    8: "JX",
    10: "QZ",
  };

  // function scrabbleScore(str) {
  //   const s = str.replaceAll(" ", "").toUpperCase();
  //   const keys = Object.keys(dict);

  //   return [...s].reduce(
  //     (sum, e) => sum + +keys.find((key) => dict[key].includes(e)),
  //     0
  //   );
  // }

  // function scrabbleScore(str) {
  //   return [...str.replaceAll(" ", "").toUpperCase()].reduce(
  //     (sum, e) => sum + +Object.keys(dict).find((key) => dict[key].includes(e)),
  //     0
  //   );
  // }

  // const scrabbleScore = (str) =>
  //   [...str.replaceAll(" ", "").toUpperCase()].reduce(
  //     (sum, e) => sum + +Object.keys(dict).find((key) => dict[key].includes(e)),
  //     0
  //   );

  const scrabbleScore = (str) =>
    [...str.replaceAll(" ", "")].reduce(
      (sum, e) =>
        sum +
        +Object.keys(dict).find((key) => dict[key].includes(e.toUpperCase())),
      0
    );

  // console.log(scrabbleScore("cab  bage"));
}

{
  /** 7 kyu  Whose bicycle?
I am the father of three wonderful sons. before the beginning of the school year, I promised them that I would buy a bicycle for someone who would bring the best marks at the end of the school year. it's time to keep promises and I count on you.

You have 3 input objects(school diaries) with school subjects and marks (1-10). For example:

{
  'algebra': 6,
  'history': 8,
  'physics': 9,
  'geography': 2,
  'chemistry': 9
}

Return please :

'I need to buy a bicycle for my first son.' // the sum of the marks is the highest  in the first diary.

'I need to buy a bicycle for my second son.' // the sum of the marks is the highest in the second diary.

'I need to buy a bicycle for my third son.' //  the sum of the marks is the highest in the third diary.

If two or three sons have the same highest marks, you need to choose the younger one. Use the ageTable object which is preloaded:

ageTable = {
            'firstSonAge': 14,
            'secondSonAge': 9,
            'thirdSonAge': 8
           }    */

  // function whoseBicycle(diary1, diary2, diary3) {
  //   const mark = (diary) =>
  //     Object.values(diary).reduce((res, m) => res + m, 0) /
  //     Object.values(diary).length;
  //   const arr = [mark(diary3), mark(diary2), mark(diary1)];
  //   const i = arr.indexOf(Math.max(...arr));

  //   return i
  //     ? i > 1
  //       ? "I need to buy a bicycle for my first son."
  //       : "I need to buy a bicycle for my second son."
  //     : "I need to buy a bicycle for my third son.";
  // }

  // function whoseBicycle(diary1, diary2, diary3) {
  //   const mark = (diary) =>
  //     Object.values(diary).reduce((res, m) => res + m, 0) /
  //     Object.values(diary).length;
  //   const arr = [mark(diary3), mark(diary2), mark(diary1)];
  //   const i = arr.indexOf(Math.max(...arr));

  //   return (
  //     "I need to buy a bicycle for my " +
  //     (i ? (i > 1 ? "first" : "second") : "third") +
  //     " son."
  //   );
  // }

  function whoseBicycle(diary1, diary2, diary3) {
    const mark = (diary) => Object.values(diary).reduce((res, m) => res + m, 0);
    const arr = [mark(diary3), mark(diary2), mark(diary1)];
    const i = arr.indexOf(Math.max(...arr));

    return (
      "I need to buy a bicycle for my " +
      (i ? (i > 1 ? "first" : "second") : "third") +
      " son."
    );
  }

  // console.log(
  //   whoseBicycle(
  //     {
  //       algebra: 10,
  //       history: 7,
  //       physics: 8,
  //       geography: 9,
  //       chemistry: 10,
  //     },
  //     {
  //       algebra: 8,
  //       history: 9,
  //       physics: 8,
  //       geography: 9,
  //       chemistry: 8,
  //     },
  //     {
  //       algebra: 6,
  //       history: 10,
  //       physics: 5,
  //       geography: 9,
  //       chemistry: 10,
  //     }
  //   )
  // );
}

{
  /**  
8 kyu  Is integer safe to use?
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false

 */

  // function SafeInteger(n) {
  //   return Number.isSafeInteger(n);
  // }

  const SafeInteger = (n) => Number.isSafeInteger(n);

  // console.log(SafeInteger(2 ** 55));
}

{
  /**  
8 kyu  Training JS #6: Basic data types--Boolean and conditional statements if..else
  
In javascript, Boolean object only has two value, true or false. Use ===, ==, >, <, >=, <= between two variables(or constant), the result of such an expression is a bool value. The operation between the two bool values can be used with logical operators:&&, ||, ! or some bitwise operators:&, |, ^

Many of the data are likely to be implicitly converted to Boolean values in a given context, most common in conditional statements. In other words, the Boolean value is mainly used for conditional judgment. Look this example:

var arr=[];
...
...
......
if (arr.length) return "arr has elements";
else            return "arr is empty";

You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value. it means, if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

These values are converted to false in the conditional statement:

0, -0, "", null, undefined, NaN

Task

Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

When you have finished the work, click "Run Tests" to see if your code is working properly.

In the end, click "Submit" to submit your code pass this kata. */

  const trueOrFalse = (val) => (!val ? "false" : "true");

  // function trueOrFalse(val) {
  //   if (!val) {
  //     return "false";
  //   } else {
  //     return "true";
  //   }
  // }
}

{
  /**  
8 kyu
Training JS #4: Basic data types--Array
In javascript, Array is one of basic data types. To define an empty array, you can use let arr=new Array() or let arr=[]

Array has an attribute: length, if there is an array named arr, using arr.length to know how many elements are contained in the array.

Each element in the array has an index, use arr[index] to get the value of element.

index always start from 0, so the first element of array is arr[0], the last element of array is arr[arr.length-1].

If we want to add new elements to the array, you can use the array method: push(). It can add an element to the end of the array. Instead, if we want to remove the last element of the array, you can use the array method: pop(). for example:

let arr=[1,2,3];     //define an array arr contains elements 1 2 3
arr.push(4);         //add element 4 to arr
console.log(arr)     //[1,2,3,4]
arr.pop();           //remove the last element from arr
console.log(arr)     //[1,2,3]

Task

I've written five functions. Each function receives a parameter arr which is an array. Complete the functions using arr inside the function bodies.

    1. getLength(arr)    should return length of arr
    2. getFirst(arr)     should return the first element of arr
    3. getLast(arr)      should return the last element of arr
    4. pushElement(arr)  should push an element to arr, and then return arr
    5. popElement(arr)   should pop an element from arr, and then return arr */

  // function generatePairs(n) {
  //   n = Math.trunc(n) + 1;
  //   return Array.from({ length: n ** 2 })
  //     .map((e, i) => [Math.floor(i / n), i % n])
  //     .filter((e) => e[1] >= e[0]);
  // }

  // function generatePairs(n) {
  //   return ((v) =>
  //     Array.from({ length: v ** 2 })
  //       .map((e, i) => [Math.floor(i / v), i % v])
  //       .filter((e) => e[1] >= e[0]))(Math.trunc(n) + 1);
  // }

  // const generatePairs = (n) =>
  //   ((v) =>
  //     Array.from({ length: v ** 2 })
  //       .map((e, i) => [Math.floor(i / v), i % v])
  //       .filter((e) => e[1] >= e[0]))(Math.trunc(n) + 1);

  // const generatePairs = (n) =>
  //   Array.from({ length: (n += 1) ** 2 })
  //     .map((e, i) => [Math.floor(i / n), i % n])
  //     .filter((e) => e[1] >= e[0]);

  const generatePairs = (n) => {
    const pairs = [];

    for (let i = 0; i <= n; i++) {
      for (let j = i; j <= n; j++) {
        pairs.push([i, j]);
      }
    }

    return pairs;
  };

  // console.log(generatePairs(2));
}

{
  /**  
7 kyu  Dropcaps
DropCaps means that the first letter of the starting word of the paragraph should be in caps and the remaining lowercase, just like you see in the newspaper.

But for a change, let"s do that for each and every word of the given String. Your task is to capitalize every word that has length greater than 2, leaving smaller words as they are.

*should work also on Leading and Trailing Spaces and caps.

"apple"            => "Apple"
"apple of banana"  => "Apple of Banana"
"one   space"      => "One   Space"
"   space WALK   " => "   Space Walk   " 

Note: you will be provided atleast one word and should take string as input and return string as output.   */

  // function dropCap(n) {
  //   return n

  //     .split(" ")
  //     .map((e) =>
  //       /\w{3}/.test(e) ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e
  //     )
  //     .join(" ");
  // }

  // const dropCap = (n) => n.split(" ").map((e) => /\w{3}/.test(e) ? e[0].toUpperCase() + e.slice(1).toLowerCase() : e).join(" ");

  // const dropCap = (n) => n.replace(/\w{3,}/g, (e) => e[0].toUpperCase() + e.slice(1).toLowerCase());

  const dropCap = (n) =>
    n.replace(
      /\b(\w)(\w{2,})/g,
      (_, $, $1) => $1.toUpperCase() + $1.toLowerCase()
    );

  // console.log(dropCap("more  u  than    one space between words"));
}

{
  /**  
7 kyu
Arithmetic sequence - sum of n elements
In your class, you have started lessons about "arithmetic progression". Because you are also a programmer, you have decided to write a function.

This function, arithmetic_sequence_sum(a, r, n), should return the sum of the first (n) elements of a sequence in which each element is the sum of the given integer (a), and a number of occurences of the given integer (r), based on the element's position within the sequence.

For example:

arithmetic_sequence_sum(2, 3, 5) should return 40:

1     2        3          4            5
a + (a+r) + (a+r+r) + (a+r+r+r) + (a+r+r+r+r) 
2 + (2+3) + (2+3+3) + (2+3+3+3) + (2+3+3+3+3) = 40           */

  // function ArithmeticSequenceSum(a, r, n) {
  //   return Array(n)
  //     .fill(a)
  //     .reduce((sum, e, i) => sum + a + i * r, 0);
  // }

  // const ArithmeticSequenceSum = (a, r, n) => Array(n).fill(a).reduce((sum, e, i) => sum + a + i * r, 0);

  const ArithmeticSequenceSum = (a, r, n) =>
    Array(n)
      .fill(a)
      .reduce((sum, e, i) => sum + e + i * r, 0);

  // console.log(ArithmeticSequenceSum(2, 2, 10));
}

{
  /**  
8 kyu
Logical calculator
Your Task

Given an array of Boolean values and a logical operator, return a Boolean result based on sequentially applying the operator to the values in the array.
Examples

    booleans = [True, True, False], operator = "AND"

    True AND True -> True
    True AND False -> False
    return False

    booleans = [True, True, False], operator = "OR"

    True OR True -> True
    True OR False -> True
    return True

    booleans = [True, True, False], operator = "XOR"

    True XOR True -> False
    False XOR False -> False
    return False

Input

    an array of Boolean values (1 <= array_length <= 50)
    a string specifying a logical operator: "AND", "OR", "XOR"

Output

A Boolean value (True or False).
 */

  // function logicalCalc(array, op) {
  //   console.log(array, op);
  //   switch (op) {
  //     case "AND":
  //       return array.every((e) => e === true);

  //     case "OR":
  //       return array.some((e) => e === true);

  //     case "XOR":
  //       return Boolean(array.reduce((sum, e) => sum + +e, 0) % 2);
  //   }
  // }

  // function logicalCalc(array, op) {
  //   return op === "AND"
  //     ? array.every((e) => e === true)
  //     : op === "OR"
  //     ? array.some((e) => e === true)
  //     : Boolean(array.reduce((sum, e) => sum + +e, 0) % 2);
  // }

  // const logicalCalc = (array, op) =>
  //   op === "AND"
  //     ? array.every((e) => e === true)
  //     : op === "OR"
  //     ? array.some((e) => e === true)
  //     : Boolean(array.reduce((sum, e) => sum + +e, 0) % 2);

  // const logicalCalc = (array, op) =>
  //   op === "AND"
  //     ? !array.some((e) => e !== true)
  //     : op === "OR"
  //     ? array.some((e) => e === true)
  //     : Boolean(array.reduce((sum, e) => sum + +e, 0) % 2);

  // const logicalCalc = (array, op) =>
  //   op === "AND"
  //     ? array.find((e) => e !== true) ?? true
  //     : op === "OR"
  //     ? array.find((e) => e === true) ?? false
  //     : Boolean(array.reduce((sum, e) => sum + +e, 0) % 2);

  // const logicalCalc = (array, op) =>
  //   op === "AND"
  //     ? array.reduce((res, e) => res && e)
  //     : op === "OR"
  //     ? array.reduce((res, e) => res || e)
  //     : array.reduce((res, e) => Boolean(+res - +e));

  const logicalCalc = (array, op) =>
    op === "AND"
      ? array.reduce((res, e) => res && e)
      : op === "OR"
      ? array.reduce((res, e) => res || e)
      : array.reduce((res, e) => Boolean(res ^ e));

  // console.log(logicalCalc([true, true, true, false, true], "XOR"));
}

{
  /**  XOR operator */
  let a = 44,
    b = 33,
    c;
  // console.log(a, b);
  // console.log(a.toString(2), b.toString(2));

  // c = a;
  // a = b;
  // b = c;

  // a += b;
  // b = a - b;
  // a -= b;

  /**  101100 */
  /**  100001 */
  a = a ^ b; /**    1101 */
  b = a ^ b; /**  101100 */
  a = a ^ b; /**  100001 */

  // a ^= b;
  // b ^= a;
  // a ^= b;

  // console.log(a.toString(2), b.toString(2));
  // console.log(a, b);
}
