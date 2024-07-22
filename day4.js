// DAY 4 Loops

// ACTIVITY 1 : for loops
// task 1: print number from 1 to 10 using for loop

for (let x =1; x<=10; x++){
    console.log(x);
 }
 
 // task2 : multiplication table of 5
 
 for (let x=5; x<=5; x++){
     for (let j=1; j<=10; j++){
         console.log(x + "*" + j + "=" + x*j);
     }
 }
 
 // ###############################################################################################################################
 
 // ACTIVITY 2: while loop
 // task 3: sum of num 1 to 10 using while loop
 
 
 let num = 0
 let sum = 0
 while(num <= 10){
     sum += num
     num++
 }
 console.log(sum);
 
 // task 4: reverse count from 1 to 10 using for loop
 let n = 10;
 while(n >= 1){
     console.log(n);
     n--
 }
 
 
 // ##################################################################################################################
 
 // ACTIVITY 3 : Do while loop
 // task 5: print number from 1 to 5 using do while
 
 let i = 1
 do{
     console.log(i);
     i++
 }while(i <= 5)
 
 // task 6: calculate the factorial of a number using Do while
 
 // n! = n*(n-1)*(n-2)....1
 
 
 let nth = 6
 let result = 1
 do{
 if ((nth) == 0 || (nth) == 1)
     break ;
 result = result * nth;
 nth = nth - 1
 }
 while(nth)
 console.log(result);
 
 
 // ########################################################################################################################
 
 // ACTIVITY 4 : nested loops
 // task 7 : print a pattern using nested for loops.
 
 // pattern 1
 let x = 5;
 for (let i = 1; i<=x; i++){
     let str = " *";
     console.log(str.repeat(i));
 }
 
 // pattern 2
 for (let i=1; i<=x; i++){
     let str ="* "
     let space = "  "
     console.log(space.repeat((x-i))+str.repeat(i));
 }
 
 // pattern 3
 for (let i=1; i<=x; i++){
     let str ="* "
     let space = "  "
     console.log(space.repeat((x-i))+str.repeat(i)+str.repeat(i));
 }
 
 // pattern 4
 for (let i=x; i>=1; i--){
     let str = " *"
     let space = " "
     console.log(str.repeat(i));
 }
 
 // pattern 5
 for (let i=x; i>=1; i--){
     let str = "* "
     let space = " "
     console.log(space.repeat(x-i)+str.repeat(i));
 }
 
 
 // pattern 6
 for (let i = x; i >= 1; i--) {
     let str = "* ";
     let space  = '  ';
     console.log(space.repeat(x-i)+str.repeat(i));
 }


//  #################################################################################################################################


// ACTIVITY 5: Loop control statement

// task 8: print numbers from 1 to 10 but skip 5 using *continue* statement

for(let i=1; i<=10; i++){
    if(i === 5){
        console.log("has been skipped ");
        continue
    }
    console.log(i);
}

// task 9 : print number from 1 to 10 but break the statement when 7 is found

for(let i=1; i<=10; i++){
    if(i === 7){
        console.log("7 has been found");
        break
    }
    console.log(i);
}