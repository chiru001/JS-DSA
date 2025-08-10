// create a function which accepts the age and tells whether a person is eligible to voTe or not

function eligibleage(age) {
    if (age < 1) {
        console.log("Invalid");
    } else if (age < 18){
        console.log("you are not eligible to Vote")
    } else {
        console.log("you are eligibla to vote");
    }
}
eligibleage(9)
eligibleage(20)
eligibleage(-2)