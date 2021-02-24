function alphabetSubsequence(str) {
    //  write code here.
    let charLimit = 0
    for (index in str) {
        const charCode = str.charCodeAt(index)
        if (charCode <= charLimit) {
            return false
        }
        charLimit = charCode
    }
    return true
}