function checkForSpam(message) {
  let result;
  result=message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')
  return result;
}

console.log(checkForSpam("Trust me, this is not a sPam message"))
