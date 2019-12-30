/**

 Создать функцию compose, чтобы:

 compose(square, times2)(2) === square(times2(2)) // true
 compose(square, times2, sum)(3, 4) === square(times2(sum(3, 4))) // true

 **/

function compose() {

}

/*------------------*/
/*       Mock       */
/*------------------*/


const sum = (x, y) => x + y;
const times2 = x => x * 2;
const square =  x => x * x;


/*------------------*/
/*    Test cases    */
/*------------------*/


const testcases = [
  {
    args: [
      square,
      times2
    ],
    carriedArgs: [2],
    result: 16
  },
  {
    args: [
      square,
      times2,
      sum
    ],
    carriedArgs: [3, 2],
    result: 100
  },
];

module.exports['testcases'] = testcases;
module.exports['solution'] = compose;
