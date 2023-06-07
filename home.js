

// arifmethic

// function array(arr){
//     let n = arr.length;
//     let count = 0;
//     for (let i = 0; i<arr.length; i++){
//       count += arr[i];
//     }
//     if (count % n === 0){
//       console.log( true);
//     }else{
//       console.log(false);
//     }
//   }
  
//   let arr = [3, 5, 1];
//   array(arr);
  

// last array

// Array.prototype.last = function(arr) {
//     let n = arr.length
//     console.log(arr[n-1])
// };

// const arr = [1, 2, 3, 5, 7, 8, 15, 12];
// arr.last(arr);



// Counter


// function Counter(n){
//     let arr = [];
//     for (let i = 1; i <= 3; i++){
//          n += i;
//          arr.push(n)
//     }
//     console.log(arr)

// }

// let n = 15;

// Counter(n);

// multi


// function karra (a, b){
//     let count = 1;
//     for (let i = a; i<=b; i++){
//         count = 1;
//         for (let j = 1; j <= 10; j++){
//             count = j * i;
//             console.log(`${i} * ${j} = ${count} `)
//         }
//         console.log("\t ")
//     }
// }

// let a = +prompt("Start")
// let b = +prompt("End")

// karra(a, b)

// 

// function b(a){
//     for (let i = 1; i <= a; i++){
//         if (a % i ===0 ){
//             console.log(i)
//         }
//     } 
// }

// let k = +prompt("N:")

// b(k)

// recursive function 

// function recursive(a) {
//     if (a.length === 0) {
//       return [];
//     } else {
//       const count = a[0] * a[0];
//       const x = a.slice(1); 
  
//       const count1 = recursive(x); 
//       return [count, ...count1];
//     }
//   }
  
//   const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   const output = recursive(input);
//   console.log(output);