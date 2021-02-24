function depositProfit(deposit, rate, threshold) {
    //  write code here.
    let dep = deposit
    let i = 0
    while (dep < threshold) {
        dep = dep + (dep * (rate / 100))
        i += 1
    }
    return i
}