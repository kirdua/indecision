const add = (a, b) => {
  return a + b;
};
console.log(add(55, 1));

//this keyword - no longer bound

const user = {
  name: 'Kirby',
  cities: ['San Diego', 'Austin', 'Leander'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  },
};

console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
