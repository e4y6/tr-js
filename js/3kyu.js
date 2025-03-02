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

  function getLength(arr) {
    c;
  }
  function getFirst(arr) {
    return arr[0];
  }
  function getLast(arr) {
    return arr[arr.length - 1];
  }
  function pushElement(arr) {
    const el = 1;
    arr.push(el);
    return arr;
  }
  function popElement(arr) {
    arr.pop();
    return arr;
  }
}
