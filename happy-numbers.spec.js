const happy = require('./happy-numbers');

test('it passes in platform tests', () => {
  expect(happy(100)).toBe(true);
  expect(happy(101)).toBe(false);
  expect(happy(102)).toBe(false);
  expect(happy(103)).toBe(true);
  expect(happy(104)).toBe(false);
  expect(happy(105)).toBe(false);
  expect(happy(106)).toBe(false);
  expect(happy(107)).toBe(false);
  expect(happy(108)).toBe(false);
  expect(happy(109)).toBe(true);
  expect(happy(110)).toBe(false);
});
