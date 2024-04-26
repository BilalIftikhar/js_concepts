// var a = 2;

// function a1() {
//   var y = 22;
//   var z=2;
//   function a2() {
//     console.log(a);
//     console.log(y);
//     function a3(){
//         console.log(y);
//     }
//     setTimeout(()=>a3(),10000);
//   }

//   a2();
// }
// a1();
// a3();

// function a4(cnt) {
//   let count = cnt;

//   return () => {
//     count++;
//     console.log(count);
//     return count;
//   };
// }

// const counter = a4(5);
// counter();
// counter();
// counter();
// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, i * 1000);
// }
let count = 0;
const myInterval = setInterval(countTotal, 1000);
function countTotal() {
  if (count === 5) {
    clearInterval(myInterval);
  }
  console.log(count);

  ++count;
}

// Promise problem
async function check() {
  await Promise.resolve(console.log(1));
  await Promise.resolve(console.log(undefined));
  console.log(2);
}

console.log(3);
check();
console.log(4);
