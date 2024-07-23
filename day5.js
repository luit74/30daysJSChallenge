// DAY 5: functions

// ACTIVITY 1: function declaration
// task 1: write a function to check if it is odd or even.

function evenChecker(num){
    if(num % 2 === 0){
        console.log(num + " is an even number");
    }else{
        console.log(num + " is an odd number");
    }
}

evenChecker(11273)

// task 2: calculate the square of a number and return the result

function squareOf(num){
    return result = num * num 
}

console.log(squareOf(2));
// console.log(result);


// ##########################################################################################################

// ACTIVITY 2 : function expression
// task 3: find the maximum of two numbers and  log the result to the console

function findMax(num){
    return Math.max(...num)
}
console.log(findMax([1,2,600,5,6]));


// task 4: write a function to concatinate two strings
function concatStr(str1 , str2){
    return str1 + str2
}
console.log(concatStr("hello" , " world"));



function concatStr2(...str){
    return str.join('')
}
console.log(concatStr2("Hey", " Buddy" , " whats", "up?", " where are you heading "));


// #############################################################################################################

// ACTIVITY 3: Arrow function
// task 5: write an arrow function to calculate the sum of two numbers and return the result

const sum = (n1 , n2) =>{
    return n1 + n2
}

console.log(sum(4,2));


// task 6: an arrow function to check if a string contains a specific character and return a boolean value
// let us assume the specific character be " w " or a word " world "

let checker = (str)=>{
    return str.includes("w" && "world")
}

console.log(checker("hello world"));


// ########################################################################################################################

// ACTIVITY 4: functions parameter and default value
// task 7: write a fuction that takes two parameter and return their product . provide a default value for the second paramter
function prod(n1 , n2=2){
    return n1 * n2
}
console.log(prod(2,3)); //if the n2 value is not provided then the default value will do its work


// task 8: write a function that takes a person's name and age and returns a greeting message
function greetings(name , age){
    return `Hi ${name}, your as is ${age} welcome to the gang`
}

console.log(greetings("Luit" , 24));

// ###################################################################################################################################

// ACTIVITY 5: Higher order function.
// a function which takes another function as an argument and returns a function from it
// Callback function, passed as a parameter in the higher order function
function callbackFunction(){
    console.log('I am  a callback function');
}

// higher order function
function higherOrderFunction(func){
    console.log('I am higher order function')
    func()
}

higherOrderFunction(callbackFunction, 888);


// task 9: write a higher order function that a function and number and calls the functions that many times

function simpleFunc(){
    console.log("hello world");
}

function mainfunc(fn , number){
    for (let i =1; i<= number; i++ ){
        fn()
    }
}

mainfunc(simpleFunc , 5) //as we can see we have used a function as an argument and printed it the number of times we wanted it to print

// task 10: write a higher order function that takes two functions and a value , applies the first function to the value and then applies the second function to the result. 

function squareOf(num){
     return num * num
}

function doubleOf(num) {
    return num + num
}

function mainFunc1(fn1 , fn2 , value){
    const result1 = fn1(value)
    console.log(`square of the value is ${result1}`);
    const result2 = fn2(result1)
    console.log(`doube of the result1 is ${result2}`);
    return result2
}

console.log(mainFunc1(squareOf , doubleOf , 2))
