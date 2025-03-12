{
  function checkAge(age) {
    if (age >= 18) {
      return "You are an adult";
    }

    return "You are a minor";
  }

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";

    if (password === ADMIN_PASSWORD) {
      return "Welcome!";
    }
    return "Access denied, wrong password!";
  }

  function checkStorage(available, ordered) {
    if (ordered === 0) {
      return "Your order is empty!";
    }
    if (ordered > available) {
      return "Your order is too large, not enough goods in stock!";
    }
    return "The order is accepted, our manager will contact you";
  }

  const fruits = ["apple", "plum", "pear", "orange"];
  const [firstElement, secondElement] = fruits;
  let lastElement = fruits[fruits.length - 1];
  // console.log(firstElement);

  fruits[1] = "peach";
  fruits[3] = "banana";

  const fruitsArrayLength = fruits.length;
  const lastElementIndex = fruits.length - 1;
  lastElement = fruits[lastElementIndex];
  // console.log(fruits);

  function getExtremeElements(array) {
    return [array[0], array[array.length - 1]];
  }

  function splitMessage(message, delimiter) {
    return message.split(delimiter);
  }

  function calculateEngravingPrice(message, pricePerWord) {
    return message.split(" ").length * pricePerWord;
  }

  function makeStringFromArray(array, delimiter) {
    return array.join(delimiter);
  }
  // console.log(
  //   makeStringFromArray(["Mango", "hurries", "to", "the", "train."], " ")
  // );

  function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
  }

  const firstTwoEls = fruits.slice(0, 2);
  const nonExtremeEls = fruits.slice(1, -1);
  const lastThreeEls = fruits.slice(-3);

  const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
  const newClients = ["Peach", "Houston"];

  const allClients = oldClients.concat(newClients);

  function makeArray(firstArray, secondArray, maxLength) {
    return firstArray.concat(secondArray).slice(0, maxLength);
  }

  const start = 3;
  const end = 7;
  for (let i = start; i <= end; i += 1) {
    // console.log(i);
  }

  // function calculateTotal(number) {
  //   let total = 0;

  //   for (let i = 1; i <= number; i += 1) {
  //     total += i;
  //   }

  //   return total;
  // }

  // function calculateTotal(number) {
  //   let total = 0;

  //   for (let i = number; i > 0; i -= 1) {
  //     total += i;
  //   }

  //   return total;
  // }

  // function calculateTotal(number, total = number) {
  //   if (number < 2) return total;

  //   return calculateTotal((number -= 1), (total += number));
  // }

  const calculateTotal = (number, total = number) =>
    number < 2 ? total : calculateTotal((number -= 1), (total += number));

  // console.log(calculateTotal(5));

  for (let i = 0; i < fruits.length; i += 1) {
    // console.log(fruits[i]);
  }

  // function calculateTotalPrice(order) {
  //   let total = 0;

  //   for (let i = 0; i < order.length; i += 1) {
  //     total += order[i];
  //   }
  //   return total;
  // }

  // function calculateTotalPrice(order, n = order.length - 1, total = order[n]) {
  //   return n < 1
  //     ? total
  //     : calculateTotalPrice(order, (n -= 1), (total += order[n]));
  // }

  const calculateTotalPrice = (order, n = order.length - 1, total = order[n]) =>
    n < 1 ? total : calculateTotalPrice(order, (n -= 1), (total += order[n]));

  // console.log(calculateTotalPrice([12, 85, 37, 4]));

  function findLongestWord(string) {
    const words = string.split(" ");
    const LengthArray = words.map((e) => e.length);
    return words[LengthArray.indexOf(Math.max(...LengthArray))];
  }
  // console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

  // function createArrayOfNumbers(min, max) {
  //   const numbers = [];
  //   for (let i = min; i <= max; i += 1) {
  //     numbers.push(i);
  //   }
  //   return numbers;
  // }

  function createArrayOfNumbers(min, max, numbers = [min]) {
    min += 1;
    return min > max
      ? numbers
      : createArrayOfNumbers(min, max, [...numbers, min]);
  }
  // console.log(createArrayOfNumbers(2, 15));

  // function filterArray(numbers, value) {
  //   return numbers.filter((e) => e > value);
  // }

  // function filterArray(numbers, value) {
  //   const result = [];
  //   for (let i = 0; i < numbers.length; i += 1) {
  //     if (numbers[i] > value) result.push(numbers[i]);
  //   }
  //   return result;
  // }
  const filterArray = (numbers, value) => numbers.filter((e) => e > value);

  // console.log(filterArray([12, 24, 8, 44, 41, 76], 33));

  // function checkFruit(fruit) {
  //   const fruits = ["apple", "plum", "pear", "orange"];
  //   return fruits.includes(fruit);
  // }

  const checkFruit = (fruit, fruits = ["apple", "plum", "pear", "orange"]) =>
    fruits.includes(fruit);

  // console.log(checkFruit("apple"));

  function getCommonElements(array1, array2) {
    const commonArray = [];
    for (let i = 0; i < array1.length; i++) {
      const element = array1[i];
      if (array2.includes(element)) commonArray.push(element);
    }
    return commonArray;
  }
  // console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));
}

