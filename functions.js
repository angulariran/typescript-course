"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var rxjs_1 = require("rxjs");
function add(n1, n2) {
    return n1 + n2;
}
function printValue(num) {
    console.log('result value' + num);
}
function addAndHandle(num1, num2, cb) {
    var result = num1 + num2;
    cb(result);
}
var combineNumber;
combineNumber = add;
// combineNumber =10;
printValue(combineNumber(10, 20));
addAndHandle(10, 20, function (result) {
    result = result + 1;
    console.log('result' + result);
});
// console.log(printValue(add(10,20)));
var getPromise = function () {
    return new Promise(function (resolve) {
        console.log('پرامیس اجرا شد');
        setTimeout(function () { return resolve(Date.now()); }, 500);
    });
};
var fromPromise$ = (0, rxjs_1.from)(getPromise());
