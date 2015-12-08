//print message
function printMessage(userName, badgeCount, points){
 var message = userName + " has " + badgeCount + " total badge(s) and " +points+ " points in JavaScript"; 
  console.log(message);
}

//print error
function printError(error){
  console.log(error.message);
}

module.exports.printMessage = printMessage;
module.exports.printError = printError;