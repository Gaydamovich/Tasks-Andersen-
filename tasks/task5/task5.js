/**
 Дан список целых чисел, повторяющихся элементов в списке нет.
 Нужно преобразовать это множество в строку,
 сворачивая соседние по числовому ряду числа в диапазоны.

 compress([1, 4, 5, 2, 3, 9, 8, 11, 0]) // '0-5,8-9,11'
 compress([1, 4, 3, 2]) // '1-4'
 compress([1, 4]) // '1,4'

 **/

function compress(list) {
    const arr = [];
    const arrRes = [];

    list.sort((a, b) => a - b);

    for (let i = 0; i < list.length; i++) {
        if (list[i] + 1 === list[i + 1]) {
            arr.push(list[i])
        } else {
            arr.push(list[i]);
            arr.push(' ');
        }
    }
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (isFinite(arr[i]) && (arr[i - 1] === ' ' || arr[i - 1] === undefined)) {
            count = i
        }
        if (arr[i] === ' ') {
            arrRes.push(arr.slice( count, i));
        }
    }

    return arrRes.map((el) => {
        if (el.length === 1) {
            return el
        }
        el.splice(1, el.length - 2, '-');
        return el
    })
        .map(el => el.join(''))
        .join(',')
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      [1, 4, 5, 2, 3, 9, 8, 11, 0]
    ],
    result: '0-5,8-9,11'
  },
  {
    args: [
      [1, 4, 3, 2]
    ],
    result: '1-4'
  },
  {
    args: [
      [1, 4]
    ],
    result: '1,4'
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = compress;
