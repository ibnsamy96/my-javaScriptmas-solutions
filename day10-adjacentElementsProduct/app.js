function adjacentElementsProduct(nums) {
    //  write code here.
    let largestProduct;
    for (let i = 0; i <= nums.length - 2; i++) {
        const product = nums[i] * nums[i + 1]
        if (product > largestProduct || !largestProduct) {
            largestProduct = product
        }
    }
    return largestProduct
}