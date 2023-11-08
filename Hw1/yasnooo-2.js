let n = 1;
let counter = 0;
let firstTower = [];
let secondTower = [];
let thirdTower = [];

for (let i = 1; i <= n; i++) {
    firstTower.push(i);
}

console.log(`[${firstTower}],  [${secondTower}],  [${thirdTower}]`)
Hanoi(n, firstTower, thirdTower, secondTower);
console.log(`The smallest amount of the moves: ${counter}`)

function Hanoi(n, start, end, through) {
    if (n == 1) {
        end.unshift(start.shift());
        counter++;
        console.log(`[${firstTower}],  [${secondTower}],  [${thirdTower}]`)
        return
    }
    Hanoi(n - 1, start, through, end);
    end.unshift(start.shift());
    counter++;
    console.log(`[${firstTower}],  [${secondTower}],  [${thirdTower}]`)
    Hanoi(n - 1, through, end, start);
}

