const champions = require('.');

test('it passes in platform tests', () => {
  expect(
    champions([
      {
        name: 'Manchester United',
        wins: 30,
        loss: 3,
        draws: 5,
        scored: 88,
        conceded: 20
      },
      {
        name: 'Arsenal',
        wins: 24,
        loss: 6,
        draws: 8,
        scored: 98,
        conceded: 29
      },
      {
        name: 'Chelsea',
        wins: 22,
        loss: 8,
        draws: 8,
        scored: 98,
        conceded: 29
      }
    ])
  ).toBe('Manchester United');
  expect(
    champions([
      {
        name: 'Manchester City',
        wins: 30,
        loss: 8,
        draws: 0,
        scored: 67,
        conceded: 20
      },
      {
        name: 'Liverpool',
        wins: 34,
        loss: 2,
        draws: 2,
        scored: 118,
        conceded: 29
      },
      {
        name: 'Leicester City',
        wins: 22,
        loss: 8,
        draws: 8,
        scored: 98,
        conceded: 29
      }
    ])
  ).toBe('Liverpool');

  expect(
    champions([
      {
        name: 'Manchester City',
        wins: 30,
        loss: 8,
        draws: 0,
        scored: 67,
        conceded: 20
      },
      {
        name: 'NewCastle United',
        wins: 34,
        loss: 2,
        draws: 2,
        scored: 118,
        conceded: 36
      },
      {
        name: 'Leicester City',
        wins: 34,
        loss: 2,
        draws: 2,
        scored: 108,
        conceded: 21
      }
    ])
  ).toBe('Leicester City');
  expect(
    champions([
      {
        name: 'Manchester City',
        wins: 30,
        loss: 6,
        draws: 2,
        scored: 102,
        conceded: 20
      },
      {
        name: 'Liverpool',
        wins: 24,
        loss: 6,
        draws: 8,
        scored: 118,
        conceded: 29
      },
      {
        name: 'Arsenal',
        wins: 28,
        loss: 2,
        draws: 8,
        scored: 87,
        conceded: 39
      }
    ])
  ).toBe('Manchester City');
  expect(
    champions([
      {
        name: 'Manchester City',
        wins: 30,
        loss: 6,
        draws: 2,
        scored: 102,
        conceded: 20
      },
      {
        name: 'Liverpool',
        wins: 24,
        loss: 6,
        draws: 8,
        scored: 118,
        conceded: 29
      },
      {
        name: 'Arsenal',
        wins: 30,
        loss: 0,
        draws: 8,
        scored: 87,
        conceded: 39
      }
    ])
  ).toBe('Arsenal');
  expect(
    champions([
      {
        name: 'Chelsea',
        wins: 35,
        loss: 3,
        draws: 0,
        scored: 102,
        conceded: 20
      },
      {
        name: 'Liverpool',
        wins: 24,
        loss: 6,
        draws: 8,
        scored: 118,
        conceded: 29
      },
      {
        name: 'Arsenal',
        wins: 28,
        loss: 2,
        draws: 8,
        scored: 87,
        conceded: 39
      }
    ])
  ).toBe('Chelsea');
});
