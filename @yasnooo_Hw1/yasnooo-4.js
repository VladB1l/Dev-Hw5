number = 1e25; // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41
console.log(`The input number is prime: ${IsPrimeNum(number)}`);


function IsPrimeNum(number) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    if (number < 2) {
        return false;
    }
    return true;
}