function insertDashes(arr) {
    // Solution 1
    let newTxt = ''
    for (let i = 0; i < arr.length; i++) {
        newTxt += arr[i]
        if (arr[i + 1] && arr[i + 1] != ' ' && arr[i] != ' ') {
            newTxt += '-'
        }
    }
    return newTxt


    // Solution 2
    /*
    let newTxt = txt.split(' ')
    newTxt.forEach((word, index) => {
        newTxt[index] = word.split('').join('-')
    });
    return newTxt.join(' ')
    */
}