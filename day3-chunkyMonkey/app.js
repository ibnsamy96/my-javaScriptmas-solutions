function chunkyMonkey(values, size) {
    //  write code here.
    const bigArr = [] // array that will be returned

    while (values.length > 0) {
        bigArr.push(values.splice(0, size)) // @ size=2, it pushes the first two elements as an array to bigArr and removes them from values array
    }

    return bigArr
}