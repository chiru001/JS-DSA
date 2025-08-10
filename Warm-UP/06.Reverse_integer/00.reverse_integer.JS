//Reverse Integre
// 123 -> 321

let n = -12345;
let original_n = n;
n = Math.abs(n);
let reverse_number = 0;

function Reverse_Integer(n) {
    while (n > 0) {
        let last_digit = n % 10;
        reverse_number = (10 * reverse_number) + last_digit;
        n = Math.floor(n / 10);
    } 
    return reverse_number;
}

let Result = Reverse_Integer(n);

// restore sign if original number was negative
if (original_n < 0) {
    Result = -Result;
}

console.log(Result);
