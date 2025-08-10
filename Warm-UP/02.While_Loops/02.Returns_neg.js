//write a function that returns the number of negative numbers in an array

let arr = [1,2,5,10,16,19,2]
let count = 0
function ReturnNegativeNumbers(arr){
    for (let i =0; i<=arr.length-1; i++){
        if(arr[i] < 0) {
            count++;
        }
    }
    return count
}

let Result = ReturnNegativeNumbers(arr)
console.log(Result)