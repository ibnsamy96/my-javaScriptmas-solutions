function arrayPreviousLess(nums) {
    return nums.map(
        (currentValue, index) => {
            return (currentValue > nums[index - 1]) ? nums[index - 1] : -1
        }
    )
}