function reverseAString(str) {
    //  write code here.
    // return str.split('').reverse().join('')

    let newStr = ''
    for (let i = str.length - 1; i >= 0; i--) {
        newStr = newStr + str[i]
    }

    return newStr

}