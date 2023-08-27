//Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

const productExceptSelf = (nums: number[]): number[] => {
    const result: number[] = [];
    let prefix = 1;
    let postfix = 1;

    for (let i = 0; i < nums.length; i++) {
        result[i] = prefix;
        prefix *= nums[i];
    }
    for (let i = nums.length - 2; i >= 0; i--) {
        postfix *= nums[i + 1];
        result[i] *= postfix;
    }

    return result;
}