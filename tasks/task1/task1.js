/**
 Необходимо написать функцию создающую пространство имен.
 На вход подается строка вида: "a.b.c.d.e",
 на выходе ожидаем получить вложенные друг в друга объекты.

 namespace('a.b.c.d.e') -> "{"a":{"b":{"c":{"d":{"e":{}}}}}}"

 **/

function namespace(str) {
    const length = str.split('.').length;
    const newStr = str.replace(/\./g, '\":{\"');
    const strJson = '{\"' + newStr + '\":{}' +  '}'.repeat(length);
    return JSON.parse(strJson);
}

/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      'a.b.c.d.e'
    ],
    result: {a: {b: {c: {d: {e: {}}}}}}
  },
  {
    args: [
      'ab.cd.e'
    ],
    result: {ab: {cd: {e: {}}}}
  }
];

module.exports['testcases'] = testcases;
module.exports['solution'] = namespace;
