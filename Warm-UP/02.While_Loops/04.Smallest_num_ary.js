//Write a function that returns the SMALLEST number in an array

let arr = [5,200,15,20, 100,201,-1]

smallest = Infinity 
function FindLargest(arr){
    for(let i =0; i <= arr.length-1; i++){
        if (arr[i] < smallest){
            smallest = arr[i]
        }
    }
    return smallest
}

let result = FindLargest(arr)
console.log(result)