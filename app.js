var userInput;
userInput = 1;
userInput = 'sajjad';
var userName;
if (typeof userInput == 'string') {
    userName = userInput;
}
function errorException(message, code) {
    throw { message: message, errorCode: code };
}
var result = errorException('not found item', 500);
console.log(result);
