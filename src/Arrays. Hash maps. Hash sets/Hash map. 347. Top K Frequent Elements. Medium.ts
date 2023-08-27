//Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.

const groupValues = (values: number[], map = new Map()) => {
    for (const value of values) {
        let valuesCount = map.get(value) || 0;
        valuesCount += 1;
        map.set(value, valuesCount);
    }

    return map;
}

const topKFrequent = (nums: number[], k: number): number[] => {
    const numsMap = groupValues(nums);
    const sorted = [...numsMap.entries()].sort((a, b) => b[1] - a[1]).slice(0, k);
    return sorted.map(value => value[0])
}
