// let x = 2;
// console.log(x);
// log();
// TDZ
// const x =8;
// function log() {
//   //   var y=2.6;
//   console.log(x);
// }
// console.log(y);

// global scope
// block scope
// function scope

// const arr1 = [1, 2, 1];

// const result = arr1.flatMap((num) => (num === 2 ? [2, 2] : 1));
// const result2 = arr1.map((num) => (num === 2 ? [2, 2] : 1));
// console.log(result);
// console.log(result2);

// const x = arr1.forEach(function (num) {
//   console.log(num);
// });

// var x1 = 9;
// switch (x1) {
//   case 9:
//     console.log("Bilal");
//     // break;
//   case 9:
//     console.log("Hello");
//   // break;
//   default:
//     console.log("default");
//     break;
// }

// const xy = function () {
//   console.log(arguments);
// };

// const ab = () => {
//   console.log(arguments);
// };

// xy(2);
// ab(2);

// function square(num) {
//   return num ** 2;
// }

// const arr = [1, 2, 3];
// const arr2 = arr.map(square);
// console.log(arr2);


// interview code question


function x(a){
    var c = b = a;
    console.log(c);
}

x(3);

console.log(b);
// console.log(c);
