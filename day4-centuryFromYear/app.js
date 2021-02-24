function centuryFromYear(num) {
    //  write code here.
    const yearPercent = num / 100 // 1905 -> 19.05 , 1700 -> 17
    const century = Math.floor(yearPercent) // 19.05 -> 19 , 17 -> 17

    if (century < yearPercent) {
        return century + 1
    } else {
        return century
    }

}