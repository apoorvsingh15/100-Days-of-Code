// Sparce Array Polyfill for myMap

Array.prototype.myMap = function (callback, thisArg) {
  const resultArray = [];
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  for (let i = 0; i < this.length; i++) {
    if (Object.hasOwn(this, i)) {
      resultArray[i] = callback.call(thisArg, this[i], i, this);
    }
  }
  return resultArray;
};

// Example usage:const numbers = [1, 2, 3, 4];
const numbers = [1, , 3, 4];
const doubled = numbers.myMap(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6, 8]
