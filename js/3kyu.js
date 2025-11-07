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