{
  // function calculateTotalPrice(order) {
  //   let total = 0;
  //   for (const element of order) {
  //     total += element;
  //   }
  //   return total;
  // }

  // function calculateTotalPrice(order) {
  //   return order.reduce((total, e) => (total += e), 0);
  // }

  const calculateTotalPrice = (order) =>
    order.reduce((total, e) => (total += e), 0);

  // console.log(calculateTotalPrice([412, 371, 94, 63, 176]));

  function filterArray(numbers, value) {
    const filteredNumbers = [];

    for (const number of numbers) {
      if (number > value) {
        filteredNumbers.push(number);
      }
    }

    return filteredNumbers;
  }
  // console.log(filterArray([1, 2, 3, 4, 5], 3));

  function getEvenNumbers(start, end) {
    const even = [];
    for (let i = start; i <= end; i++) {
      if (i % 2) continue;
      even.push(i);
    }
    return even;
  }
  // console.log(getEvenNumbers(3, 11));

  function getFirstElement(start, end) {
    for (let i = start; i <= end; i += 1) {
      if (!(i % 5)) return i;
    }
  }
  // console.log(getFirstElement(22, 66));

  function findNumber(start, end, divisor) {
    let number;

    for (let i = start; i <= end; i += 1) {
      if (i % divisor === 0) {
        number = i;
        return number;
      }
    }
  }
  // console.log(findNumber(22, 33, 4));

  function includes(array, value) {
    for (let i = 0; i < array.length; i++) {
      const element = array[i];
      if (element === value) return true;
    }
    return false;
  }

  // console.log(includes([3, 5, 6, 9, 7], 7));

  function getPrice(starQuantity) {
    let price;
    switch (starQuantity) {
      case 1:
        price = 20;
        break;
      case 2:
        price = 30;
        break;
      case 3:
        price = 50;
        break;
      case 2:
        price = 60;
        break;
      case 5:
        price = 70;
        break;
      default:
        return "The wrong choice";
    }
    return price;
  }
  // console.log(getPrice(3));

  const randomSalary = (min, max) =>
    Math.round(Math.random() * (max - min) + min);
  // console.log(randomSalary(225, 379));

  for (let i = "1"; i.length < 6; i += 1) {
    // console.log(i);
  }

  {
    let s = "";
    {
      // while (s.length < 5) {
      // console.log((s += 1));
      // }
    }

    do {
      console.log((s += 1));
    } while (s.length < 4);
  }
}

function remove(string) {
  return string.replace(/!+(\s*)(\w)/g, "$1$2");
}
// console.log(remove("!Hi!hi !!Hi!!!!"));

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
