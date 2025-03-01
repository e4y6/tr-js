{// function checkForSpam(message) {
//    return message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')
// }

const checkForSpam=message=> message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')

// console.log(checkForSpam("Trust me, this is not a sPam message"))


function writeWords(words){
// console.log(words)
}
writeWords('That`s it.')
}
  
{
//   function NameMe(first, last) {
//     this.firstName = first;
//     this.lastName = last;
//     return {name: this.firstName + ' ' + this.lastName};
// }

  // class NameMe {
  //   constructor(first, last) {
  //     this.firstName = first;
  //     this.lastName = last;
  //     this.name = this.firstName + ' ' + this.lastName ;
  //   }
  // }

  function NameMe(first, last) {
    this.firstName = first;
    this.lastName = last;
    this.name = this.firstName + ' ' + this.lastName;
  }

  var n = new NameMe('John', 'Doe');
  n.firstName //Expected: John
  n.lastName //Expected: Doe
  n.name //Expected: John Doe

  // console.log(n.name, ',', n.firstName, ',', n.lastName)
  }

  {
    function calculateTotalPrice (orderedQuantity, pricePerItem) {
      const totalPrice = pricePerItem*orderedQuantity;
    
      return totalPrice;
    };
    // console.log(calculateTotalPrice(4,5))

    function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
    
      return `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFee} credits. Delivery (${deliveryFee} credits) is included in total price.`;
    }

    // console.log(makeOrderMessage(2,3,4))

    function isAdult(age) {
      const passed = age>=18;
    
      return passed;
    }
    // console.log(isAdult(11))

    function isValidPassword(password) {
      const SAVED_PASSWORD = 'Thejqueryismyjamy';
      const isMatch = SAVED_PASSWORD===password;
    
      return isMatch;
    }
    // console.log(isValidPassword('ooo'))

    function checkAge(age) {
      let message;
    
      if (age>=18) { 
        message = 'You are an adult';
      } else {
        message = 'You are a minor';
      }
    
      return message;
    }
    // console.log(checkAge(33))

    function checkStorage(available, ordered) {
      let message;
    if(available>ordered){
      message="Order is processed, our manager will contact you."
    }else{
      message="Not enough goods in stock!"
    }
      return message;
    }

    function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
      let message;
      const totalPrice=pricePerDroid*orderedQuantity;
      if(customerCredits<totalPrice){
        message="Insufficient funds!"
      }else{
        message=`You ordered ${orderedQuantity} droids, you have ${customerCredits-totalPrice} credits left`
      }
      return message;
    }

    // console.log(makeTransaction(4,2,3))

    function checkPassword(password) {
      const ADMIN_PASSWORD = 'Thejqueryismyjamy';
      let message;
    
      if (password===null) { 
        message =  'Canceled by user!';
      } else if (password===ADMIN_PASSWORD) { 
        message = 'Welcome!';
      } else {
        message = 'Access denied, wrong password!';
      }
    
      return message;
    }}

{
    function checkStorage(available, ordered) {
      let message;
      if(!ordered){
        message="There are no products in the order!"
      }
      else if(available<ordered){
        message="Your order is too large, there are not enough items in stock!"
      }else{
        message="The order is accepted, our manager will contact you"
      }
    
      return message;
    }
  }