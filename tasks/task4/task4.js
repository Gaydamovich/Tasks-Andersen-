/**
 * Написать функцию, которая определяет, является ли переданная строка палиндромом
 * (читается слева-направо и справа-налево одинаково).
 *
 * Примеры палиндромов:
 * - Казак
 * - А роза упала на лапу Азора
 * - Do geese see God?
 * - Madam, I’m Adam
 *
 * Ограничение по памяти O(1).
 */

function isPalindrome(str) {
  const newStr = str.toLowerCase().replace(/\W/g, '');
  return newStr === newStr.split('').reverse().join('');
}


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      'Казак'
    ],
    result: true
  },
  {
    args: [
      'А роза упала на лапу Азора'
    ],
    result: true
  },
  {
    args: [
      'Do geese see God?'
    ],
    result: true
  },
  {
    args: [
      'Madam,  I’m Adam'
    ],
    result: true
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = isPalindrome;
