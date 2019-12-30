const {solution, testcases} = require('./task4');

describe('task4', () => {
  test('checks if given string is palindrome', () => {
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
