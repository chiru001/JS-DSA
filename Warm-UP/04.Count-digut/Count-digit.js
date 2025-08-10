// write a function that returns the count of digits in a number

//logic is we need to divide it by 10 

/* 
EXAMPLE:
c = count
9581581 / 10 = 958158.1 => here we are getting .1 so we use Math.floor c: 1
958158 / 10 =  95815.8 ===> c: 2
95815 / 10 =  9581.5 ===> c: 3
9581 / 10 =  958.1 ===> c: 4
958 / 10 = 95.8  ===> c: 5
95 / 10 = 9.5 ===> c: 6
9 /10 = 0.9 ===> c: 7


*/

function countDigits(n){
    if (n ==0) return 1   // edge case if input is 0
    
    n = Math.abs(n)  //changes my neg- to pos + number
    count =0
    while (n > 0) {
        n = Math.floor(n /10);
        count++
    }
    return count   
}

let num = 9581581;
let result = countDigits(num)
console.log(result)



// console.log(Math.floor(4.7)); // 4  → always down
// console.log(Math.ceil(4.2));  // 5  → always up
// console.log(Math.round(4.5)); // 5  → nearest integer