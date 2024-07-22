// ACTIVITY 1 : Variable declaration

// task 1
var num = 9;
console.log(num);


// task 2
let str = "this is a string";
console.log(str);


// #############################################################################################


// ACTIVITY 2 : constant declaration
// task 3
const male = true;
console.log(male);



// #############################################################################################


// ACTIVITY 3 : data types
// task 4

let num2 = 10;
let str2 = "this is a string"
let boolean = true
let obj1 = {
    name: "Luit dusad",
    age: 24,
    gender: "Male"
}
let arr1 = [1,2,"Luit", true]


// exercise question:

console.log(typeof(num2));
console.log(typeof(str2));
console.log(typeof(boolean));
console.log(typeof(obj1));
console.log(typeof(arr1));

/*  One type of object that is built into JavaScript is the array, and the typeof of an array is "object": typeof [] === `object` // true.

ECMAScript 5 introduced an Array.isArray() method to check for an array, since typeof will not be able to tell arrays from other objects.*/


// by using this method we can check that a declared variable is an array or not
console.log(Array.isArray(arr1)); 

// task 5
let x = 7;
console.log(x);
x=8
console.log(x);

// task 6

const y = 10;
console.log(y);

// y = 11;
// console.log(y);
//  this line give us an error because we cannot change the value of the variable in the which is declared using const , we can only change value which is declared using let or var

// ####################################################################################################################

let strr = "this is a string";
let numm = 8;
let booll = true
let objj = {
    name: "Luit",
    age: 25
}
let arrr = [1,"xyz",true]

console.log(strr , typeof(strr));
console.log(numm , typeof(numm));
console.log(booll , typeof(booll));
console.log(objj , typeof(objj));
console.log(arrr , Array.isArray(arrr));