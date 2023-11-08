let number = 1654998;
console.log(`Number with unsorted digits: ${number}`);
console.log(`Number with sorted digits:   ${SortDigits(number)}`);



function SortDigits(number) {
    let n = String(number)
    if (n < 0 || n % 1 != 0) {
        return console.log(`Only positive integer numbers are  allowed `);
    }
    else {
        let sort_num = '';
        for (let i = 0; i < n.length; i++) {
            let digit = n[i];
            let j = 0;

            while (j < sort_num.length && digit < sort_num[j]) {
                j++;
            }
            sort_num = sort_num.slice(0, j) + digit + sort_num.slice(j);
        }
        return Number(sort_num);
    }
}

