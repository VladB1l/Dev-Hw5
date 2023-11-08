class VigenèreCipher {
    key;
    abc;
    matrix;

    constructor(key, abc) {
        this.key = key;
        this.abc = abc
        this.matrix = this.makematrix(abc);
    }

    makematrix(abc) {
        let matrix = [];
        for (let i = 0; i < abc.length; i++) {
            let str = [];
            let j = i;
            while (j < abc.length + i) {
                if (j >= abc.length) {
                    str.push(abc[j - abc.length]);
                }
                else {
                    str.push(abc[j]);
                }
                j++;
            }
            matrix.push(str)
        }
        return matrix;
    }

    makekeystream(str) {
        let keystream = "";
        let length = str.length;
        while (this.key.length < length) {
            keystream += this.key;
            length -= this.key.length;
        }
        keystream = keystream + this.key.slice(0, length);
        return keystream;
    }

    
    encode(str) {
        let keystream = this.makekeystream(str);
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            if (!this.abc.includes(str[i])) {
                newStr += str[i]
            }
            else {
                newStr += this.matrix[this.abc.indexOf(str[i])][this.abc.indexOf(keystream[i])];
            }
        }
        return newStr;
    }

     decode(str) {
        let keystream = this.makekeystream(str);
        let newStr = "";
        for (let i = 0; i < str.length; i++) {
            if (!this.abc.includes(str[i])) {
                newStr += str[i]
            }
            else {
                newStr += this.abc[this.matrix[this.abc.indexOf(keystream[i])].indexOf(str[i])];
            }
        }
        return newStr;
    }
}

let abc = "abcdefghijklmnopqrstuvwxyz";
let key = "password";
let message = new VigenèreCipher(key, abc);

console.log(message.encode("codewars"));
console.log(message.decode('rovwsoiv'));
