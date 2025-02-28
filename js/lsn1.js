{// function checkForSpam(message) {
//    return message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')
// }

const checkForSpam=message=> message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')

console.log(checkForSpam("Trust me, this is not a sPam message"))


function writeWords(words){
console.log(words)
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

  console.log(n.name, ',', n.firstName, ',', n.lastName)
  }