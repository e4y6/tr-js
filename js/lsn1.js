// 6 значень приводяться до `false`: `0`, `NaN`, `null`, `undefined`,
//  пустий рядок `""` або `''` та саме значення `false`. Всі решта - до `true`.

{
  console.log(1 && 5); // true && true -> 5 
  console.log(5 && 1); // true && true -> 1
  console.log(0 && 2); // false && true -> 0 
  console.log(2 && 0); // true && false -> 0 
  console.log("" && "Mango"); // false && true -> ''
  console.log("Mango" && ""); // true && false -> ''
  console.log("Mango" && "Poly"); // true && true -> 'Poly' 
  console.log("Poly" && "Mango"); // true && true -> 'Mango'
}

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

//   function isNumberInRange(start, end, number) {
//   let isInRange = false;
//   if(start<=number && end>=number) {
//     isInRange=true
//   }

//   return isInRange;
// }

//   function isNumberInRange(start, end, number) {
//   if(start<=number && end>=number) {
//     return true
//   }

//   return false;
// }
//   function isNumberInRange(start, end, number) {
//     return start<=number && end>=number ? true: false;
// }

// function isNumberInRange(start, end, number) {
//   const isInRange = start<=number && end>=number ; 

//   return isInRange;
// }

//   function isNumberInRange(start, end, number) {
//     return start<=number && end>=number ;
// }

  const isNumberInRange=(start, end, number)=>  start<=number && end>=number ;

// console.log(isNumberInRange(10, 30, 17))

function checkIfCanAccessContent(subType) {
  const canAccessContent = subType==='pro' || subType==='vip' ; 
 return canAccessContent
  }

  // console.log(checkIfCanAccessContent('pro'))


  function isNumberNotInRange(start, end, number) {
    const isInRange = number >= start && number <= end;
    const isNotInRange = !isInRange; 
  
    return isNotInRange;
  }

  function getDiscount(totalSpent) {
    const BASE_DISCOUNT = 0;
    const BRONZE_DISCOUNT = 0.02;
    const SILVER_DISCOUNT = 0.05;
    const GOLD_DISCOUNT = 0.1;
    let discount=BASE_DISCOUNT;

    if(totalSpent>=50000){
      discount=GOLD_DISCOUNT
    }else if(totalSpent>=20000){
      discount=SILVER_DISCOUNT
    }else if(totalSpent>=5000){
      discount=BRONZE_DISCOUNT
    }
    return discount;
  }

  function checkStorage(available, ordered) {
    let message = ordered > available ? "Not enough goods in stock!"
          :"The order is accepted, our manager will contact you";
  
    return message;
  }

  function checkPassword(password) {
    const ADMIN_PASSWORD = "jqueryismyjam";
    let message;
    message=password===ADMIN_PASSWORD ? "Access is allowed" : "Access denied, wrong password!"
    return message;
  }

  function getSubscriptionPrice(type) {
    let price;
  
   switch (type) { 
      case 'starter': 
        price = 0; 
        break;
  
      case 'professional': 
        price = 20;
        break;
  
      case 'organization': 
        price = 50;
        break;
    }
  
    return price;
  }
}

{function checkPassword(password) {
  const ADMIN_PASSWORD = "jqueryismyjam";
  let message;

  switch (password) {
    case null:
      message = "Canceled by user!";      
      break;
    case ADMIN_PASSWORD:
      message = "Welcome!";
      break;
    default:
      message = "Access denied, wrong password!";
  }

  return message;
}

function getShippingCost(country) {
  let message;

  switch (country) {
    case 'China':
      message = `Shipping to China will cost 100 credits`
      break;
  
    case 'Chile':
      message = `Shipping to Chile will cost 250 credits`
      break;
  
    case 'Australia':
      message = `Shipping to Australia will cost 170 credits`
      break;
  
    case 'Jamaica':
      message = `Shipping to Jamaica will cost 120 credits`
      break;
  
    default:
      message = "Sorry, there is no delivery to your country"
  }

  return message;
}

}