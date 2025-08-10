/*  
n = 4

****
****
****
****
*/

let n =4 

for (let i =0; i<n; i++) {
    let row = " "
    for(let j=0; j<n; j++) {
        row = row + "*"
    }
    console.log(row)
}
//console.log() always ends its output with a newline character (\n).
//So after printing one row, it automatically moves the cursor to the next line before printing the next row.