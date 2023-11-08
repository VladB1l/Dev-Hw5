let str = '32 -23 13 0 3124';
highAndLow(str);

function highAndLow(str) {
    let max = '';
    let min = '';
    let num = '';
    for (let i = 0; i < str.length; i++) {
        let digit = str[i];

        if (digit !== ' ') {
            if (str[i + 1] === ' ' || str[i + 1] === undefined) {
                num = num + digit;
                if (max === '' || min === '') {
                    max = num;
                    min = num;
                }
                if (Number(num) >= max) {
                    max = Number(num);
                }
                if (Number(num) <= min) {
                    min = Number(num);
                }
                num = '';
            } else if (str[i + 1] !== ' ') {
                num = num + digit;
            }
        }
    }
    return console.log(`Max and min: ${max}, ${min}`);
}