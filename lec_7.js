// const add = (a) => {
//   let sum = a;
//   let adder = (x) => {
//     console.log("X :", !x);
//     if (!x) {
//       return sum;
//     }
//     sum += x;
//     return adder;
//   };

//   return adder;
// };

// // add(1,2,3)
// console.log(add(1)(2)(3)(4)(5)());

// function compute(val) {
//   let value = val || 0;
//   const crore = function (num) {
//     this.val += 10000000 * num;
//     return this;
//   };
//   return {
//     val: value,
//     crore: crore,
//     value: function () {
//       return this.val;
//     },
//   };
// }

// console.log(compute().crore(1).value());
// // console.log(compute().crore(1).lacs(2).thousands(45).value())

// Promise methods all, settledall, race, any

const promise1 = Promise.reject(3);
const promise2 = Promise.reject(42);
const promise3 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, "foo");
});

// Promise.all([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// Promise.allSettled([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
// Promise.race([promise1, promise2, promise3]).then((values) => {
//   console.log(values);
// });
Promise.any([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]

