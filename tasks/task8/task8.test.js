const {solution, testcases} = require('./task8');

describe('task8', () => {
  test('gets value from object by path string', () => {
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
