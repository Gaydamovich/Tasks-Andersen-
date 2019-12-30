const {solution, testcases} = require('./task2');

describe('task2', () => {
  test('sorts tickets to make route', () => {
    testcases.forEach(({args, result}) => {
      try {
        expect(solution(...args)).toEqual(result);
      } catch (e) {
        console.warn({args, result});
        throw e;
      }
    });
  })
})
