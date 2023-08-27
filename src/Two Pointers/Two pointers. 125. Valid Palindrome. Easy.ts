//Given a string s, return true if it is a palindrome, or false otherwise.

const checkIfLetter = (char: string): boolean => {
    if (char.toLowerCase() === char.toUpperCase()) {
        return false
    }

    return true;
}

const isPalindrome = (s: string): boolean => {
    let [left, right] = [0, s.length - 1];
    let leftChar;
    let rightChar;

    while (left < right) {
        leftChar = s[left];
        rightChar = s[right];

        if (!checkIfLetter(leftChar)) {
            left += 1;
        } else if (!checkIfLetter(rightChar)) {
            right -= 1;
        } else {
            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }
            left += 1;
            right -= 1;
        }
    }

    return true;
}
