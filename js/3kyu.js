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
console.log(n.lastName, ",", n.name);
