function differentSymbolsNaive(str) {

    const uniqueChars = []
    str.split('').forEach(char => {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char)
        }
    })
    return uniqueChars.length

}