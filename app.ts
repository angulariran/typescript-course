let userInput:unknown;
userInput=1;
userInput='sajjad';
let userName:string;

if(typeof userInput=='string'){
    userName=userInput;
}

function errorException(message:string,code:number):never{
    throw {message:message, errorCode:code};
}

 const result=errorException('not found item',500);


console.log(result);