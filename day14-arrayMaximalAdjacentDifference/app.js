function arrayMaximalAdjacentDifference(nums) {
    //  write code here.
    let maxDifference = Math.abs(nums[0] - nums[1])

    for (let i = 1; i < nums.length - 1; i++) {
        const difference = Math.abs(nums[i] - nums[i + 1])
        if (difference > maxDifference) {
            maxDifference = difference
        }
    }

    return maxDifference
}