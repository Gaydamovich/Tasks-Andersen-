const {solution, testcases} = require('./task9');

describe('task9', () => {
  test('flattens array', () => {
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
