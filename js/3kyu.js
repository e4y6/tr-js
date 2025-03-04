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

  const countGrade = (scores) => {
    const keys = ["S", "A", "B", "C", "D", "X"];
    let obj = {};
    keys.map((e) => {
      if (e === "S")
        obj = { ...obj, S: scores.filter((sc) => sc === 100).length };
      if (e === "A")
        obj = {
          ...obj,
          A: scores.filter((sc) => sc >= 90 && sc < 100).length,
        };
      if (e === "B")
        obj = { ...obj, B: scores.filter((sc) => sc >= 80 && sc < 90).length };
      if (e === "C")
        obj = { ...obj, C: scores.filter((sc) => sc >= 60 && sc < 80).length };
      if (e === "D")
        obj = { ...obj, D: scores.filter((sc) => sc >= 0 && sc < 60).length };
      if (e === "X")
        obj = { ...obj, X: scores.filter((sc) => sc === -1).length };
    });

    return obj;
  };
  console.log(countGrade([50, 60, 70, 80, 90, 100]));
}
