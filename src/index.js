// function getIdentityMatrix(n) {
//   let arr = [];
//   let matrix = [];
//   arr.length = n
//   arr.fill([0])
//   console.log(arr)
//   arr.flatMap((i, index) => {
//     i.length = n;
//     i.fill(0);
//     i[index] = 1
//     console.log(i, i[index], index)
//   });
// }

// // function propagateItemsByPositionIndex(arr) {
// //   return arr.flatMap((i, index) => Array.from({ length: index + 1 }, (v, k) => k).fill(i));
// // }

// console.log(getIdentityMatrix(4))
