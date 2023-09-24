

function add(n1:number,n2:number):number{
    return n1+n2;
}

function printValue(num:number):void{
    console.log('result value' + num);
}

function addAndHandle(num1:number,num2:number,cb:(result:number)=>void){
    const result=num1+num2;
    cb(result);
}


let combineNumber:(argument1:number,argument2:number)=>number;
combineNumber =add;
// combineNumber =10;

printValue(combineNumber(10,20));

addAndHandle(10,20,(result:number)=>{
    result=result+1;
    console.log('result'+result);
})


// console.log(printValue(add(10,20)));

