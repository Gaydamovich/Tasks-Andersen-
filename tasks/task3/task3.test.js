const {solution, testcases} = require('./task3');

describe('task3', () => {
  test('converts object keys to camelCase recursively', () => {
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
