// find the second largest number in an array

let arr = [1,2,3,4,5,6,7,8,9,9]

let largest = -Infinity
let SecondLargest = -Infinity 
function secondLargest(arr){
    for (let i =0; i <= arr.length-1; i++){
        if (arr[i] > largest ){
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest){
            secondLargest = arr[i]
        }

    }
    return secondLargest

}

let result = secondLargest(arr)
console.log(result)


/*

DRY RUN:
 for (let i =0; i <= arr.length-1; i++){
        if (arr[i] > largest ){
            secondLargest = largest
            largest = arr[i]
        } else if (arr[i] > secondLargest){
            secondLargest = arr[i]
        }

    }

First Time:
        largest = -Infinity
        SecondLargest = -Infinity 
        i =0; 0 <=9-1
        i =0; 0 <=8 ==> True 
            if (1 > -infinite){
                secondLargest = -infinite
                largest = 1
            } else if (arr[i] > secondLargest ){
                secondLargest= 1
            }
        finally largest =1 & secondlargest = -infinity
sECOND Time:
        largest = 1
        SecondLargest = -Infinity 
        i =1; 1 <=9-1
        i =1; 1 <=8 ==> True 
            if (2 > 1){
                secondLargest = 1
                largest = 2
            } else if (arr[i] > secondLargest ){
                secondLargest= 1
            }


*/