const getArea = (left, right, height) => {
    const min = Math.min(height[left], height[right]);
    const side = right - left;
    return min * side;
}

const maxArea = (height) => {
    let left = 0;
    let right = height.length - 1;
    let max = 0;

    while (left < right) {
        const area = getArea(left, right, height)
        max = Math.max(max, area);
        if (height[left] < height[right]) {
            left += 1;
        } else {
            right -= 1;
        }
    }

    return max;
}