let arr = [20,10,-80,10,10,15,35];
index = FindIndex(arr);

if (index >= 0){
    console.log(`The lowest index: ${index}`);
}else{
    console.log(`There isn't index: ${index}`);
}

function FindIndex(arr) {
    let left_sum;
    let right_sum;

    for (let n = 0; n < arr.length; n++) {
        left_sum = Sum(arr.slice(0, n));
        right_sum = Sum(arr.slice(n + 1));
        if (left_sum === right_sum) {
            return n;
        }
    }
    return -1;

    function Sum(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum = sum + arr[i];
        }
        return sum;
    }
}