// DAY3 : Control Structures
// ACTIVITY 1 : if-Else Statement

// task 1
let number = -99
if(number === 0){
    console.log("0 is neither negative nor positive");
}else if(number >= 1){
    console.log(`${number} is an Positive Number`);
}else {
    console.log(`${number} is a Negative Number`);
}

// task 2 
let age = 16
if(age >= 18){
    console.log("Whom would you like to cast your vote sir");
}else{
    console.log("Sorry buddy we cannot let you vote");
}


// ################################################################################################################################


// ACTIVITY 2: Nested if-Else statements
// task3

let a = 2;
let b = 3;
let c = 400;

// only by using if-else 
if(a >= b && a >=c){
    console.log(`${a} is the largest number`);
}else if(b >= a && b >=c){
    console.log(`${b} is the largest number`);
}else{
    console.log(`${c} is the largest number`);
}

// nested if-else
if (a >= b){
    if(a >= c){
        console.log(`${a} is the largest number`);
    }
}else{
    if(b >= c){
        console.log(`${b} is the largest number`);
    }else{
        console.log(`${c} is the largest number`);
    }
}

// ##########################################################################################################################

// ACTIVITY 3: Switch case
// task 4
let days = 4
switch (days) {
    case 1:
        console.log("today is monday");
        break;
    case 2:
        console.log("today is tuesday");
        break;
    case 3:
        console.log("today is wednesday");
        break;
    case 4:
        console.log("today is thursday");
        break;
    case 5:
        console.log("today is friday");
        break;
    case 6:
        console.log("today is saturday");
        break;
    case 7:
        console.log("today is sunday");
        break;

    default:
        console.log("number does not match");
        break;
}

// task 5 (i)
let marks = 29

switch (true) { //if we are applying conditions in the cases then the switch expression should be written as "TRUE" because the switch case will look for conditions where conditions are and match with the given input
    case (marks < 30):
        console.log("Grade is 'F'");
        break;
    case (marks < 44):
        console.log("Grade is 'D'");
        break;
    case (marks < 59):
        console.log("Grade is 'C'");
        break;
    case (marks < 79):
        console.log("Grade is 'B'");
        break;
    case (marks > 80):
        console.log("Grade is 'A'");
        break;

    default:
        console.log("please get your marks first to see your grade. ");
}

// task 5 (ii)
let score = 98

switch (true) {
    case (score <= 59 && score >= 0):
        console.log("Grade is 'F'");
        break;
    case (score <= 69 && score >= 60):
        console.log("Grade is 'D'");
        break;
    case (score <= 79 && score >= 70):
        console.log("Grade is 'C'");
        break;
    case (score <= 89 && score >= 80):
        console.log("Grade is 'B'");
        break;
    case (score <= 100 && score >= 90):
        console.log("Grade is 'A'");
        break;

    default:
        console.log("please get your marks first to see your grade. ");
}

// ##############################################################################################################################

// ACTIVITY 4: Conditional (ternary) Operator
// Task 6

let num = 6;
let checker = (num % 2 === 0) ? `${num} is an Even number`: `${num} is an Odd number`
console.log(checker);


// #####################################################################################################################

// ACTIVITY 5: Combining Conditions
// Task 7

let year = 2024


if((0 == year % 4) && (0 != year % 100) || (0 == year % 400)){
    console.log(year + " is a leap year");
}else{
    console.log(year + " is not a leap year");
}



// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }



// checkLeapYear(2024);

// const isLeapYear = year => new Date(year, 1, 29).getMonth() === 1;
// console.log(isLeapYear())




// function checkLeapYear(year) {
//     const leap = new Date(year, 1, 29).getDate() === 29;
//     if (leap) {
//         console.log(year + ' is a leap year');
//     } else {
//         console.log(year + ' is not a leap year');
//     }
// }