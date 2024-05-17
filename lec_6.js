/*
What is async?
What is await?
How async await works behind the scenes?
Examples of using async/await
Error Handling
Interviews
Async await vs Promise.then/.catch
*/

// const p = new Promise((resolve, reject) => {
//   resolve("Promise resolved value.");
// });

// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value.");
//   }, 10000);
// });

//async function will always return a promise
// if we don`t return a promise instead return a value it will wrap that value inside a promise and return it.
// async and await are used to handle promises

// async function getData() {
//   return "Hello World!";
// }
// async function getData() {
//   return p;
// }

// const data = getData();
// console.log(data);
// const dataPromise = getData();
// dataPromise.then((res) => console.log(res)).catch((err) => console.log(err));

// function getData() {
//   // JS Engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));
//   console.log("NS JS");
// }

// getData();
// await can only be used inside your async function
// function execution itself is suspended
// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value P1.");
//   }, 20000);
// });
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Promise resolved value P2.");
//   }, 10000);
// });
// async function handlePromise() {
//   console.log("Hello World!");
//   const val = await p1;
//   console.log("NS JS");
//   console.log("P1 : ", val);
//   const val2 = await p2;
//   console.log("NS JS 2");
//   console.log("P2 : ", val2);
// }
// const api_url = "https://jsonplaceholder.typic";
// // handlePromise();
// async function handlePromise() {
// //   try {
// //     const data = await fetch(api_url);
// //     console.log("data", data);
// //     const jsonVal = await data.json();
// //     console.log("JSON Values: ", jsonVal);
// //   } catch (error) {
// //     console.log(error);
// //   }
//     const data = await fetch(api_url);
//     const jsonVal = await data.json();
//     console.log(jsonVal);
// }

// handlePromise().catch((err) => console.log(err));
// async await is just a synthetical sugar over promise native methods

// async function check(){
//     await Promise.resolve(console.log(1));
//     console.log('Bilal')
//     await Promise.resolve(console.log(undefined));
//     console.log(2);
// }

// console.log(3);
// check();
// console.log(4)
add(2,3,4,5);
add(2)(3)(4)(5);
// pure function
const UMT = function (arr){
    const newArr = arr.map((a)=>a*2);
    return newArr;
}

const sort = function(arr){
    return arr.sort((a,b)=>a-b)
}

let arr = [6,9,4,3,2,8];
let newArr = UMT(arr);
let newArr1 = sort(arr);
console.log('arr', arr);
console.log('newArr', newArr);
console.log('newArr1', newArr1);


/*
3                 3
1                 1
undefined         4
2                 undefined
4                 2
*/