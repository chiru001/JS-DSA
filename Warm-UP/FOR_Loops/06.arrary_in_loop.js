let arr = [10,6,8,9,200,3];

console.log(arr[2]) //8 
console.log(arr[10]) // undefined

//let's find the total length of arr

length = arr.length
console.log(length) //6  NOte: remember length starts for 1 but not 0


//now we can write the loop

for(let i =0; i <= arr.length; i++){
    console.log(`arr has ${arr[i]}`)
}

/* 
OUTPUT: arr has 10
arr has 6
arr has 8
arr has 9
arr has 200
arr has 3
arr has undefined

IF YOU SEE HERE ARRAY STARTS FROM 0 AND LEANGTH STARTS FROM 1 SO AT LAST 
WE ARE SEEING UNDEFINED lets do a Dry run

for(let i =0; i <= arr.length; i++){
    console.log(`arr has ${arr[i]}`)
}
DRYRUN:
First time:
    i = 0, 0 <= 6 = True | so print arr[0] = 10  | count:1

Second time:
    i++ = 0 +1 = 1
    i = 1, 1 <= 6 = True | so print arr[1] = 6  | count:2

Third time:
    i++ = 1 +1 = 2
    i = 2, 2 <= 6 = True | so print arr[2] = 8  | count:3

4TH time:
    i++ = 2 +1 = 3
    i = 3, 3 <= 6 = True | so print arr[3] = 9  | count:4

5TH time:
    i++ = 3 +1 = 4
    i = 4, 4 <= 6 = True | so print arr[4] = 200  | count:5

6TH time:
    i++ = 4 +1 = 5
    i = 5, 5 <= 6 = True | so print arr[5] = 3   | count:6

7TH time:
    i++ = 5 +1 = 6
    i = 6, 6 <= 6 = True | so print arr[6] = UNDEFINED   | count:7

8TH time:
    i++ = 6 +1 = 7
    i = 7, 7 <= 6 = FLASE | so LOOPS ENDS HERE!

*/

//So to avoid undefined use length -1 

console.log(arr.length - 1)

for(let i =0; i <= arr.length - 1; i++){
    console.log(`arr has ${arr[i]}`)
}

/*
DRY RUN:
First time:
    i = 0, 0 <= 6-1 
    i = 0, 0 <= 5 = True | so print arr[0] = 10  | count:1

Second time:
    i++ = 0 +1 = 1
    i = 1, 1 <= 6-1 
    i = 1, 1 <= 5 = True | so print arr[1] = 6  | count:2

Third time:
    i++ = 1 +1 = 2
    i = 2, 2 <= 6-1 
    i = 2, 2 <= 5 = True | so print arr[2] = 8  | count:3

4TH time:
    i++ = 2 +1 = 3
    i = 3, 3 <= 6-1
    i = 3, 3 <= 5 = True | so print arr[3] = 9  | count:4

5TH time:
    i++ = 3 +1 = 4
    i = 4, 4 <= 6-1
    i = 4, 4 <= 5 = True | so print arr[4] = 200  | count:5

6TH time:
    i++ = 4 +1 = 5
    i = 5, 5 <= 6-1
    i = 5, 5 <= 5 = True | so print arr[5] = 3   | count:6

7TH time:
    i++ = 5 +1 = 6
    i = 6, 6 <= 6-1
      i = 6, 6 <= 5 = FLASE | so LOOPS ENDS HERE!

*/


