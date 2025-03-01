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

    
  }