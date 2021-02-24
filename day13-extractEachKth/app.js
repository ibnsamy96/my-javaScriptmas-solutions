function extractEachKth(nums, index) {

    // return array of all numbers that have no reminder when multiplied by K
    return nums.filter((number, i) => (i + 1) % index != 0)

}