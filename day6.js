// Day 6 : ARRAY
// ACTIVITY 1 : Array creation and access

// task 1: create an array of number 1 to 5 and log the result
const arr1 = [1,2,3,4,5]
console.log(arr1);

// task2: access the first and the last element of the array

console.log(arr1[0]); //first element
console.log(arr1[arr1.length - 1]); //last element


// ##############################################################################################################################

// ACTIVITY 2: Array methods (basics)

// task3: Use push method to add new number at the end to the array
let arr2 = [1,2,3,4,5]
arr2.push(6)
console.log(arr2);

// task4 : use pop method to remove the last element of the array
arr2.pop()
console.log(arr2);

// task 5 : Use shift method to remove the first element of the array
arr2.shift()
console.log(arr2);

// task 6: use unshift method to add new number in the beginning of an array
arr2.unshift(1)
console.log(arr2);


// ACTIVITY 3: Array method (intermediate)

// task 7: Use the map method to create a new Array where each number is doubled and log the new array

const arr3 = [1,2,3,4,5]
const mapped = arr3.map((x)=> x * 2)
console.log(mapped);

// task 8 : use the filter method to create a new array where only the even numbers get printed.
const filtered = arr3.filter((x)=> x % 2 === 0 )
console.log(filtered);

// task 9 : usr the reduce method to calculate the sum of all the numbers in the array
const reduced = arr3.reduce((a , b)=> a + b , 0)
console.log(reduced);


// #############################################################################################

// ACTIVITY 4: array iteration

// task 10 : use for loop to iterate over an array
const arr4 = ["apple", "mango", "banana","jackfruit", "chicku"]
for (let i=0; i<arr4.length; i++){
    console.log(arr4[i]);
}

console.log(""); //line break

arr4.forEach(element => {
    console.log(element);
});


// ############################################################################################################################

// ACTIVITY 5 : multi dimensional array
// task 12 : create a two dimensional array and console log the entire result. 

const matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(matrix);

// task 13 : access and log the specific element of the array 

// let us log only one section lets say 4 to 6
console.log(matrix[1]);