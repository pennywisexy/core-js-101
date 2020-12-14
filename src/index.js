// function propagateItemsByPositionIndex(arr) {
//   let newArr = [];
//   let count = 0;
//   let count1 = 0;
//   Array.prototype.map.call(arr, (e) => {
//    if(arr.indexOf(e) === count) {
//      Array.prototype.unshift.call(newArr, [])
//      Array.prototype.map.call(newArr, (el) => {
//        Array.prototype.push.call(el, e)
//      });
//      count += 1;
//    }
//    return newArr
//   });
//   Array.prototype.map.call(newArr, (elemArr) => {
//     if(newArr.indexOf(elemArr) === count1){
//       Array.prototype.map.call(elemArr, (element) => {
//         console.log(element)

//         element = arr[arr.indexOf(count1)]
//       })
//      count += 1;
//     }
//    return newArr
//   })
//   console.log(newArr)
// }
// console.log(propagateItemsByPositionIndex([1,2,3,4]))
