//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
const nums: number[] = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
const nums2: number[] = [1, 2, 3, 1]
const nums3: number[] = [1, 2, 3, 4]

const containsDuplicate = (nums: number[]): boolean => {
    const set = new Set(nums)

    return nums.length !== Array.from(set).length
}

console.log(containsDuplicate(nums)); //true
console.log(containsDuplicate(nums2)); //true
console.log(containsDuplicate(nums3)); //false