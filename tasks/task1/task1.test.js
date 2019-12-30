const {solution, testcases} = require('./task1');

describe('task1', () => {
  test('creates object from path', () => {
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
