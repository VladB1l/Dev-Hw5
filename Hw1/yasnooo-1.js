let num = 20;   
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 5 == 0 || i % 3 == 0) {
        sum = sum + i;
    } 
}
console.log(sum);
