//Given two strings s and t, return true if t is an anagram of s, and false otherwise.

const reorder = (str: string): string => str.split('').sort().join('');

const isAnagram = (s: string, t: string): boolean => {
    if (s.length !== t.length) {
        return false;
    }

    return reorder(s) === reorder(t);
}