function sumOfTwo(nums1, nums2, value) {

    return nums1.some(numberOfNums1 => nums2.includes(value - numberOfNums1))

}