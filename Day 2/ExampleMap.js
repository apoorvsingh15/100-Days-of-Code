// Example of a map

const apoorvDetails = new Map();

console.log(apoorvDetails); // Map(0) {}


apoorvDetails.set("Apoorv", {
  age: 28,
  weight: 70
});

console.log(apoorvDetails.has("Apoorv")); // true
console.log(apoorvDetails.has('abc')); // false

console.log(apoorvDetails.get("Apoorv")); //  {age: 28,weight: 70}

console.log(apoorvDetails.size); // 1