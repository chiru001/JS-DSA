for(let i =2; i <9; i = i+2 ){
    console.log(`${i}: Hello world`)
}


/* 
DRYRUN:

First time:
    i =2, 2<9 = True | so print hellow world  | count:1
  
Second time:
    now  i = i + 2 = 
         i = 2+2 = 4 ; now i have is 4 
         i = 4, 4<9 = True | so print hellow world | count:2

Third time:
    now  i = i + 2 =
         i = 4 + 2 = 6; now i have is 6
         i = 6, 6<9 = True | so print hellow world | count:3

Fourth time:
    now  i = i + 2 =
         i = 6 + 2 = 8; now i have is 8
         i = 8, 8<9 = True | so print hellow world | count:4

5th time:
    now  i = i + 2 =
         i = 8 + 2 = 10; now i have is 10
         i = 10, 10<9 = Flase | loop ends here
*/