// A palindrome is a word, number, or phrase that reads the same forward and backward.

// Example:
// "madam" → same when reversed.

/* 

lOGIC:

Step: 1
FIRSTLY i need to find out last digit (last-digit = n % 10 )
example:
1234 % 10 = 4
1928576267270 % 10 = 0 

Step: 2
Need to remove the last digit NOW : as we seen in count DIGIT
n / 10 
1234 / 10 = 123.4
*/ 
let n = 121;
let original_n = n; // store before modifying
let reverse_number = 0;

function palindrome(n) {
    // If n is a string, handle separately
    if (typeof n === "string") {
        let reversed = n.split('').reverse().join('');
        return reversed.toLowerCase() === n.toLowerCase();
    }

    // Your original number logic
    reverse_number = 0; // reset before use
    while (n > 0) {
        let last_digit = n % 10;
        reverse_number = (10 * reverse_number) + last_digit;
        n = Math.floor(n / 10);
    }
    return reverse_number === original_n;
}

let result = palindrome(n);
console.log(result);

//string 
var isPalindrome = function(s) {
    // Step 1: Remove all non-alphanumeric chars and convert to lowercase
    let cleaned = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

    // Step 2: Reverse and compare
    let reversed = cleaned.split('').reverse().join('');
    
    return cleaned === reversed;
};


console.log(isPalindrome("A man, a plan, a canal: Panama"));



// if (reverse_number == orginal_n){
//     console.log(`Yes its a palindrome`)
// } else {
//     console.log(`No its not palindrome`)
// }

