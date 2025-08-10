//Write a function that searches for an element in an array and returns the index, if the element is not present then just return -1

let arr = [4,2,0,10,8,30]

function SearchElement(arr, element){
    for (let i =0; i <= arr.length-1; i++){
        if(arr[i] == element){
            return i;
        }
    }
    return -1;
}

let Result = SearchElement(arr, 30)
console.log(Result)