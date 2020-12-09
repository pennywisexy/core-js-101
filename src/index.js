// function getCardId(value) {
//   let id;

//   function switchFunc(localValue, count) {
//     console.log(+localValue[1] === 0)
//     if(+localValue[1] === 0) {
//       return 9 + count
//     }else {
//       switch (localValue[0]) {
//         case 'A': id = 0 + count;
//           return id;
//         case 'J': id = 10 + count;
//           return id;
//         case 'Q': id = 11 + count;
//           return id;
//         case 'K': id = 12 + count;
//           return id;
//         default: return localValue[0] - 1 + count;
//       }
//     }
//   }
//   if(+value[1] === 0) {
//     switch (value[2]) {
//       case '♣': return switchFunc(value, 0);
//       case '♦': return switchFunc(value, 13);
//       case '♥': return switchFunc(value, 26);
//       case '♠': return switchFunc(value, 51);
//       default: return value[1];
//     }
//   }else {
//     switch (value[1]) {
//       case '♣': return switchFunc(value, 0);
//       case '♦': return switchFunc(value, 13);
//       case '♥': return switchFunc(value, 26);
//       case '♠': return switchFunc(value, 51);
//       default: return value[1];
//     }
//   }
// }

// let arr = [
//   'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
//   'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
//   'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
//   'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠']

// console.log(getCardId('2♣'))
