// function cart(items) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       // Other things to do before completion of the promise
//       console.log("Did something");
//       // The fulfillment value of the promise
//       resolve('Promise Resolved')
//     }, 200);
//   });
// }

// console.log(cart().then(data => console.log(data)))

// Promise.resolve("hello").then((result) => result + " world")
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err));

// Promise.reject(new Error("oops!"))
//   .then((result) => console.log(result))
//   .catch((err) => console.error(err.message));

Promise.resolve("one")
  .then((result) => { return new Promise((resolve) => { setTimeout(() => resolve(result + " two"), 2000); }); })
  .then((result) => { return new Promise((resolve) => { setTimeout(() => resolve(result + " three"), 4000); }); })
  .then((result) => setTimeout(() => {
    console.log(result)
  }, 1000))
  .catch((err) => console.error(err));


Promise.all([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)])
  .then((results) => console.log(results))
  .catch((err) => console.error(err));

[1, 2, 3]

Promise.race([Promise.resolve("first"),
Promise.resolve("second")])
  .then((result) => console.log(result, 'res'))
  .catch((err) => console.error(err, 'err'));
