//---------use recursion finish the below functions-----//
function sum(x, y) {
    if(y == 0)
      return x
    else 
        return(x,y-1)+1
}
// the second multiplying x,y
function multiply(x, y) {
    if(y==0)
      return 0
    else
       return multiply(x,y-1)+x
}
// the third divide numbers
function divide(x, y) {
    if(y==1)
       return x
    else 
       if (y==0)
           return "impossible" 
        else 
            if(x<y)
                return 0
            else
                 return divide(x-y,y)+1
}

// exercise N°1

//giving an input string return a same string but  remove all parentheses 
//and replace it with commas ponctuation(','),the first letter should uppercased 
//and   don't forget the full point in the end of paragraph (".");
// if not a string return false
// ponctuation('it"s morning),let"s hangout)===>'It"s morning,let"s hangout.'
// ponctuation(231456),let's hangout)===>false*
// make both methods  for loops and while loop

function ponctuation(ph) {
    if (typeof(ph)== "string"){
       let result=""
       for (let i = 0; i< ph.length;i++) {
           if(ph[i]==="(" || ph[i]===")")
               result=result+","
            else result=result+ph[i];      
       }
       result = result[0].toUpperCase()+result.slice(1,result.length)+"."
       return result   
    }
    else 
      return false

}
console.log("result ===>",ponctuation('it"s morning),let"s hangout'));
//while loop
function ponctuation(ph) {
    if (typeof(ph)== "string"){
       let result=""
       let i=0
       while(ph[i]<ph.length){
           if(ph[i]==="(" || ph[i]===")")
               result=result+","
            else result=result+ph[i];  
            
        i++
       }
       result = result[0].toUpperCase()+result.slice(1,result.length)+"."
       return result   
    }
    else 
      return false

}
// exercise N°2:
// count down the input number to 1
//// make both methods  for loops and recursion

// countDown(4)==>
// 4
// 3
// 2
// 1
// countDown("hello")==>
// 4
// 3
// 2
// 1
// the numbers range should be from -100 to 100

//if it"s string  count the length and return the countdown
function countDown(number) {
    if(typeof(number)=== "string")
       countDown(number.length)
    else 
       if(number<=100 && number >0){  
          while(number>1){
            console.log(number)
            number--
          }
          if(number===1)
            console.log(number)
        }
        else 
           if(number>-100 && number <= 0) {
                while(number<1){
                     console.log(number)
                     number++
                }
            }
            else
            console.log("out of rang")

}
//recrsion
function countDown(number) {
    if(typeof(number)=== "string")
       countDown(number.length)
    else 
       if(number<=100 && number >0){  
          if(number===1){
              console.log(number)
            }
            console.log(number)
             number--
        }
        else 
           if(number>-100 && number <= 0) {
               console.log(number)
               number++
            }
            else
               console.log("out of rang")

}

// exercise N°3:
// program to find the factorial of a number
// make it with recursion
// factorial(3) returns 3 * factorial(2)
// factorial(2) returns 3 * 2 * factorial(1)
// factorial(1) returns 3 * 2 * 1 * factorial(0)
// factorial(0) returns 3 * 2 * 1 * 1
function factorial(x) {
    if(x==0){
        return 1
    }
    else 
       return x*factorial(x-1)
}

// exercise N°4:

// giving a string str and number n(number of time string should repeat)
// return the repeated  string n times:

//  repeatString("dog",3)==>"dogdogdog"
// repeatString("no",0)==>"give a number bigger than zero"

function repeatString(str, n) {
    if(n===0)
       return "give a number bigger then zero"
     else  
        if(n === 1)
           return str;
       else
           return str+repeatString(str, n-1)
    
}
console.log(repeatString("dog",3));
//Advanced
// exercise N°1
// check the number is prime in giving range between x and y
// Prime numbers between 25 and 50 are:
// 29
// 31
// 37
// 41
// 43
// 47
function prime(n){
    for(var i = 2; i < n; i++)
    if(n%i === 0) return false;
  return nbr > 1;
}
function isPrime(x, y) {
    if(x>y)
        isPrime(y,x);
    else{
        for(let i=x;i<=y;i++)
            if(APrimeNumber(i) )
                console.log(i);
            
    }
}
