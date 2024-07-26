// DAY 8: ES6+ features 

// ACTIVITY 1: template literals
// task 1: use template literals to create a string that includes variable for a person's name and age , and log the string to the console

let name ="luit"
let age = 25

console.log(`hi my name is ${name} and my age is ${age}`);

// task 2 : create a multi line string using template literals and log it to the console


// #######################################################################################################

// ACTIVITY 2: DESTRUCTURING 
// task 3: use array destructuring to extract the first and second element of the array 

const fruits = ["mango" , "banana" , "litchi", "pineapple"]

let fruits1 = fruits[0]
let fruits2 = fruits[1]

console.log(fruits1);
console.log(fruits2);

// task 4: use object destructuring and console log the title and author
const book1 = {
    title: "Raja Yoga",
    author: "Swami Sivananda",
    year: 1990
}

const {title} = book1
const {author} = book1

console.log(title);
console.log(author);


// #########################################################################################################################

// ACTIVITY 3: spread and rest operator

// task 5 : use spread operator to combine all the arrays and console log it in a single array
let arr1 = [1,2,3]
let arr2 = [4,5,6]
let arr3 = [7,8,9]

let newArr = [...arr1 , ...arr2 , ...arr3]
console.log(newArr);

// task 6: use rest operator to accept any arbitary number of arguments and sum them up . 

function sum(...numbers){
    let total = 0
        for (const num of numbers){
            total += num
        }
        return total
}
console.log(sum(sum(1,2,3,4)))

// #############################################################################################################

// ACTIVITY 4: Default parameters

// task 7: write a function that takes two parameter and returns their product  with the second parameter with the default value of 1 . log the result with and without the second parameters
function multiplier(a , b=1){
    return a * b
}

console.log(multiplier(2,2)); 
console.log(multiplier(2));

// ###################################################################################################################

// ACTIVITY 5: enhanced object literals
// task 8 : use enhanced object literals to create an object with methods with properties and log the object to the console
let breed = "local";
let color = "black";
let gender = "male"
let sound = function(){
    console.log("bhow bhow");
}

let dog = {breed , color , gender , sound}
console.log(dog);
console.log(dog.sound());
