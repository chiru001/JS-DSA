function IsEvenOrOdd(number) {
    let reminder = number % 2;

    if (reminder == 0){
        console.log("Yes, its EVEN Numbers")
    } else {
        console.log("Yes, its a ODD Number")
    }

}

IsEvenOrOdd(1)
IsEvenOrOdd(2)
IsEvenOrOdd(100)
IsEvenOrOdd(101)