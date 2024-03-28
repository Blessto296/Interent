console.log("Hello javascript")
console.log(1 + 2)
//const ,var, let
const pi = 3.1415;
//pi=6.28
var x = 1;
var y = 2;
var z = "hello";
var a = [x, y, z];
console.log(a)
var lst = [1, "0", [1, 2], 4, 8, true];
console.log(lst)
// var obj = {
//     name: "mr y",
//     job: "hero",
//     age: "20",
//     address: "singapore"
// }
// console.log(obj)
// var phone =
// {
//     name: "redmi",
//     size: "12gb ram,250 storage",
//     color: ["green", "red", "blue"]
// }
// console.log(phone)
let str1 = "hello";
let str2 = "world";
let str3 = `hello
world`;
console.log(str1)
console.log(str2)
console.log(str3)


let outcome = [[1, 2, 3, 4, 5, 6],
[2, 3, 4, 5, 6, 7],
[3, 4, 5, 6, 7, 8],
[4, 5, 6, 7, 8, 9],
[5, 6, 7, 8, 9, 0],
[6, 7, 8, 9, 0, 1]]
console.log(outcome[1][3])

let d3 = [
    [
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2]
    ],
    [
        [1, 2],
        [1, 2]
    ]
]
let sum = 1 + 1.4; // 2.4
let dif = 1 - 1.4; // -0.4
let mul = 2 * 4; // 8
let div = 4 / 2; // 2
let mod = 5 % 2; // 1
let pow = 5 ** 2; // 25
let ex1 = 2 * (1 - 6 / 2); // -4
console.log(sum, dif)


let isMore = 2 >= 4; // false
let isLess = 5 < 10; // true
let bool1 = isMore || isLess; // true
let bool2 = isMore && isLess; // false
let isEqual1 = 0 == '0';//true type conversion
let isEqual2 = 0 === '0' ;//false no type conversion
let notEqual1 = 0 != '0'; //false
let notEqual2 = 0 !== '0'; //true
console.log(isLess, bool2 = isMore && isLess)


let arr1 = [1, 2];
let arr2 = [3, 4];
let arr3 = arr1 + arr2; // '1, 23, 4'
// ... spread operator
let arr4 = [...arr1, ...arr2];// [1, 2, 3, 4]
console.log(arr1,arr2,arr3)

let obj1 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj1)); // [name, job, salary, address]
let obj2 = {
    name: 'Mr X',
    job: 'Hacker',
    salary: 1000,
    address: 'Bangaluru'
}
console.log(Object.keys(obj2));
let isEq1 = obj1 == obj1; // false
let isEq2 = obj2 == obj2; // false
console.log(isEq1,isEq2)

