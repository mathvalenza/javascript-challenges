const digitsCount = require('.');

test('it passes in platform tests', () => {
  let [numVector, resVector] = [
    [
      0,
      12345,
      1289396387328,
      -1232323,
      3463463874638476,
      -231.2e6,
      1283939312321,
      -231273683,
      3.2e6,
      314890e3
    ],
    [1, 5, 13, 7, 16, 9, 13, 9, 7, 9]
  ];

  for (let i in numVector) {
    expect(digitsCount(numVector[i])).toBe(resVector[i]);
  }
});
