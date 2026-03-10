# Java-script-
Some programs of Java script with its approach 
1.Fibonacci Series
 Approach
The Fibonacci series is a sequence where:
First two numbers are usually 0 and 1.
Example (first 7 numbers):
0 1 1 2 3 5 8
Steps:
Take two variables a = 0 and b = 1
Print them
Calculate next number c = a + b
Update values
a = b
b = c
Repeat using loop.
Its code:
let n = 7;
let a = 0, b = 1;

console.log(a);
console.log(b);

for(let i = 2; i < n; i++){
    let c = a + b;
    console.log(c);

    a = b;
    b = c;
}
2.Sum of Digits in a Number
Example
Number = 1234
Sum = 1 + 2 + 3 + 4 = 10
Approach
Take number.
Extract last digit using modulus (%).
Add it to sum.
Remove last digit using division (/10).
Repeat until number becomes 0.

Its code:

let num = 1234;
let sum = 0;

while(num > 0){
    let digit = num % 10;
    sum = sum + digit;
    num = Math.floor(num / 10);
}

console.log("Sum =", sum);
3.Palindrome Number
A number is Palindrome if it reads the same forward and backward.
Example
121 → Palindrome
123 → Not Palindrome
Approach
Store original number.
Reverse the number.
Compare reversed number with original

Its code:
let num = 121;
let original = num;
let reverse = 0;

while(num > 0){
    let digit = num % 10;
    reverse = reverse * 10 + digit;
    num = Math.floor(num / 10);
}

if(original === reverse){
    console.log("Palindrome");
}else{
    console.log("Not Palindrome");
}
4.Triangle Pattern
Example:
*
**
***
****
*****
Approach
Use nested loops
Outer loop → rows
Inner loop → print stars

Its code:
let n = 5;

for(let i = 1; i <= n; i++){
    let row = "";

    for(let j = 1; j <= i; j++){
        row = row + "*";
    }

    console.log(row);
}

5.Factorial
Factorial formula:
Example
5! = 5 × 4 × 3 × 2 × 1 = 120
Approach
Initialize fact = 1
Multiply numbers from 1 to n
Store result in fact

Its code
let n = 5;
let fact = 1;

for(let i = 1; i <= n; i++){
    fact = fact * i;
}

console.log("Factorial =", fact);
