const {solution, testcases} = require('./task5');

describe('task5', () => {
  test('compresses array of numbers to string with ranges', () => {
    testcases.forEach(({args, result}) => {
      try {
        expect(solution(...args)).toBe(result);
      } catch (e) {
        console.warn({args, result});
        throw e;
      }
    });
  })
})
