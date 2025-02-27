// function checkForSpam(message) {
//    return message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')
// }

const checkForSpam=message=> message.toLowerCase().includes('spam') || message.toLowerCase().includes('spam')

console.log(checkForSpam("Trust me, this is not a sPam message"))
