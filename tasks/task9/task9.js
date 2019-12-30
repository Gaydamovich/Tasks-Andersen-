/**
 Дан массив, в котором могут храниться любые типы данных.
 Нужно реализовать функцию, которая разворачивает вложенные массивы в исходный массив.
 Данные остальных типов должны остаться без изменений.
 Решение должно учитывать любую вложенность элементов (т.е. не должно содержать рекурсивные вызовы)

 flatten(
   [1, 'any [complex] string', null, function() {}, [1, 2, [3, '4'], 0], [], { a: 1 }]
 );
 возвращает
 [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]
 */

function flatten(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
       Array.isArray(arr[i]) ? result = result.concat(flatten(arr[i])) : result.push(arr[i])
    }
    return result
}


/*------------------*/
/*    Test cases    */
/*------------------*/

/* jest workaround */
function func() {}

const testcases = [
  {
    args: [
      [1, 'any [complex] string', null, func, [1, 2, [3, '4'], 0], [], { a: 1 }]
    ],
    result: [1, 'any [complex] string', null, func, 1, 2, 3, '4', 0, { a: 1 }]
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = flatten;
