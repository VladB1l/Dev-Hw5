class Vector {
  components;
  constructor(components) {
    this.components = components;
  }

  checkLength(b) {
    if (this.components.length !== b.components.length) {
      throw new Error("Vectors with different lengths.");
    }
  }

  add(b) {
    this.checkLength(b);
    let sums = [];

    for (let i = 0; i < this.components.length; i++) {
      sums.push(this.components[i] + b.components[i]);
    }

    return new Vector(sums);
  };

  subtract(b) {
    this.checkLength(b);
    let differences = [];

    for (let i = 0; i < this.components.length; i++) {
      differences.push(this.components[i] - b.components[i]);
    }

    return new Vector(differences);
  };

  dot(b) {
    this.checkLength(b);
    let products = 0;

    for (let i = 0; i < this.components.length; i++) {
      products += this.components[i] * b.components[i];
    }
    return products;
  };

  norm() {
    return Math.sqrt(this.dot(this));
  };

  equals(b) {
    if (this.components.length !== b.components.length) {
      return false;
    }

    for (let i = 0; i < this.components.length; i++) {
      if (this.components[i] !== b.components[i]) {
        return false;
      }
    }

    return true;
  };

  toString(b) {
    return '(' + this.components.join(',') + ')';
  };

};


let a = new Vector([1, 2, 3]);
let b = new Vector([3, 4, 5]);
console.log(a.components)
console.log(`${b.components} \n-------------------------------------`)

console.log(a.add(b));
console.log(a.subtract(b));
console.log(a.dot(b));
console.log(a.norm());
console.log(a.equals(b));
