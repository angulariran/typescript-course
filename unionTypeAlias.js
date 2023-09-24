function combine(n1, n2, resultType) {
    var result;
    if (typeof n1 === 'number' && typeof n2 === 'number')
        result = n1 + n2;
    else
        result = n1.toString() + n2.toString();
    if (resultType === 'as-number') {
        result = +result;
    }
    if (resultType === 'as-text') {
        result = result.toString();
    }
    console.log(result);
}
var num1;
num1 = 5;
var num2 = 7.2;
var printValue = true;
var resultPref = "result is ";
var stVar1 = 'sajjad';
var stVar2 = 'maneshi';
combine(num1, num2, 'as-number');
combine('10', '11', 'as-number');
combine(stVar1, stVar2, 'as-string');
