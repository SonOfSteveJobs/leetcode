//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

//Time O(N^2)
const twoSumBadVariant = (nums: number[], target: number): number[] => {
    for (let curr = 0; curr < nums.length; curr++) {
        for (let next = (curr + 1); next < nums.length; next++) {
            if (nums[curr] + nums[next] === target) return [curr, next];
        }
    }

    return [-1, -1];
}

//Hashmap Time O(N)
const twoSum = (nums: number[], target: number, map = new Map()): number[] => {
    for (let index = 0; index < nums.length; index += 1) {
        const num = nums[index];
        const compliment = target - num;
        const sumIndex = map.get(compliment);

        if (map.has(compliment)) {
            return [index, sumIndex];
        }

        map.set(num, index);
    }

    return [-1, -1];
}