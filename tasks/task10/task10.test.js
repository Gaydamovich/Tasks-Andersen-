const {solution} = require('./task10');

describe('task10', () => {
  test('repeats calls', done => {
    const fn = jest.fn(e => Promise.reject(e));
    expect.hasAssertions();
    return solution(fn).catch(e => {
      expect(e).toBeInstanceOf(Error);
      expect(fn).toHaveBeenCalledTimes(5);
      done()
    });
  });
})
