let arr = ["tsar", "rat", "tar", "star", "tars", "cheese", "eesehc", "jaba", "dasdasdsa" , "asdsadsad"];
console.log(groupAnagrams(arr));

function groupAnagrams(arr) {
    let new_arr = [];
    let arrays = {};
    let sortedString;

    for (let i = 0; i < arr.length; i++) {
        sortedString = arr[i].split("").sort().join("");
        if (!(sortedString in arrays)) {
            arrays[sortedString] = [];
            arrays[sortedString].push(arr[i]);
        } else {
            arrays[sortedString].push(arr[i]);
        }
    }
    for (const key in arrays) {
        new_arr.push(arrays[key]);
    }
    return new_arr;
}


// for (let i = 0; i < arr.length; i++) {
//     let string = arr[i];
//     let new_string = '';
//     for (let j = 0; j < string.length; j++) {
//         let k = 0;
//         while (k < string.length && string[j] < new_string[k]) {
//             k++;
//         }
//         new_string = new_string.slice(0, k) + string[j] + new_string.slice(k);
//     }

//     new_arr.push(new_string);
// }