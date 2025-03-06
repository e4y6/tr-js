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
}
