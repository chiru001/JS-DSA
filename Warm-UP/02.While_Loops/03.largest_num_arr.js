//Write a function that returns the largest number in an array

let arr = [5,200,15,20, 100,201]

largest = -Infinity 
function FindLargest(arr){
    for(let i =0; i <= arr.length-1; i++){
        if (arr[i] > largest){
            largest = arr[i]
        }
    }
    return largest
}

let result = FindLargest(arr)
console.log(result)