
type CombineDataTypes =number|string;
type ResulType='as-number'|'as-text';

function combine(n1:CombineDataTypes,
                 n2:CombineDataTypes,
                 resultType:ResulType,
                 test:1|100|140){

    let result:string|number;

    if(typeof n1==='number'&&typeof n2==='number')
    result= n1+n2;
    else
        result= n1.toString()+n2.toString();

    if(resultType==='as-number'){
     result = +result;
    }
    if(resultType==='as-text'){
        result=result.toString();
    }

    console.log(result)
}
let num1;
num1=5;
const num2= 1;
let printValue=true;
let resultPref=`result is `
const stVar1='sajjad';
const stVar2='maneshi'
combine(num1,num2,'as-number',1);
combine('10','11','as-number',100);
combine(stVar1,stVar2,'as-text',140);