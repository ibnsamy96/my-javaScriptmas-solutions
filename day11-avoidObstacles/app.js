function avoidObstacles(nums) {
    //  write code here.
    let index = 1
    while (true) {
        if (!nums.every(number => number % index)) {
            index += 1
        } else {
            return index
        }
    }
}