const champions = require('.');

test('it passes in platform tests', () => {
  expect(champions()).toBe(true);
});
