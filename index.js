
class Polygon {
  constructor(array) {
    this.array = array;
  }
  get countSides() {
    return this.array.length - 1;
  }
  get permiter() {
    let sum = 0;
    for (let i = 0; i < this.array.length; i++) {
      sum += this.array[i]
      console.log(sum)
    }
  }
}
const arr = new Polygon([1, 2, 3])
console.log(arr.permiter)

class triangle extends from {
  // check condition

}


