let m = 3025;
// --------------------- For comparing "FirstFunction" is a previous version 

// console.time('FirstFunction');
// console.log(`Amount of n: ${FirstFindNb(m)}`);
// console.timeEnd('FirstFunction');


// function FirstFindNb(m) {
//     if (m < 0) {
//         console.log(`The variable "m" must be positive`)
//     }
//     let sum;
//     for (let n = 0; n < m; n++) {
//         sum = 0;
//         for (let i = 0; n - i > 0; i++) {
//             sum = sum + (n - i) ** 3;
//         }
//         if (sum == m) {
//             return n;
//         }
//     }
//     if (sum != m) {
//         return -1;
//     }
// }


// --------------------- For comparing "SecondFunction" is a new version 

console.time('SecondFunction');
console.log(`Amount of n: ${SecondFindNb(m)}`);
console.timeEnd('SecondFunction');


function SecondFindNb(m) {
    let n = 0;
    if (m < 0) {
        console.log(`The variable "m" must be positive`)
    }
    while (n < m) {
        n++;
        m = m - n ** 3;
    }
    if (m == 0) {
        return n;
    }
    else {
        return -1;
    }
}

