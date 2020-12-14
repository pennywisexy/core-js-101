// function sortDigitNamesByNumericOrder(arr) {
//   let newArr = []
//   let finishArr = []
//   const obj = {
//     'one': 1,
//     'two': 2,
//     'three': 3,
//     'four': 4,
//     'five': 5,
//     'six': 6,
//     'seven': 7,
//     'eight': 8,
//     'nine': 9
//   }
//   arr.map((e)=> {
//     Object.keys(obj).map((key) => {
//       if(e === key) {
//         newArr.push(obj[key])
//       }
//     })
//   });
//   newArr.sort()
//         .map((e) => finishArr.push(Object.entries(obj)[e - 1][0]));
//   return finishArr;
// }

// console.log(sortDigitNamesByNumericOrder(['two', 'one', 'three','four']))
