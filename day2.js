// ACTIVITY 1 : ARITHMATIC OPERATOR 
// #task 1
function add(a,b){
    return a + b
 }

console.log(add(2,2));


//  another way
let a = 3
let b = 3
let ans = a +b
console.log(ans);


// task2
let j = 3
let k = 2
let l = j - k

console.log(l);


// task 3
let num1 = 2
let num2 = 2
let num_result = num1 * num2

console.log(num_result);


// task 4
let divide_result = num1 % num2
console.log(divide_result);


// ###############################################################################################


// ACTIVITY 2 assignment operator
// task 6
let x = 1
x += 4
console.log(x); //the output will be 5


// task 7
let y = 5
y -= 1
console.log(y); //output will be 4


// ############################################################################################


// ACTIVITY 3 : comparision operator
// task 8
let n1 = 2
let n2 = 3

if(n1 > n2){
    console.log("n1 is greater than n2");
}
//(n1 < n2) 
else{ 
    console.log("n1 is not greater than n2");
}




// task 9
let digit = 1
while(digit <= 10){
    console.log(digit);
    digit++
}

let endNum = 10
while(endNum >= 1){
    console.log(endNum);
    endNum--
}


// task 10
let j1 = 2
let j2 = "2"

if(j1 === j2){
    console.log("hello world! data type has been changed to a number");
    // this line of code won't get printed because j2 is of different data type
    // but if we chnage j2 to a number we can get the output
}else if(j1 == j2){
    console.log("hello world ! j1 and j2 have the same value");
}else{
    console.log("Opps !! something went wrong");
}

// the "==" operator compares values after performing type conversion, while the "===" operator compares values without type conversion.


// ###########################################################################################################

// ACTIVITY 4 : logical operators

// (a condition where a user has loggedIn in his social media account and has uploaded an image)
let userLoggedIn = true
let imageUploaded = true
let userLoggedOut = false 

// task 11 
if(userLoggedIn && imageUploaded){ //both the condition is suppose to be true
    console.log("Hi there your image has been uploaded");
}


// task 12
if (userLoggedIn || userLoggedOut){ //we have enter the condition loop because one of the condition is true
    if(!userLoggedOut){ 
    //task 13 activity done 
        console.log("hey there welcome to your social media account");
    }
}


// ######################################################################################################################


// ACTIVITY 5 : Ternary Operator
// task 14
// The JavaScript Ternary Operator, also known as the Conditional Operator, offers a better approach to expressing conditional (if-else) statements. It operates on three operands: a condition, a value to return if the condition is true, and a value to return if the condition is false.
// SYNTAX : - condition ? trueExpression : falseExpression

let marks = 41
let result = (marks > 39) ? "pass": "fail";
    console.log(result);


let age = 21
let adultAge = (age > 18) ? "is an adult":"not an adult"
console.log(adultAge);


let score = 91
let marksScored = (score < 40) ? "needs to work hard":
                    (score < 60) ? "there is much space for improvement":
                    (score < 80) ? "good": "excellent"; 
                    //output is excellent because the condition is score < 80 , whereas our score is 91 as it does not satisfy the condition because it not below 80 , that is why whatever is the written in the falseStatement side is getting printed . and if the score was 76 then good would be printed because it satisfies our condition and good is placed in the TrueStatement side.
console.log(marksScored);


// #################################################################################################################################


// exercise question:
// 1.
let z1 = 2
let z2 = 6
let z3 = 3

let addResult = z1 + z2
console.log(addResult);

let subsResult = z2 - z1
console.log(subsResult);

let multiplyResult = z1 * z2
console.log(multiplyResult);

let divisionResult = z1 % z2
console.log(divisionResult);

let remainderResult = z3 / z1
console.log(remainderResult);


// 2
// here i have build a simple marking system in which it tells us that the student have passed or failed , if pass then there is a grading syste(1st,2nd,3rd division) based on his or her marks . and also there is a rewards for excellence if he has scored above 75 the then the student will recieve a SCOOTY 
let studentName = "Luit"
let marksObtained = 75
let pass = (marksObtained >= 30)? true : false ;

if(marksObtained < 30){
    console.log(`sorry ${studentName} you have failed & your mark is ${marksObtained}`);
}else if(marksObtained <= 44){
    console.log("you have scored 3rd division");
}else if(marksObtained <= 59){
    console.log("You have scored 2nd division");
}else if(marksObtained >= 60){
    console.log("Congrats !! you have scored 1st division");
}

if(pass && marksObtained >= 75){
    console.log("You are eligible to take the scooty");
}



// 3.
let ternayNum = 1
let ternaryResult = (ternayNum >= 1) ? `${ternayNum} is a positive number` :
                    (ternayNum <= -1) ?  `${ternayNum} is a negative number`: "0 is neither Odd or even"
console.log(ternaryResult);

