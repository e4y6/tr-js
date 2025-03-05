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
  console.log(
    makeStringFromArray(["Mango", "hurries", "to", "the", "train."], " ")
  );

  function slugify(title) {
    return title.toLowerCase().split(" ").join("-");
  }
}
