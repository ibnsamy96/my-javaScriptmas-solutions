function sumOddFibonacciNumbers(num) {

    // at num=0, return '0' as a result
    if (num === 0) {
        return 0
    }

    // num1,num2 -> last two numbers in the fibonacci sequence
    let num1 = 0
    let num2 = 1

    let sumOfLastTwo = 1 // sum of the last two numbers in the fibonacci sequence
    let sum = 1 // final sum of all odd values in the fibonacci sequence

    while (sumOfLastTwo <= num) {
        num1 = num2
        num2 = sumOfLastTwo
        if (sumOfLastTwo % 2 !== 0) {
            sum = sum + sumOfLastTwo
        }
        sumOfLastTwo = num1 + num2
    }

    return sum
}