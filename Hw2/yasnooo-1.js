let arr = [1, 5, 6, 3, 4, 2];
let d = 3;

console.log(LargestSum(arr, d));

function LargestSum(arr, d) {
    if (1 > d || d > 31) {
        return "d must be in range '1 <= d <= 31'"
    }
    if (arr.length <= 0) {
        return "n must be in range 'n > 0'"
    }

    let groups = [];
    let amountOfGroup = arr.length / d
    for (let i = 0; i < arr.length; i++) {
        if (groups[i % amountOfGroup] === undefined) {
            groups[i % amountOfGroup] = arr[i];
        } else {
            groups[i % amountOfGroup] += arr[i];
        }
    }

    let max;
    for (let i = 0; i < groups.length; i++) {
        if (max < groups[i] || max === undefined) {
            max = groups[i]
        }
    }
    return max;
}

