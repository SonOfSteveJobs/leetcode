//Given an array of strings strs, group the anagrams together. You can return the answer in any order.

const createAnagramKey = (str: string): string => str.split('').sort().join('');

const groupAnagrams = (strs: string, map = new Map()): string[][] => {
    for (const str of strs) {
        const key = createAnagramKey(str);

        if (map.has(key)) {
            const values = map.get(key);
            values.push(str);
        } else {
            map.set(key, [str])
        }
    }

    return [...map.values()];
}
