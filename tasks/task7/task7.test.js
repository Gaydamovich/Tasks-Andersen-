const {solution, testcases} = require('./task7');

describe('task7', () => {
  test('shifts array', () => {
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
