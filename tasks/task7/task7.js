/**
 Написать функцию, которая "сдвигает" массив на указанный отступ
 Если отступ отрицательный - двигаем в обратную сторону
 Если отступ больше длины массива - продолжаем сдвигать с начала массива

 transform([1, 2, 3, 4, 5], 0) => [1, 2, 3, 4, 5]
 transform([1, 2, 3, 4, 5], 2) => [3, 4, 5, 1, 2]
 transform([1, 2, 3, 4, 5], 3) => [4, 5, 1, 2, 3]
 transform([1, 2, 3, 4, 5], 6) => [2, 3, 4, 5, 1]
 transform([1, 2, 3, 4, 5], -1) => [5, 1, 2, 3, 4]
 transform([1, 2, 3, 4, 5], 4) => [5, 1, 2, 3, 4]
**/

function transform(list, offset) {
  const newArr = [];
  const arrLength = list.length;
  let newIndex = 0;


  for (let i = 0; i < list.length; i++) {
    if (offset > arrLength) {
      newIndex = i - (offset % 5);
      if (newIndex < 0) {
        newIndex = arrLength + newIndex;
        newArr[newIndex] = list[i];
      }
      newArr[newIndex] = list[i];
    } else if (offset < 0) {
      newIndex = i - offset;
      if (-offset > arrLength) {
        newIndex = i - (offset % 5);
        if (newIndex >= arrLength) {
          newIndex = newIndex - arrLength;
          newArr[newIndex] = list[i];
        }
      }
      if (newIndex >= arrLength) {
        newIndex = newIndex - arrLength;
        newArr[newIndex] = list[i];
      }
      newArr[newIndex] = list[i];
    } else {
      newIndex = i - offset;
      if (newIndex < 0) {
        newIndex = arrLength - offset + i;
        newArr[newIndex] = list[i]
      }
      newArr[newIndex] = list[i];
    }
  }
  return newArr
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      [1, 2, 3, 4, 5],
      0
    ],
    result: [1, 2, 3, 4, 5]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      2
    ],
    result: [3, 4, 5, 1, 2]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      3
    ],
    result: [4, 5, 1, 2, 3]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      6
    ],
    result: [2, 3, 4, 5, 1]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      -1
    ],
    result: [5, 1, 2, 3, 4]
  },
  {
    args: [
      [1, 2, 3, 4, 5],
      4
    ],
    result: [5, 1, 2, 3, 4]
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = transform;
