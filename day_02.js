// Write a program that prints numbers from 1 to 100
// For multiples of 3, print "Fizz" instead of the number
// For multiples of 5, print "Buzz"
// For numbers which are multiples of both 3 and 5, print "FizzBuzz"
 for(let i=1; i<=100; i++){
     if(i % 3 === 0 && i % 5 === 0){
         console.log(i + " FizzBuzz");
     }
     else if(i%5==0){
         console.log(i + " Buzz");
     }else if(i%3==0){
         console.log(i + " Fizz");
     }
 }