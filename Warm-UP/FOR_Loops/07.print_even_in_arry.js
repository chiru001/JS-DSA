let arr = [1,3,2,10,200,101]

function EvenFinder(number){
    let remember = number % 2
    if (remember == 0){
        console.log(`${number}: is EVEN!`)
    } else {
        console.log(`${number}: is NOT even!`)
    }
}

for (let i =0; i <= arr.length-1; i++){
    EvenFinder(arr[i])
}

/* 
DRY RUN:

    Step-1:
        In Memory i will store =>  arr = [1,3,2,10,200,101]

    Step-2: AS we not called function it will go into LOOP

    Step-3: 
        First time:
            i =0 ; i <= 6 - 1
            i =0 ; 0 <= 6  => TRUE | EvenFinder(arr[0]) = which is 1
                It has called the fucntion EvenFinder(1)
                //FUCNTION WILL OUTPUT RESULT after that it will come back to loop
        Second time:
            i++ = 0 + 1 =1
            i =1 ; 1 <= 6 - 1
            i =1 ; 1 <= 5 => TRUE | EvenFinder(arr[1]) = which is 3
                it has called the fucntion EvenFinder(3)
                //FUCNTION WILL OUTPUT RESULT after that it will come back to loop

*/