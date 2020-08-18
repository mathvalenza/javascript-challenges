const resist = require('.');

test('it passes in platform tests', () => {
  expect(resist('(2, 3, 6)')).toBe(11.0);
  expect(resist('[2, 3, 6]')).toBe(1.0);
  expect(resist('[10, 20, [30, (40, 50), 60, (70, 80)], 90]')).toBe(4.4);
  expect(resist('(1, [12, 4, (1, [10, (2, 8)])])')).toBe(3.0);
  expect(resist('([10, 15], (5, 6, 5))')).toBe(22.0);
  expect(resist('[22, 6, (10, 18, [33, 15]), (10, [63, 50], 45)]')).toBe(4.0);
  expect(resist('[([(470, 1000), 330], 470), 680]')).toBe(354.3);
  expect(resist('([([(470, 680), 330], 1000), 470], 680)')).toBe(1022.0);
  expect(resist('(6, [8, (4, [8, (4, [6, (8, [6, (10, 2)])])])])')).toBe(10.0);
});
