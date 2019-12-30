const {solution, testcases} = require('./task6');

describe('task6', () => {
  test('composes function calls', () => {
    testcases.forEach(({args, carriedArgs, result}) => {
      try {
        expect(solution(...args)(...carriedArgs)).toBe(result);
      } catch (e) {
        console.warn({args, result});
        throw e;
      }
    });
  })
})
